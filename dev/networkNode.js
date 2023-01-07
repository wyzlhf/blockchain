const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const Blockchain=require('./blockchain')
const { v1: uuidv1 } = require('uuid')
const port=process.argv[2]
const rp=require('request-promise')
// const nf=require('node-fetch')

const nodeAddress=uuidv1().split('-').join('')

const bitcoin=new Blockchain()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/blockchain', function (req, res) {
    res.send(bitcoin)
})
app.post('/transaction',(req,res)=>{
    // const blockIndex=bitcoin.createTransaction(req.body.amount,req.body.sender,req.body.recipient)
    // res.json({
    //     note:`Transaction will be added in block ${blockIndex}.`
    // })
    const newTransaction=req.body
    const blockIndex=bitcoin.addTransactionToPendingTransactions(newTransaction)
    res.json({
        note:`Transaction will be added in block ${blockIndex}.`
    })
})
app.post('/transaction/broadcast',(req,res)=>{
    const newTransaction=bitcoin.createTransaction(req.body.amount,req.body.sender,req.body.recipient)
    bitcoin.addTransactionToPendingTransactions(newTransaction)
    const requestPromises=[]
    bitcoin.networkNodes.forEach(networkNodeUrl=>{
        const requestOptions={
            uri:networkNodeUrl+'/transaction',
            method:'POST',
            body:newTransaction,
            json:true
        }
        requestPromises.push(rp(requestOptions))
    })
    Promise.all(requestPromises).then(data=>{
        res.json({note:'Transaction created and broadcast successfully.'})
    })
})
app.get('/mine',(req,res)=>{
    const lastBlock=bitcoin.getLastBlock()
    const previousBlockHash=lastBlock['hash']
    const currentBlockData={
        transactions: bitcoin.pendingTransactions,
        index:lastBlock['index']+1
    }
    const nonce=bitcoin.proofOfWork(previousBlockHash,currentBlockData)
    const blockHash=bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce)

    bitcoin.createTransaction(12.5,'00',nodeAddress)

    const newBlock=bitcoin.createNewBlock(nonce,previousBlockHash,blockHash)

    const requestPromises=[]
    bitcoin.networkNodes.forEach(networkNodeUrl=>{
        const requestOptions={
            uri:networkNodeUrl+'/receive-new-block',
            method:'POST',
            body:{newBlock:newBlock},
            json:true
        }
        requestPromises.push(rp(requestOptions))
    })
    Promise.all(requestPromises).then(data=>{
        const requestOptions={
            uri:bitcoin.currentNodeUrl+'/transaction/broadcast',
            method:'POST',
            body:{
                amount:12.5,
                sender:'00',
                recipient:nodeAddress
            },
            json:true
        }
        return rp(requestOptions)
    }).then(data=>{
        res.json({
            note:"New block mined and broadcast successfully",
            block:newBlock
        })
    })

    // res.redirect('/blockchain')
})
app.post('/receive-new-block',(req,res)=>{
    const newBlock=req.body.newBlock
    const lastBlock=bitcoin.getLastBlock()
    const correctHash=lastBlock.hash===newBlock.previousBlockHash
    const correctIndex=lastBlock.index+1===newBlock['index']
    if (correctHash && correctIndex){
        bitcoin.chain.push(newBlock)
        bitcoin.pendingTransactions=[]
        res.json({
            note:'New block received and accepted.',
            newBlock:newBlock
        })
    }else {
        res.json({
            note:'New block rejected.',
            newBlock:newBlock
        })
    }
})
app.post('/register-and-broadcast-node',(req,res)=>{
    const newNodeUrl=req.body.newNodeUrl
    if(bitcoin.networkNodes.indexOf(newNodeUrl)===-1){
        bitcoin.networkNodes.push(newNodeUrl)
    }
    const regNodesPromises=[]
    bitcoin.networkNodes.forEach(networkNodeUrl=>{
        const requestOptions={
            uri:networkNodeUrl+'/register-node',
            method:'POST',
            body:{newNodeUrl:newNodeUrl},
            json:true
        }
        regNodesPromises.push(rp(requestOptions))
    })
    Promise.all(regNodesPromises).then(data=>{
        const bulkRegisterOptions={
            uri:newNodeUrl+'/register-nodes-bulk',
            method: 'POST',
            body: {allNetworkNodes:[...bitcoin.networkNodes,bitcoin.currentNodeUrl]},
            json: true
        }
        return rp(bulkRegisterOptions)
    }).then(data=>{
        res.json({note:'New node registered with network successfully.'})
    })
})
app.post('/register-node',(req,res)=>{
    const newNodeUrl=req.body.newNodeUrl
    const nodeNotAlreadyPresent=bitcoin.networkNodes.indexOf(newNodeUrl)===-1
    const notCurrentNode=bitcoin.currentNodeUrl!==newNodeUrl
    if(nodeNotAlreadyPresent && notCurrentNode){
        bitcoin.networkNodes.push(newNodeUrl)
    }
    res.json({note:'New node registered successfully with node.'})
})
app.post('/register-nodes-bulk',(req,res)=>{
    const allNetworkNodes=req.body.allNetworkNodes
    allNetworkNodes.forEach(networNodeUrl=>{
        const nodeNotAlreadyPresent=bitcoin.networkNodes.indexOf(networNodeUrl)===-1
        const notCurrentNode=bitcoin.currentNodeUrl!==networNodeUrl
        if(nodeNotAlreadyPresent && notCurrentNode){
            bitcoin.networkNodes.push(networNodeUrl)
        }
    })
    res.json({note:'Bulk registeration successfully.'})
})
app.get('/consensus',(req,res)=>{
    const requestPromises=[]
    bitcoin.networkNodes.forEach(networkNodeUrl=>{
        const requestOptions={
            uri:networkNodeUrl+'/blockchain',
            method:'GET',
            json:true
        }
        requestPromises.push(rp(requestOptions))
    })
    Promise.all(requestPromises).then(blockchains=>{
        const currentChainLength=bitcoin.chain.length
        let maxChainLength=currentChainLength
        let newLongestChain=null
        let newPendingTransactions=null
        blockchains.forEach(blockchain=>{
            if(blockchain.chain.length>maxChainLength){
                maxChainLength=blockchain.chain.length
                newLongestChain=blockchain.chain
                newPendingTransactions=blockchain.pendingTransactions
            }
        })
        if(!newLongestChain || (newLongestChain && !bitcoin.chainIsValid(newLongestChain))){
            res.json({
                note:'Current chain has not been replaced.',
                chain:bitcoin.chain
            })
        }else{
            bitcoin.chain=newLongestChain
            bitcoin.pendingTransactions=newPendingTransactions
            res.json({
                note:'Current chain has been replaced.',
                chain:newLongestChain
            })
        }
    })
})

app.listen(port,()=>{
    console.log(`Listening on the port ${port}...`)
})