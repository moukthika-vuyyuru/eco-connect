import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1D3016] p-4 text-[#ffffff]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} EcoConnect. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}