import {useNavigate, useLocation} from "react-router-dom";
import "./Home.css";

const Home = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    
    const revealMessage = async() => {
        try {
            const account = location .state.address;
            const res = await fetch(`https://localhost:3000/members`,{
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({from: account})
            });
            const data = await res.json();
            console.log(data);
            if(data.status === 200){
                navigateTo("/members") // the user has atleast one NFT and can access the members page
            }else {
                alert("You do not hold any NFTs in collection")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return<>
    <span className="random-statement">I have a secret message for holders of a NFT</span>
    <br/>
    <button onClick={revealMessage}>Reveal the Message</button>
    </>
}


export default Home;