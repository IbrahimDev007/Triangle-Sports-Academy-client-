const Login = () => {
	return (
		<div className="flex flex-col sm:flex-row">
			{/* Login Form */}
			<div className="flex-1 bg-gradient-to-br from-purple-500 to-indigo-500 py-10 px-6 sm:px-10 lg:px-16 xl:px-20">
				<h1 className="text-3xl sm:text-4xl text-white mb-4">Login</h1>
				<form className="flex flex-col space-y-4">
					<input type="text" placeholder="Name" className="input" />
					<input type="email" placeholder="Email" className="input" />
					<button className="btn">Login</button>
				</form>
				<div className="mt-6">
					<button className="btn btn-google">
						<span className="flex items-center justify-center">
							<svg
								className="h-5 w-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M2 10c0-2.168.78-3.683 1.93-4.848C4.905 4.517 6.61 4 10 4h.1c3.34 0 5.045.51 6.17 1.16C17.19 6.317 18 7.832 18 10c0 2.168-.78 3.683-1.93 4.848C14.905 15.483 13.2 16 9.8 16h-.1c-3.34 0-5.045-.51-6.17-1.16C2.81 13.683 2 12.168 2 10zm15-1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"
									clipRule="evenodd"
								/>
							</svg>
							Sign in with Google
						</span>
					</button>
				</div>
			</div>

			{/* SVG Animation */}
			<div className="flex-1 hidden sm:block">
				<img
					src="path_to_your_svg_image"
					alt="Login Animation"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Login;
