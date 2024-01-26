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
					{!Admin && !instructor && user && (
						<>
							<NavLink to="/dashboard/selectclasses">
								<li className="btn btn-primary w-full">selected classes</li>
							</NavLink>

							<NavLink to="/dashboard/enroll">
								<li className="btn btn-primary w-full">enroll classes</li>
							</NavLink>

							<NavLink to="/dashboard/allpayment">
								<li className="btn btn-primary w-full">Payment History</li>
							</NavLink>
						</>
					)}

					{Admin && (
						<>
							<NavLink to="/dashboard/manageClass">
								<li className="btn btn-primary w-full">Manage Class</li>
							</NavLink>

							<NavLink to="/dashboard/manageUser">
								<li className="btn btn-primary w-full">Manage User</li>
							</NavLink>
						</>
					)}
					{instructor && (
						<>
							<NavLink to="/dashboard/myclasses">
								<li className="btn btn-primary w-full">My Classes</li>
							</NavLink>

							<NavLink to="/dashboard/addclasses">
								<li className="btn btn-primary w-full">Add Classes</li>
							</NavLink>
						</>
					)}

					<div className="divider"></div>

					<NavLink to="/">
						<li className="btn btn-primary w-full">Home</li>
					</NavLink>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
