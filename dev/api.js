const express=require('express')
const {log} = require("nodemon/lib/utils");
const bodyParser=require('body-parser')
const Blockchain=require('./blockchain')
const { v4: uuidv4 } = require('uuid')



const nodeAddress=uuidv4().split('-').join('')
const bitcoin=new Blockchain()
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get('/blockchain',function (req,res){
    res.send(bitcoin)
})

app.post('/transaction',function (req,res) {
    const blockIndex=bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient)
    res.json({note:`Transaction will be added in block ${blockIndex}.`})
})

app.get('/mine',function (req,res) {
    const lastBlock=bitcoin.getLastBlock()
    const previousBlockHash=lastBlock['hash']
    const currentBlockData={
        transactions:bitcoin.pendingTransactions,
        index:lastBlock['index']+1
    }
    const nonce=bitcoin.proofOfWork(previousBlockHash,currentBlockData)
    const blockHash=bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce)

    bitcoin.createNewTransaction(12.5,'00',nodeAddress)

    const newBlock=bitcoin.createNewBlock(nonce,previousBlockHash,blockHash)
    res.json({
        note:"New block mined successfully",
        block:newBlock
    })
})

app.listen(3000,function () {
    console.log('Listening on port 3000...')
})