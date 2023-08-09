import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {io} from "socket.io-client";
const Members = () => {
    const navigateTo = useNavigate();
    const [socket, setSocket] = useState(null);

    useEffecct(() => {
        const socketInstance = io("http://localhost:3000");
        setSocket(socketInstance);
        console.log(socket);
        return() => {
            socketInstance.disconnect();
        }
    }, [])

    useEffect(() => {
        if(socket){
            socket.on('nftsUpdated', (data) => {
                if(data.userNFTs<1){
                    navigateTo('/');
                    alert('You have been logged out as you no longer have any NFTs, please buy some!');
                }
            })
        }
    }, [socket, navigateTo])
    return <>
    <p>Gm! Thank you for being a holder of the NFT collection, Appreciate your trust on ours!</p>
    </>
}


export default Members;