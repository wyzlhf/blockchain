const Blockchain=require('./blockchain')
const bitcoin=new Blockchain();
// const uuid=require('uuid/v1')
const { v4: uuidv4 } = require('uuid')
const previousBlockHash='AS23RFGHVFVIJEMCUDMXSCJME874JCUEM3XME'
const currentBlockData=[
    {
        amount:10,
        sender:'N90DENDDD84DJDNADNSLDM',
        recipient:'NDFCENDGD84DQDNABNSLDM'
    },
    {
        amount:30,
        sender:'N90DREDDD8F56DNBGHSLDM',
        recipient:'NLOUENDGD84DRDNAFNSLDM'
    },
    {
        amount:200,
        sender:'N90KDHVDD8FG4HNBMNYLDM',
        recipient:'NAFEENGHR84HUINADFML75'
    }
]

// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,33317))
// console.log(bitcoin)
console.log(uuidv4().split('-').join(''))