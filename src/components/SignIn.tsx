import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/auth';
import { loadUsers,saveCurrentUser } from '../utils/storage';

interface SignInProps {
    setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<SignInProps> = ({ setShowSignUp, setLoggedIn }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setError('');
    };

    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    const users = loadUsers();
    const user = users.find((user: User) => user.email === email);

    if (!user) {
        setError('Email does not exist.');
        return;
    }

    if (user.password !== password) {
        setError('Incorrect password.');
        return;
    }

    saveCurrentUser(user.username);
    setLoggedIn(true);
    navigate('/home');
    };

    return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0b0714] via-[#1a125c] to-[#2c39a7] text-white items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-sm sm:max-w-md mx-auto mt-10 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <h6 className="text-xl sm:text-2xl text-center text-gray-50 mb-4 sm:mb-6 font-bold">Welcome back!</h6>
        <p className="text-base sm:text-lg text-center text-gray-50 mb-4 sm:mb-6 font-bold">We're so excited to see you again!</p>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
            <label className="font-bold text-gray-200">EMAIL</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 bg-gray-900 rounded-md text-white"
            />
            </div>
            <div className="relative space-y-2 sm:space-y-3">
            <label className="font-bold text-gray-200">PASSWORD</label>
            <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 bg-gray-900 rounded-md text-white"
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 bottom-3 text-gray-200"
            >
                {passwordVisible ? 'Hide' : 'Show'}
            </button>
            </div>
            {error && <p className="text-red-500 text-sm" aria-live="assertive">{error}</p>}
            <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-indigo-700 text-white rounded-lg hover:bg-indigo-800 transition duration-300"
            >
            Log in
            </button>
        </form>
        <div className="mt-4 text-left">
            <p className="text-sm text-gray-300">
            Need an account?{' '}
            <button
                onClick={() => setShowSignUp(true)}
                className="text-sky-600 hover:underline"
            >
                Register
            </button>
            </p>
        </div>
        <div className="mt-6 text-center">
        <button className="bg-black text-white py-2 px-8 rounded-full w-full mb-4">
            <a href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center">
            <img src="/apple_logo.png" alt="App Store" className="mr-2 w-10 h-10 inline-block" />
            Download on the App Store
            </a>
        </button>
        <button className="bg-black text-white py-2 px-8 rounded-full w-full">
            <a href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center">
            <img src="/playstore.png" alt="Google Play" className="mr-2 w-10 h-10 inline-block" />
            GET IT ON Google Play
            </a>
        </button>
        </div>
        </div>
    </div>
    );
};

export default SignIn;