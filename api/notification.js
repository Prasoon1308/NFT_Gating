const axios = require('axios');

const headers = {
    'accept': 'application/json',
    'x-api-key': 'QN_81a1fcdee23d4bf88661f215e6b067be'
};

const data = {
    name: 'NFT Transfer',
    expression: '',
    network: 'ethereum-sepolia',
    destinationIds: [''] // from running destination.js 
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, {headers})
.then(response => console.log(response.data))
.catch(error => console.log('error:', error));

// account to be monitored(without 0x) + contract address + transfer function from nft contract (transfer event catched on transaction)
// convert this to base64 encode and place it in the `expression` 

// (tx_logs_topic1 =~ '') &&
// (tx_logs_address == '') &&
// (tx_logs_topic0 == '') 
