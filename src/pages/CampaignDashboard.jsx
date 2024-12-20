import React, { useState } from "react";
import { FaPlay, FaEdit, FaCalendarAlt, FaTrash, FaPlus } from "react-icons/fa";
import AddCampaign from "../components/AddCampaign";

const CampaignDashboard = () => {
	// Dummy data for the table
	const campaigns = [
		{
			id: 1,
			media: "./sample.mp4",
			status: "Pending",
			createdAt: "2024-12-01",
		},
		{
			id: 2,
			media: "./sample.mp4",
			status: "Pending",
			createdAt: "2024-12-05",
		},
		{
			id: 3,
			media: "./sample.mp4",
			status: "Pending",
			createdAt: "2024-12-10",
		},
	];

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleOpenPopup = () => setIsPopupOpen(true);
	const handleClosePopup = () => setIsPopupOpen(false);

	return (
		<div className="py-10 px-32 bg-gray-100 min-h-screen">
			{/* Title */}
			<div className="mb-8 text-center">
				<h2 className="text-3xl font-bold text-gray-800">Campaign Dashboard</h2>
				<p className="text-gray-600 pt-6">Manage Your Campaigns</p>
			</div>

			{/* Add Campaign Button */}
			<div className="mb-4 flex justify-between items-center">
				<button
					onClick={handleOpenPopup}
					className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
				>
					<FaPlus className="mr-2" />
					Add Campaign
				</button>
			</div>

			<AddCampaign isOpen={isPopupOpen} onClose={handleClosePopup} />
			{/* Table */}
			<div className="overflow-x-auto">
				<table className="w-full bg-white shadow-lg rounded-lg">
					<thead>
						<tr className="bg-gray-200 text-gray-600 uppercase text-sm">
							<th className="py-4 px-6 text-left">Media</th>
							<th className="py-4 px-6 text-left">Status</th>
							<th className="py-4 px-6 text-left">Created At</th>
							<th className="py-4 px-6 text-center">Actions</th>
						</tr>
					</thead>
					<tbody className="text-gray-700 text-sm">
						{campaigns.map((campaign) => (
							<tr
								key={campaign.id}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								{/* Media */}
								<td className="py-4 px-6">
									<div className="flex items-center">
										<video
											src={campaign.media}
											controls
											className="h-20 w-36 rounded-lg shadow-md"
										/>
									</div>
								</td>

								{/* Status */}
								<td className="py-4 px-6">
									<span className="inline-block bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full text-xs">
										{campaign.status}
									</span>
								</td>

								{/* Created At */}
								<td className="py-4 px-6">{campaign.createdAt}</td>

								{/* Actions */}
								<td className="py-4 px-6 text-center">
									<div className="flex justify-center space-x-4">
										<button
											className="text-green-600 hover:text-green-800"
											title="Play"
										>
											<FaPlay />
										</button>
										<button
											className="text-blue-600 hover:text-blue-800"
											title="Edit"
										>
											<FaEdit />
										</button>
										<button
											className="text-yellow-600 hover:text-yellow-800"
											title="Schedule"
										>
											<FaCalendarAlt />
										</button>
										<button
											className="text-red-600 hover:text-red-800"
											title="Delete"
										>
											<FaTrash />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CampaignDashboard;
