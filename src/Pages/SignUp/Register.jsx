import axios, { Axios } from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "react-spring";
import useAuthHook from "../../hook/useAuthHook";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const navigate = useNavigate();
	const { updateUserProfile, createUser } = useAuthHook();
	const onSubmit = (data) => {
		createUser(data.email, data.password).then((result) => {
			const regUser = result.user;
			console.log(regUser);

			updateUserProfile(data.name, data.photoURL)
				.then(() => {
					axios
						.post("http://localhost:3000/users", {
							name: data.name,
							email: data.email,
							role: "student",
						})
						.then((data) => {
							console.log(data);
							if (data.data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "User created successfully.",
									showConfirmButton: false,
									timer: 1500,
								});
								navigate("/");
							}
						});
				})
				.catch((error) => console.log(error));
		});
	};

	const illustrationAnimation = useSpring({
		from: { opacity: 0, transform: "translateX(-100px)" },
		to: { opacity: 1, transform: "translateX(0)" },
		config: { duration: 1000 },
	});

	return (
		<div className="flex h-screen">
			<div className="w-1/2 bg-gradient-to-br from-purple-500 to-indigo-500 p-8 flex items-center justify-center">
				<form
					className="w-3/4 bg-white shadow-md rounded px-8 pt-6 pb-8"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<input
							className="w-full px-3 py-2 border rounded-md outline-none text-gray-700"
							type="text"
							placeholder="Enter your name"
							{...register("name", { required: true })}
						/>
						{errors.name && (
							<p className="text-red-500 text-xs italic">Name is required</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="photo"
						>
							Photo Url
						</label>
						<input
							className="w-full px-3 py-2 border rounded-md outline-none text-gray-700"
							type="text"
							placeholder="Enter your photoURL"
							{...register("photoURL", { required: true })}
						/>
						{errors.photoURL && (
							<p className="text-red-500 text-xs italic">
								photoURL is required
							</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="w-full px-3 py-2 border rounded-md outline-none text-gray-700"
							type="email"
							placeholder="Enter your email"
							{...register("email", { required: true })}
						/>
						{errors.email && (
							<p className="text-red-500 text-xs italic">Email is required</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className={`w-full px-3 py-2 border rounded-md outline-none text-gray-700 ${
								errors.password ? "border-red-500" : ""
							}`}
							type="password"
							placeholder="Enter your password"
							{...register("password", {
								required: true,
								minLength: 6,
								pattern: /^(?=.*[a-z])(?=.*[A-Z])/,
							})}
						/>
						{errors.password && (
							<p className="text-red-500 text-xs italic">
								Password is required and must contain at least 6 characters with
								at least 1 uppercase and 1 lowercase letter
							</p>
						)}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Register
						</button>
					</div>
				</form>
			</div>
			<div className="w-1/2 bg-indigo-100 flex items-center justify-center">
				<animated.div style={illustrationAnimation}>
					<img
						src="https://lottiefiles.com/107800-login-leady"
						className="w-2/3 h-auto"
					/>
				</animated.div>
			</div>
		</div>
	);
};

export default Register;
