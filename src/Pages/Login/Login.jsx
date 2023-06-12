import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuthHook from "../../hook/useAuthHook";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn, googleSignIn } = useAuthHook();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/";
	const handle_google = () => {
		googleSignIn().then((result) => {
			const loggedInUser = result.user;
			console.log(loggedInUser);
			const saveUser = {
				name: loggedInUser.displayName,
				email: loggedInUser.email,
				role: "admin",
			};
			fetch("http://localhost:3000/users", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(saveUser),
			})
				.then((res) => res.json())
				.then(() => {
					navigate(from, { replace: true });
				});
		});
	};

	const onSubmit = (data) => {
		signIn(data.email, data.password).then((result) => {
			const user = result.user;
			console.log(user);
			Swal.fire({
				title: "User Login Successful.",
				showClass: {
					popup: "animate__animated animate__fadeInDown",
				},
				hideClass: {
					popup: "animate__animated animate__fadeOutUp",
				},
			});
			navigate(from, { replace: true });
		});
	};

	return (
		<>
			<Helmet>
				<title>Triangle Acadamie | Login</title>
			</Helmet>
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
									Password must have one Uppercase one lower case, one number
									and one special character.
								</p>
							)}
						</div>
						<div className="flex items-center justify-between w-full gap-6">
							<button
								className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Sign In
							</button>
							<Link
								to="/signup"
								className="inline-block align-baseline font-bold text-sm text-indigo-600 hover:text-indigo-800"
								href="#"
							>
								Not registered?
								<span className="text-blue-900">Click here to register.</span>
							</Link>
						</div>
						<div className="mx-auto">
							<button
								className="btn btn-ghost btn-circle"
								onClick={handle_google}
							>
								Google
							</button>
						</div>
					</form>
				</div>
				<div className="w-1/2 bg-indigo-100 flex items-center justify-center">
					{/* //TODO: svg animation */}
					{/* <LoginIllustration className="w-2/3 h-auto" /> */}
				</div>
			</div>
		</>
	);
};

export default LoginForm;
