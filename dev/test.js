const Blockchain=require('./blockchain')
const bitcoin=new Blockchain();
// const uuid=require('uuid/v1')
// const { v4: uuidv4 } = require('uuid')
// const previousBlockHash='AS23RFGHVFVIJEMCUDMXSCJME874JCUEM3XME'
// const currentBlockData=[
//     {
//         amount:10,
//         sender:'N90DENDDD84DJDNADNSLDM',
//         recipient:'NDFCENDGD84DQDNABNSLDM'
//     },
//     {
//         amount:30,
//         sender:'N90DREDDD8F56DNBGHSLDM',
//         recipient:'NLOUENDGD84DRDNAFNSLDM'
//     },
//     {
//         amount:200,
//         sender:'N90KDHVDD8FG4HNBMNYLDM',
//         recipient:'NAFEENGHR84HUINADFML75'
//     }
// ]
//
// console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))
// console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,33317))
// console.log(bitcoin)
// console.log(uuidv4().split('-').join(''))
// Promise.all([1, 2, 3]).then((values) => {
//     console.log(values);
// });

const bc1={
    "chain": [
        {
            "index": 1,
            "timestamp": 1670995341333,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1670995539942,
            "transactions": [
                {
                    "amount": 100,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "debeb7e37c3440899d2e54d6308c6cdd"
                },
                {
                    "amount": 100,
                    "sender": "NODFUNF8465FN4LFSSFNALUHGRUYTVV",
                    "recipient": "SAONF4MDIOELKSGL94JFJJ3DJR5IFJ8",
                    "transactionId": "524363a7664940e3a13c1f312600a043"
                }
            ],
            "nonce": 66975,
            "hash": "00005569b66ada20f8d45aad7e7148fa6ab00427b8ba1934ae9bbcee556abc55",
            "previousBlockHash": "0"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "d056cf70178c423a974544030faed14c",
            "transactionId": "f9012ff3ae974a39ba4e91b30dd0e898"
        }
    ],
    "currentNodeUrl": "http://127.0.0.1:3001",
    "networkNodes": [
        "http://127.0.0.1:3005",
        "http://127.0.0.1:3004",
        "http://127.0.0.1:3003",
        "http://127.0.0.1:3002"
    ]
}
console.log(bitcoin.chainIsValid(bc1.chain))