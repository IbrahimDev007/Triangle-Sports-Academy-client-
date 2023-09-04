import { Link } from "react-router-dom";
import useAdminHook from "../hook/useAdminHook";
import useAuthHook from "../hook/useAuthHook";
import useInstructorHook from "../hook/useInstractorHook";

const Navbar = () => {
	const { user, logOut } = useAuthHook();
	const [Admin] = useAdminHook();
	const [instructor] = useInstructorHook();

	console.log("navbar user: ", user, user?.photoURL);
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
				<Link to="/instructor">Instractor</Link>
			</li>
			<li>
				<Link to="/classes">classes</Link>
			</li>
			<li>
				<Link to="/signup">Register</Link>
			</li>
			{user || Admin || instructor ? (
				<>
					<li>
						<button onClick={handleLogOut} className="btn btn-ghost">
							LogOut
						</button>
					</li>

					<li>
						{!Admin && !instructor && user && (
							<Link to="/dashboard/selectclasses">User Dashboard</Link>
						)}
						{Admin && <Link to="/dashboard/manageClass">Admin Dashboard</Link>}
						{instructor && (
							<Link to="/dashboard/Addclasses">Instructor Dashboard</Link>
						)}
					</li>

					<li></li>
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
				<a className="btn btn-ghost normal-case text-xl text-accent-focus">
					Triangle Sports
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{nav}</ul>
			</div>

			<div className="navbar-end">
				{user && (
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src={user?.photoURL} />
						</div>
					</label>
				)}
			</div>
		</div>
	);
};

export default Navbar;
