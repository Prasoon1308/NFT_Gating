const express = require("express");
const { Web3 } = require("web3");
const ABI = require("./ABI.json");
const cors = require("cors");
const socketIO = require("socket.io");
require("dotenv").config();

const contractAddress = process.env.CONTRACT_ADDRESS;
const quicknodeUrl = process.env.QUICKNODE_URL;
const account1 = process.env.ACCOUNT1;
const account2 = process.env.ACCOUNT2;

const app = express();
app.use(cors());
app.use(express.json);
const web3 = new Web3(quicknodeUrl);

const contract = new web3.eth.Contract(ABI, contractAddress);
console.log(contract);

const fetchNFTs = async (account) => {
  try {
    const nftBalance = await contract.methods.balanceOf(account).call();
    return { userNFTs: Number(nftBalance) };
  } catch (error) {
    console.log("Error fetching NFTs", error);
  }
};

app.post("/members", async (req, res) => {
  try {
    const account = req.body.from;
    console.log(account);
    const numNFTs = await fetchNFTs(account);

    if (numNFTs.userNFTs > 0) {
      res.status(200).json({ status: 200, numNFTs });
    } else {
      res
        .status(404)
        .json({ status: 404, message: "You don't own any nft", numNFTs });
    }
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
});

app.post("/webhook", async(req, res)=>{
  try {
    const account = req.body[0].from;
    const numNFTs = await fetchNFTs(account);
    io.emit('nftsUpdated', {userNFTs:numNFTs.userNFTs})
    res.status(200).json({status:200, message: "Webhook Triggered"});
    console.log(account);
  } catch (error) {
    console.log("error:", error);
  }
})

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Sever running at ${PORT}`);
});
const io = socketIO(server);
io.on('connection', ()=>{
  console.log("Connected")
})
