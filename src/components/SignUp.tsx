import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail,validatePassword } from '../utils/authValidation';
import { loadUsers,saveCurrentUser,saveUsers } from '../utils/storage';


interface SignUpProps {
    setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setShowSignUp, setLoggedIn }) => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
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
    const { username, email, password } = formData;

    
    if (!username || !email || !password) {
    setError('All fields are required.');
    return;
    }

    if (!validateEmail(email)) {
    setError('Please enter a valid email address.');
    return;
    }

    if (!validatePassword(password)) {
    setError('Password must contain at least 10 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
    return;
    }

    const users = loadUsers();

    if (users.some(user => user.email === email)) {
    setError('Email already exists.');
    return;
    }

    if (users.some(user => user.username === username)) {
    setError('Username already exists.');
    return;
    }


    const updatedUsers = [...users, { username, email, password }];
    saveUsers(updatedUsers);
    saveCurrentUser(username);
    
    setSuccessMessage('Registration successful!');
    setLoggedIn(true);
    navigate('/channels');
};

return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0b0714] via-[#1a125c] to-[#2c39a7] text-white items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full mt-10 bg-gray-800 p-8 rounded-lg shadow-lg sm:mt-16 lg:mt-20">
        <h6 className="text-4xl font-bold text-center text-gray-50 mb-6">Create an account</h6>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
            <label className="font-bold text-gray-200">EMAIL</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded-md text-white focus:ring-2 focus:ring-indigo-600"
            />
        </div>
        <div className="relative space-y-3">
            <label className="font-bold text-gray-200">PASSWORD</label>
            <input
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded-md text-white focus:ring-2 focus:ring-indigo-600"
            />
            <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 bottom-3 text-gray-200"
            >
            {passwordVisible ? 'Hide' : 'Show'}
            </button>
        </div>
        <div className="space-y-3">
            <label className="font-bold text-gray-200">USERNAME</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 rounded-md text-white focus:ring-2 focus:ring-indigo-600"
            />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
        <button
            type="submit"
            className="w-full p-3 bg-indigo-700 text-white rounded-md hover:bg-indigo-800 transition duration-300"
        >
            Continue
        </button>
        </form>
        <div className="mt-4 text-left">
        <p>
            <button
            onClick={() => setShowSignUp(false)}
            className="text-sky-600 hover:underline text-sm"
            >
            Already have an account?
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

export default SignUp;