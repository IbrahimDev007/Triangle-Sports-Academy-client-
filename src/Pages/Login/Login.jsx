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
				role: "student",
				image: loggedInUser?.photoUrl,
			};
			fetch("https://triangle-sports.onrender.com/users", {
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
		<div>
			<div>
				<div className="hero min-h-screen bg-base-200">
					<div className="hero-content flex-col lg:flex-row-reverse">
						<div className="text-center lg:text-left">
							<div className="grid grid-cols-2">
								<div className="flex items-center flex-col justify-center">
									<h1 className="text-5xl font-bold my-1 ">Login now!</h1>

									<p className="py-6">
										Step into excellence with our Sports Academy's immersive
										training programs. Unlock your potential through expert
										coaching, cutting-edge facilities, and a supportive
										community. Access your personalized journey by logging in to
										our portal, where champions train and dreams thrive. Join us
										in shaping your athletic success."
									</p>
								</div>

								<img
									src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg"
									alt="login"
									className="object-cover"
								/>
							</div>
						</div>
						<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
							<form className="card-body" onSubmit={handleSubmit(onSubmit)}>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<p className="text-red-500 text-xs italic">admin@mail.com</p>
									<input
										type="text"
										placeholder="email"
										className="input input-bordered"
										{...register("email", { required: true })}
									/>
									{errors.email && (
										<p className="text-red-500 text-xs italic">
											Email is required
										</p>
									)}
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<p className="text-red-500 text-xs italic">Admin@5514</p>
									<input
										type="text"
										placeholder="password"
										className="input input-bordered"
										{...register("password", {
											required: true,
											minLength: 6,
											maxLength: 20,
											pattern:
												/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
										})}
									/>
									{errors.password?.type === "required" && (
										<p className="text-red-600">Password is required</p>
									)}
									{errors.password?.type === "minLength" && (
										<p className="text-red-600">
											Password must be 6 characters
										</p>
									)}
									{errors.password?.type === "maxLength" && (
										<p className="text-red-600">
											Password must be less than 20 characters
										</p>
									)}
									{errors.password?.type === "pattern" && (
										<p className="text-red-600">
											Password must have one Uppercase one lower case, one
											number and one special character.
										</p>
									)}
								</div>
								<div className="form-control mt-6 mx-auto">
									<button className="btn btn-primary">Login</button>
								</div>
							</form>
							<div className="flex justify-between items-center ml-2">
								<Link
									to="/signup"
									className=" font-bold text-sm text-indigo-600 hover:text-indigo-800"
									href="#"
								>
									Not registered?
									<span className="text-blue-900">Click here to register.</span>
								</Link>
								<div className="mx-auto my-4 px-2">
									<button className="btn  btn-warning" onClick={handle_google}>
										Google
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
