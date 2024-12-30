import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Mainpage from './Mainpage';

const App: React.FC = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(
        JSON.parse(localStorage.getItem('loggedIn') || 'false')
    );
    
    useEffect(() => {
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    }, [loggedIn]);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        showSignUp ? (
                            <SignUp setShowSignUp={setShowSignUp} setLoggedIn={setLoggedIn} />
                        ) : (
                            <SignIn
                                setShowSignUp={setShowSignUp}
                                setLoggedIn={setLoggedIn}
                            />
                        )
                    }
                />
                <Route 
                    path="/home" 
                    element={loggedIn ? <Home /> : <Navigate to="/" replace />} 
                />
                <Route
                    path="/channels"
                    element={loggedIn ? <Mainpage /> : <Navigate to="/" replace />}
                />
            </Routes>
        </Router>
    );
};

export default App;