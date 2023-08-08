const axios = require("axios");

const headers = {
    'accept': 'application.json',
    'x-api-key': 'QN_81a1fcdee23d4bf88661f215e6b067be'
};

const data = {
    name: 'My destination',
    to_url: '', // link from running ngrok
    webhook_type: 'POST',
    service: 'webhook',
    payload_type: 5
}

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, {headers})
.then(response => console.log("Response Data", response.data))
.catch(error=> console.log('error', error));