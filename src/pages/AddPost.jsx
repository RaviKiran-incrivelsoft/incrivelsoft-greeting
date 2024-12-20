import React, { useState, useEffect, useRef } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";

const AddPost = () => {
	const [content, setContent] = useState([]);
	const titleRef = useRef(null);

	// Add a new block
	const addBlock = (type) => {
		setContent((prevContent) => [
			...prevContent,
			{ type, value: type === "image" ? null : "" },
		]);
	};

	// Handle text change
	const handleTextChange = (index, value) => {
		setContent((prevContent) =>
			prevContent.map((block, i) =>
				i === index ? { ...block, value } : block
			)
		);
	};

	// Handle image upload
	const handleImageUpload = (index, file) => {
		const reader = new FileReader();
		reader.onload = () => {
			setContent((prevContent) =>
				prevContent.map((block, i) =>
					i === index ? { ...block, value: reader.result } : block
				)
			);
		};
		reader.readAsDataURL(file);
	};

	// Handle block removal
	const removeBlock = (index) => {
		setContent((prevContent) => prevContent.filter((_, i) => i !== index));
	};

	// Handle submission
	const handleSubmit = () => {
		console.log("Post content:", content);
	};

	// Initialize with default blocks
	useEffect(() => {
		setContent([
			{ type: "title", value: "" },
			{ type: "image", value: null },
		]);
	}, []);

	useEffect(() => {
		if (titleRef.current) {
			titleRef.current.focus();
		}
	}, [content]);

	return (
		<div className="mx-48 px-16 py-6 bg-[#f5f5f5]">
			{/* Render content blocks */}
			{content.map((block, index) => (
				<div
					key={index}
					className="relative group mb-4 flex items-center justify-center"
				>
					{block.type === "title" && (
						<>
							<input
								ref={titleRef}
								type="text"
								placeholder="Add Title"
								value={block.value}
								onChange={(e) => handleTextChange(index, e.target.value)}
								className="w-full px-2 py-1 text-2xl font-semibold outline-none placeholder-gray-400 bg-[#f5f5f5]"
							/>
							<div className="absolute top-0 right-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
								<button
									onClick={() => removeBlock(index)}
									className="p-2 text-red-600 bg-white rounded-full shadow hover:bg-gray-100"
								>
									<FaTrash />
								</button>
							</div>
						</>
					)}
					{block.type === "paragraph" && (
						<>
							<textarea
								placeholder="Enter paragraph"
								value={block.value}
								onChange={(e) => handleTextChange(index, e.target.value)}
								className="w-full px-2 py-1 text-gray-700 outline-none placeholder-gray-400 bg-[#f5f5f5] resize-none overflow-hidden"
								rows={1}
								style={{
									height: "auto",
									minHeight: "20px",
								}}
								onInput={(e) => {
									e.target.style.height = "auto";
									e.target.style.height = `${e.target.scrollHeight}px`;
								}}
							></textarea>
							<div className="absolute top-0 right-0 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
								<button
									onClick={() => removeBlock(index)}
									className="p-2 text-red-600 bg-white rounded-full shadow hover:bg-gray-100"
								>
									<FaTrash />
								</button>
							</div>
						</>
					)}
					{block.type === "image" && (
						<div className="relative group w-full">
							{block.value ? (
								<div className="relative flex justify-center">
									<img
										src={block.value}
										alt="Uploaded"
										className="w-auto h-72 rounded shadow"
									/>
									<div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
										<label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
											<input
												type="file"
												accept="image/*"
												onChange={(e) =>
													handleImageUpload(index, e.target.files[0])
												}
												className="hidden"
											/>
											<FaUpload />
										</label>
										<button
											onClick={() => removeBlock(index)}
											className="px-4 py-2 bg-red-500 text-white rounded"
										>
											<FaTrash />
										</button>
									</div>
								</div>
							) : (
								<label className="flex items-center justify-center w-full h-40 bg-gray-100 border-dashed border-2 border-gray-400 rounded cursor-pointer text-center">
									<input
										type="file"
										accept="image/*"
										onChange={(e) =>
											handleImageUpload(index, e.target.files[0])
										}
										className="hidden"
									/>
									<div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
										<button
											onClick={() => removeBlock(index)}
											className="px-4 py-2 bg-red-500 text-white rounded"
										>
											<FaTrash />
										</button>
									</div>
									<div className="flex flex-col items-center space-x-2 text-gray-500">
										<FaUpload className="text-4xl mb-5" />
										<span>Click or drag to upload an image</span>
									</div>
								</label>
							)}
						</div>
					)}
				</div>
			))}

			{/* Add new block button */}
			<div className="relative mb-6 flex items-center justify-start">
				<div className="flex items-center justify-center w-12 h-12 text-3xl bg-gray-400 text-white rounded-full shadow-lg hover:bg-gray-600 relative group cursor-pointer">
					+
					<div className="absolute text-lg left-full top-0 flex items-center space-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
						<button
							onClick={() => addBlock("title")}
							className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-700"
						>
							Title
						</button>
						<button
							onClick={() => addBlock("paragraph")}
							className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-700"
						>
							Paragraph
						</button>
						<button
							onClick={() => addBlock("image")}
							className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-700"
						>
							Image
						</button>
					</div>
				</div>
			</div>

			{/* Submit Button */}
			<div className="flex justify-center">
				<button
					onClick={handleSubmit}
					className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
				>
					Submit Post
				</button>
			</div>
		</div>
	);
};

export default AddPost;
