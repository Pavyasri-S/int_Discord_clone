import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const navigate = useNavigate();
    const openChannels = () => {
            navigate('/channels');
    };
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0b0714] via-[#1a125c] to-[#2c39a7] text-white">
            {/* Header Section */}
            <header className="w-full fixed top-0 z-10 bg-transparent p-4 flex justify-center">
                <nav className="md:flex space-x-8 items-center hidden">
                    <a href="#download" className="text-lg hover:underline">Download</a>
                    <a href="#nitro" className="text-lg hover:underline">Nitro</a>
                    <a href="#discover" className="text-lg hover:underline">Discover</a>
                    <a href="#quests" className="text-lg hover:underline">Quests</a>
                    <a href="#safety" className="text-lg hover:underline">Safety</a>
                    <a href="#support" className="text-lg hover:underline">Support</a>
                    <a href="#careers" className="text-lg hover:underline">Careers</a>
                    <button onClick={openChannels}
                        className="ml-4 bg-white text-black py-2 px-6 rounded-3xl font-semibold hover:text-backgroundcolor transition">
                        Open Discord
                    </button>
                </nav>
            </header>

            {/* Main Section */}
            <main className="flex-grow flex flex-col md:flex-row items-center justify-between pt-28 px-6">
                {/* Left Section: Text Content */}
                <div className="md:w-1/2 flex items-center justify-center md:justify-items-start">
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight font-sans">
                            GROUP CHAT <br/>
                            THAT'S ALL <br/>
                            FUN & GAMES
                        </h1>
                        <p className="text-lg md:text-2xl max-w-lg mx-auto md:mx-0">
                            Discord is great for playing games and<br/> chilling with friends, or even building a <br/>worldwide community. 
                            Customize your <br/>own space to talk, play, and hang out.
                        </p>
                    </div>
                </div>

                {/* Right Section: Illustration */}
                <div className="md:w-1/2 flex items-center justify-center">
                    <img 
                        src="/image.png" 
                        alt="Discord UI" 
                        className="max-w-full h-auto"
                    />
                </div>
            </main>

            {/* Footer Section */}
            <footer className="flex flex-col items-center justify-center space-y-6 py-6 ">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                    <button 
                        className="bg-white text-black py-3 px-6 rounded-3xl font-semibold shadow-lg hover:text-backgroundcolor transition flex items-center">
                        <img 
                            src="/download.png" 
                            alt="Download icon" 
                            className="w-6 h-6 mr-2" 
                        />
                        Download for Mac
                    </button>
                    <button onClick={openChannels}
                        className="bg-inherit bg-backgroundcolor py-3 px-6 rounded-3xl font-semibold hover:shadow-lg transition">
                        Open Discord in your browser
                    </button>
                </div>
                <p className="text-sm text-gray-400">
                    © 2024 Discord, Inc. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;
