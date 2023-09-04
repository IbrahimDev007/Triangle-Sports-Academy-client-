import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef();

	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		message: "",
	});

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_5yzt648",
				"template_yjw0559",
				form.current,
				"XV9TH-CmN0hpYQJd-"
			)
			.then(
				(result) => {
					console.log(result.text);
					// Clear the form fields after successful submission
					setFormData({
						user_name: "",
						user_email: "",
						message: "",
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div>
			<h1 className="text-5xl font-bold">Contact Us_</h1>
			<form
				className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
				ref={form}
				onSubmit={sendEmail}
			>
				<div className="mb-4">
					<label
						htmlFor="user_name"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Name
					</label>
					<input
						type="text"
						name="user_name"
						id="user_name"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
						value={formData.user_name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="user_email"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Email
					</label>
					<input
						type="email"
						name="user_email"
						id="user_email"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
						value={formData.user_email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="message"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Message
					</label>
					<textarea
						name="message"
						id="message"
						rows="4"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
						value={formData.message}
						onChange={handleInputChange}
					></textarea>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};
