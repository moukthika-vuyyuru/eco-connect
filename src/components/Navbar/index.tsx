import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="bg-[#1D3016] p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-[#ffffff] text-xl font-bold">
                    EcoConnect
                </div>
                <div className="flex gap-4">
                    <Link to="/" className="text-[#ffffff] hover:text-gray-300">Home</Link>
                    <Link to="/feed" className="text-[#ffffff] hover:text-gray-300">Feed</Link>
                    <Link to="/about" className="text-[#ffffff] hover:text-gray-300">About</Link>
                    <Link to="/contact" className="text-[#ffffff] hover:text-gray-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
}