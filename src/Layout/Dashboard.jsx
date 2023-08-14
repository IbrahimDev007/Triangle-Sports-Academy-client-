import { NavLink, Outlet } from "react-router-dom";
import useAdminHook from "../hook/useAdminHook";
import useAuthHook from "../hook/useAuthHook";
import useInstructorHook from "../hook/useInstractorHook";

const Dashboard = () => {
	// const Admin = true;
	const { user } = useAuthHook();
	const [Admin] = useAdminHook();
	const [instructor] = useInstructorHook();

	return (
		<div className="drawer lg:drawer-open">
			<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col items-center justify-center">
				<Outlet></Outlet>
				<label
					htmlFor="my-drawer-2"
					className="btn btn-primary drawer-button lg:hidden"
				>
					Open drawer
				</label>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}

					{Admin && (
						<>
							<li>
								<NavLink to="/dashboard/manageClass">Manage Class</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/manageUser">Manage User</NavLink>
							</li>
						</>
					)}
					{instructor && (
						<>
							<li>
								<NavLink to="/dashboard/addclasses">Add classes</NavLink>
							</li>

							<li>
								<NavLink to="/dashboard/myclasses">My Classes</NavLink>
							</li>
							<li></li>
						</>
					)}

					{!Admin && !instructor && user && (
						<>
							<li>
								<NavLink to="/dashboard/selectclasses">
									selected classes
								</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/enroll">enroll classes</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard/allpayment">Payment History</NavLink>
							</li>
							<li></li>
						</>
					)}

					<div className="divider"></div>
					<li>
						<NavLink to="/">Home</NavLink>{" "}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
