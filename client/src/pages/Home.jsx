import {useNavigate, useLocation} from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    
    const revealMessage = async() => {
        try {
            const account = location .state.address;
            console.log(account)
        } catch (error) {
            console.log(error)
        }
    }

    return<><button onClick={revealMessage}>Reveal the Message</button></>
}


export default Home;