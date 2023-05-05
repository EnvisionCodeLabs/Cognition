import { useState } from "react";
import Home from "./page/Home/Home";
import Landing from "./page/Landing/Landing"

function App() {

    const [account, setAccount] = useState(null);

    const connectToWallet = async () => {
      const { ethereum } = window

        const accounts = await ethereum.request({method: "eth_requestAccounts"})
        await setAccount(accounts[0])

    }


  return account ? <Home/> : <Landing connect={connectToWallet}/>;
}

export default App
