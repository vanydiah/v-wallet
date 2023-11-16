import logo from '../assets/logo.png';
import './Home.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react";

function Home() {
    const navigate = useNavigate()
    const [isConnect, setIsConnect] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [walletAdrres, setWalletAdrres] = useState(null);
    const [btnText, setBtnText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (isConnect) {
            navigate(`/dashboard`);
        } else {
            if (window.ethereum) {
                window.ethereum.request({ method: 'eth_requestAccounts' })
                    .then(result => {
                        setIsConnect(true);
                        setWalletAdrres(result[0]);
                        setBtnText('Go to My Wallet');
                    })
                    .catch(err => {
                        setErrorMessage(err);
                    });
            } else {
                setErrorMessage('Install MetaMask!');
            }
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <div className="flex">
                        <div className="text-left">
                            <h1>
                                V-Wallet
                            </h1>
                            <p>Trusted and Secured Simple Crypto Wallet</p>
                            <br /><br />
                            <button onClick={connectWalletHandler} className={(isConnect ? 'connected' : '') + ' btn-connect'}>
                                {btnText}
                            </button>
                            <br />
                            {errorMessage && <small className='warningText'>{errorMessage}</small>}
                            {isConnect && <small className='walletAddress'>Successfully connected<br />Address : {walletAdrres}</small>}
                        </div>
                        <div>
                            <Lottie animationData={require('../assets/json/wallet-lottie.json')} loop={true} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
