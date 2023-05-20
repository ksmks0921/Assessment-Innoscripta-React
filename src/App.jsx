import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const App = (props) => {
  return (
    <div className="bg-slate-100">
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">
                News Aggregator
                </Link>
                <div>
                <Link
                    to="/register"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
                >
                    Register
                </Link>
                <Link
                    to="/login"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 ml-2"
                >
                    Login
                </Link>
                </div>
            </div>
        </nav>
        <div className='max-w-7xl mx-auto mt-6'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            
        </div>
    </div>
  )
};
export default App;