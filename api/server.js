const express = require("express");
const { Web3 } = require("web3");
const ABI = require("./ABI.json");
require('dotenv').config();

const contractAddress = process.env.CONTRACT_ADDRESS
const quicknodeUrl = process.env.QUICKNODE_URL
const account1 = process.env.ACCOUNT1
const account2 = process.env.ACCOUNT2

const app = express();
const web3 = new Web3(quicknodeUrl);

const contract = new web3.eth.Contract(ABI, contractAddress);
console.log(contract);

const fetchNFTs = async () => {
  try {
    const nftBalance = await contract.methods.balanceOf(account1).call();
    return {userNFTs : Number(nftBalance)}
  } catch (error) {
    console.log("Error in fetching the NFTs: ",error)
  }
}

app.post("/members", async(req, res)=>{
    try {
        const account = req.body.from
        const numNFTs = await fetchNFTs(account)

        if(numNFTs.userNFTs > 0){
            res.status(200).json({status : 200, numNFTs})
        }else{
            res.status(400).json({status : 400, message : "You don't have any NFT!"})
        }
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running at ${PORT}");
});
