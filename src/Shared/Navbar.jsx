import React from "react";
import { Link } from "react-router-dom";
import useAdminHook from "../hook/useAdminHook";
import useAuthHook from "../hook/useAuthHook";
import useInstructorHook from "../hook/useInstractorHook";

const Navbar = () => {
	const { user, logOut } = useAuthHook();
	const [Admin] = useAdminHook();
	const [Instructor] = useInstructorHook();
	console.log(user, Admin, Instructor);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};
	const nav = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/instructor">Instractos</Link>
			</li>
			<li>
				<Link to="/classes">classes</Link>
			</li>
			<li>
				<Link to="/signup">Register</Link>
			</li>
			{user || Admin || Instructor ? (
				<>
					<li>
						<button onClick={handleLogOut} className="btn btn-ghost">
							LogOut
						</button>
					</li>

					<li>
						{user && <Link to="/user/dashboard">User Dashboard</Link>}
						{Admin && <Link to="/admin/dashboard">Admin Dashboard</Link>}
						{Instructor && (
							<Link to="/instructor/dashboard">Instructor Dashboard</Link>
						)}
					</li>
				</>
			) : (
				<>
					<li>
						<Link to="/login">login</Link>
					</li>
				</>
			)}
		</>
	);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{nav}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{nav}</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Button</a>
			</div>
		</div>
	);
};

export default Navbar;
