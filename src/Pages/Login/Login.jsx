import { useForm } from "react-hook-form";
// import { ReactComponent as LoginIllustration } from "./login-illustration.svg";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

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
							htmlFor="email"
						>
							Email
						</label>
						<input
							className={`w-full px-3 py-2 border rounded-md outline-none text-gray-700 ${
								errors.email ? "border-red-500" : ""
							}`}
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
								maxLength: 20,
								pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
							})}
						/>
						{errors.password?.type === "required" && (
							<p className="text-red-600">Password is required</p>
						)}
						{errors.password?.type === "minLength" && (
							<p className="text-red-600">Password must be 6 characters</p>
						)}
						{errors.password?.type === "maxLength" && (
							<p className="text-red-600">
								Password must be less than 20 characters
							</p>
						)}
						{errors.password?.type === "pattern" && (
							<p className="text-red-600">
								Password must have one Uppercase one lower case, one number and
								one special character.
							</p>
						)}
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800"
							href="#"
						>
							Not registered?
							<span className="text-blue-900">Click here to register.</span>
						</a>
					</div>
				</form>
			</div>
			<div className="w-1/2 bg-indigo-100 flex items-center justify-center">
				{/* <LoginIllustration className="w-2/3 h-auto" /> */}
			</div>
		</div>
	);
};

export default LoginForm;
