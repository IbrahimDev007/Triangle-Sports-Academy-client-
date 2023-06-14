import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddClasses from "../Pages/AddClasses/AddClasses";
import EnrollClasses from "../Pages/EnrollClases/EnrollClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import ManageUser from "../Pages/ManageUser/ManageUser";
import Myclasses from "../Pages/Myclasses/Myclasses";
import AllPayment from "../Pages/PaymentHistory/AllPayment";
import SelectClasses from "../Pages/SelectClasses/SelectClasses";
import Register from "../Pages/SignUp/Register";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "classes",
				element: <classes />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <Register />,
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: "selectclasses",
				element: <SelectClasses />,
			},
			{
				path: "enroll",
				element: <EnrollClasses />,
			},
			{
				path: "allpayment",
				element: <AllPayment />,
			},
			// instructor route
			{
				path: "myclasses",
				element: (
					<InstructorRoute>
						<Myclasses></Myclasses>
					</InstructorRoute>
				),
			},
			{
				path: "addclasses",
				element: (
					<InstructorRoute>
						<AddClasses></AddClasses>
					</InstructorRoute>
				),
			},

			//admin route
			{
				path: "manageUser",
				element: (
					<AdminRoute>
						<ManageUser></ManageUser>
					</AdminRoute>
				),
			},
			{
				path: "manageClass",
				element: (
					<AdminRoute>
						<Myclasses></Myclasses>
					</AdminRoute>
				),
			},
		],
	},
]);

export default router;
