import React, { useState } from "react";
import LoginModal from "./LoginModal"; // Import the LoginModal component

const Navbar = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

	// Toggle Login Modal
	const toggleLoginModal = () => {
		setIsLoginModalOpen(!isLoginModalOpen);
	};

	return (
		<nav className="bg-white">
			<div className="px-10 py-4 flex items-center justify-between">
				{/* Logo */}
				<img src="/images/logo.png" alt="Logo" className="h-16" />

				{/* Links */}
				<div className="flex space-x-6">
					<a
						href="/"
						className="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8"
					>
						Home
					</a>
					<a
						href="/service"
						className="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8"
					>
						Services
					</a>
					<a
						href="/contact"
						className="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8"
					>
						Contact
					</a>
				</div>

				{/* Login Button */}
				<button
					onClick={toggleLoginModal}
					className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-white border border-black hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300"
				>
					<span className="relative uppercase px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
						Login
					</span>
				</button>
			</div>

			{/* Pass the modal state and toggle function as props */}
			<LoginModal isOpen={isLoginModalOpen} toggleModal={toggleLoginModal} />
		</nav>
	);
};

export default Navbar;
