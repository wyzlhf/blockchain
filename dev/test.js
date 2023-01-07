const Blockchain=require('./blockchain')
const bitcoin=new Blockchain()
const { v1: uuidv1 } = require('uuid')


// bitcoin.createNewBlock(892348,'A90SDNF09AN90N','OIANS909A0S9NF')
// bitcoin.createTransaction(100,'ALEXSD89F9W0N90A','JENN0AN09N09A9')
// bitcoin.createNewBlock(123123,'09IOANSDFN09','JNKABSDFUBU8998H')
//
//
// bitcoin.createTransaction(30,'ALEXSD89F9W0N90A','JENN0AN09N09A9')
// bitcoin.createTransaction(50,'ALEXSD89F9W0N90A','JENN0AN09N09A9')
// bitcoin.createTransaction(100,'ALEXSD89F9W0N90A','JENN0AN09N09A9')
//
// bitcoin.createNewBlock(234234,'09IOANSDFN09','JNKABSDFUBU8998H')
// bitcoin.createNewBlock(345345,'09IOANSDFN09','JNKABSDFUBU8998H')
// bitcoin.createNewBlock(456456,'09IOANSDFN09','JNKABSDFUBU8998H')
//
//
// console.log(bitcoin)
//
// const previousBlockHash='8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'
// const currentBlockData=[
//     {
//         amount:10,
//         sender:'3dcf02346e998bcc71c7b3a1efd997e68a72b92b099572334ef54c9a53d29b05',
//         recipient:'d37cee4efdfced950a67b1f3a044a72c64b7e4b036a39861c444a4996012ee8c'
//     },
//     {
//         amount:30,
//         sender:'6a4ba77ae630d1f9a9e9e9dbfdbb027cebe16267858e82bfc04e1f6c170c3bd0',
//         recipient:'a4f236f2f1f223a743a33770a9b5e713333d34cdc42208a30c622a571ee2bedc'
//     },
//     {
//         amount:200,
//         sender:'79abf8a678ae577a873cf66b20e6ce24ed7f7952a461eb1e12e20e52fd4022d7',
//         recipient:'6f3e936eb5d317067a6c02c42c38659a7d6779d023a19fceea410d1a65628b15'
//     }
// ]
// const nonce=100
//
// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))
//
// console.log(bitcoin)
//
// console.log(uuidv1())
//
// Promise.all([1,2,3]).then(data=>{
//     console.log(data+1)
// })

const bc1={
    "chain": [
        {
            "index": 1,
            "timestamp": 1673057271176,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1673057364994,
            "transactions": [
                {
                    "amount": 100,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "431ea6908e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 200,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "452795f08e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 300,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "472191308e3011eda87e8b3d8e233c0b"
                }
            ],
            "nonce": 75895,
            "hash": "00008ec40a265194318e1fbd31726052fe6a19db4fe6b03e880003fd586e418e",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1673057389460,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "16e0d0808e3011eda87e8b3d8e233c0b",
                    "transactionId": "4ecd5f908e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 400,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "598472208e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 500,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "5b64f1f08e3011eda87e8b3d8e233c0b"
                }
            ],
            "nonce": 10207,
            "hash": "0000f2da15c7d0483ee0be809239f137bdc350aaeb1340a38eab0cd82e234ab3",
            "previousBlockHash": "00008ec40a265194318e1fbd31726052fe6a19db4fe6b03e880003fd586e418e"
        },
        {
            "index": 4,
            "timestamp": 1673057432344,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "16e0d0808e3011eda87e8b3d8e233c0b",
                    "transactionId": "5d61d3608e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 600,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "7132ea508e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 700,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "730eaf308e3011eda87e8b3d8e233c0b"
                },
                {
                    "amount": 800,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "74c475808e3011eda87e8b3d8e233c0b"
                }
            ],
            "nonce": 14587,
            "hash": "0000fb81074687889af9877cb43f2252539bf4aa33a13f39c488fc7ef5f399d5",
            "previousBlockHash": "0000f2da15c7d0483ee0be809239f137bdc350aaeb1340a38eab0cd82e234ab3"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "16e0d0808e3011eda87e8b3d8e233c0b",
            "transactionId": "76f167a08e3011eda87e8b3d8e233c0b"
        }
    ],
    "currentNodeUrl": "http://127.0.0.1:3001",
    "networkNodes": []
}

console.log('VALID: ',bitcoin.chainIsValid(bc1.chain))