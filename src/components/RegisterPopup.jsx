import React, { useState } from "react";

const RegisterPopup = ({ openLoginModal, closeRegModal }) => {
	// Single state to hold all form data
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [isEmailSignup, setIsEmailSignup] = useState(false);

	// Handle form input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		const { firstName, lastName, email, password, confirmPassword } = formData;

		try {
			const response = await fetch("http://localhost:3001/api/user_register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
			});

			const data = await response.json();
			if (response.ok) {
				const fullName = `${firstName} ${lastName}`;
				localStorage.setItem("userName", fullName);
				openLoginModal(); // Open login modal
			} else {
				console.error(data.error || "Registration failed");
			}
		} catch (error) {
			console.error("Failed to register:", error);
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
			<div className="flex relative items-center justify-center w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg">
				<button
					onClick={closeRegModal}
					className="absolute top-3 right-3 bg-gray-300 hover:bg-gray-400 hover:cursor-pointer text-white rounded-md w-6 h-6 flex items-center justify-center"
					aria-label="Close"
				>
					<span className="text-lg font-bold">&times;</span>
				</button>
				<div className="flex w-1/2">
					<img src="/images/loginbg.png" alt="Promotion" className="w-full object-cover" />
				</div>
				<div className="w-1/2 p-6">
					<div className="space-y-8 text-black">
						{!isEmailSignup ? (
							<>
								<h2 className="text-3xl font-bold text-center">Sign up</h2>
								<ul className="text-center">
									<li>Free forever</li>
									<li>Professional results in minutes</li>
									<li>Loved by 20+ million users</li>
								</ul>
								<div className="space-y-4">
									<button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700">
										Continue with Google
									</button>
									<button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
										Continue with Facebook
									</button>
									<div className="relative flex justify-center">
										<span className="text-sm text-gray-500">or</span>
									</div>
									<button
										onClick={() => setIsEmailSignup(true)}
										className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
									>
										Sign up with email
									</button>
									<p className="text-center text-sm text-gray-500">
										By continuing, you agree to our <span className="text-blue-600 hover:cursor-pointer">Terms of Service</span> and <span href="#" className="text-blue-600 hover:cursor-pointer">Privacy Policy</span>.
									</p>
								</div>
								<p className="text-center text-gray-600">
									Already have an account? <button className="text-blue-600" onClick={openLoginModal}>Log In</button>
								</p>
							</>
						) : (
							<>
								<h2 className="text-3xl font-bold text-center">Register</h2>
								<form className="space-y-6" onSubmit={handleSubmit}>
									<div className="space-y-4">
										<input
											id="first-name"
											name="firstName"
											type="text"
											required
											value={formData.firstName}
											onChange={handleChange}
											className="block w-full px-4 py-2 border border-gray-300 rounded-md"
											placeholder="First Name"
										/>
										<input
											id="last-name"
											name="lastName"
											type="text"
											required
											value={formData.lastName}
											onChange={handleChange}
											className="block w-full px-4 py-2 border border-gray-300 rounded-md"
											placeholder="Last Name"
										/>
										<input
											id="email-address"
											name="email"
											type="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="block w-full px-4 py-2 border border-gray-300 rounded-md"
											placeholder="Email address"
										/>
										<input
											id="password"
											name="password"
											type="password"
											required
											value={formData.password}
											onChange={handleChange}
											className="block w-full px-4 py-2 border border-gray-300 rounded-md"
											placeholder="Password"
										/>
										<input
											id="confirm-password"
											name="confirmPassword"
											type="password"
											required
											value={formData.confirmPassword}
											onChange={handleChange}
											className="block w-full px-4 py-2 border border-gray-300 rounded-md"
											placeholder="Confirm Password"
										/>
									</div>
									<button
										type="submit"
										className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
									>
										Register
									</button>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPopup;
