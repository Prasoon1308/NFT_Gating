# NFT_Gating
----using NFTs to control access to exclusive digital content or experiences. It's like using special digital keys (NFTs) to unlock specific digital items or areas. This creates uniqueness and value for NFT holders.

**Benefits of NFT Gating websites:**
1. Scarcity and Exclusivity
2. Enhanced Collectability
3. Community building
4. Rewarding Engagement 
5. Monetization Opportunnities
6. Content protection


_Usage of Quicknode (QuickAllerts):_ if an NFT is transferred from the account, immediately a webhook is send back to the server which emits an event at the client instance to check whether the requirement of minimum number of NFTs required is matched or not. If the requirement is failed, the client instance is destroyed and automatically an error is emmitted.  

_Cors:_ security feature implemented by web browsers to prevent web pages from making requests to a different domain than the one that served the web page.

## The making of the project
    1. Making of an NFT contract
    2. Creating server for deploying the contract instance
    3. Creating React components using vite tooling such as home, members and wallet page.
    4. Create Webhooks (to resolve the issue of after transfer of an NFT to other accounts, access should also be transferred and the ex seller should be rechecked for the eligibility again after the transfer). Also used ngrok
        -> destination.js : to know the place where quicknode request is to be sent. 
        (if any transfer is occured, quicknode quickalert will send a request to know about it which is known as webhook) 
        -> notification.js : 
        we will use 3 data points (account to be monitored(without 0x) + contract address + transfer function from nft contract (transfer event catched on transaction)) and convert it into base64 encode which will be used in the `expression` part of notification.js 
