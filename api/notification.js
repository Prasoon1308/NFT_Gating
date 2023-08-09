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