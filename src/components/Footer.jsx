import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";


export default function Footer(){
    return (
        <footer className="bg-white-900 py-6 border-t-2 border-[#7F56D9]/70 rounded-2xl mt-16">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                
                {/* Left Side - Branding & Copyright */}
                <div className="text-center md:text-left">  
                {/* <h2 className="text-lg font-bold">RESUMIFY</h2> */}
                <div className="-ml-5"> 
                    <p className="font-medium text-2xl">IdeaHub!</p>
                </div>
                <p className="text-gray-500 font-medium text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Center - Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 md:mt-0">
                    <Link to="/" className="text-gray-500 font-medium hover:text-[#7F56D9] text-sm">Home</Link>
                    <Link to="/explore" className="text-gray-500 font-medium hover:text-[#7F56D9] text-sm">Explore</Link>
                    <Link to="/propose" className="text-gray-500 font-medium hover:text-[#7F56D9] text-sm">Propose</Link>
                    <Link to="/myIdeas" className="text-gray-500 font-medium hover:text-[#7F56D9] text-sm">My Ideas</Link>
                </div>

                {/* Right Side - Social Media Icons */}
                <div className="flex gap-4 mt-4 md:mt-0">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#7F56D9]">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#7F56D9]">
                    <FaTwitter size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#7F56D9]">
                    <FaGithub size={20} />
                </a>
                </div>
            </div>
        </footer>
    );
}

