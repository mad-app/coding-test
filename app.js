const express =require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const Contract = require('web3-eth-contract');
const Web3 = require('web3');


const ByteCode = JSON.parse(fs.readFileSync('./contracts/ByteCode','utf-8'));
const ABI = JSON.parse(fs.readFileSync('./contracts/ABI', 'utf-8'));





app.use(express.json());

app.get('/', (req, res) => {
	res.send(Web3.utils.toHex('Hello'));
});


app.post('/erc721/deploy', (req, res) => {
    name_ = req.body.name;
    symbol_ = req.body.symbol;
    owner_ = req.body.owner;
    hash = "0x0";
    CA = "0x0";
    async function deploy(name_, symbol_, owner_) {
        const abi = ABI;
        const byteCode = ByteCode;

        Contract.setProvider('http://127.0.0.1:7545');
        const contract = new Contract(abi);
        contract.deploy({
            data:"0x" + byteCode, 
            arguments: [name_, symbol_]
        })
        .send({
            from:owner_, 
            gas: 2000000, 
            gasPrice:'1000000000000'
        }).on('receipt', function(receipt){
            CA = receipt.contractAddress;
            hash = receipt.transactionHash;
            res.status(200).json({"contractAddress": CA, "transactionHash": hash});
        })
    }
    deploy(name_, symbol_, owner_)
    

})

app.listen(port, () => {
	console.log('Listening...');
});