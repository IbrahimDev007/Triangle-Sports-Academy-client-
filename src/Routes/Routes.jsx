import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
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
				path: "/classes",
				element: <classes />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
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
				path: "/selectclasses",
				element: <SelectClasses />,
			},
			{
				path: "/enroll",
				element: <Enroll />,
			},
			{
				path: "/allpayment",
				element: <AllPayment />,
			},
			// instructor route
			{
				path: "/myclasses",
				element: <InstructorRoute></InstructorRoute>,
			},
			{
				path: "/addclasses",
				element: <InstructorRoute></InstructorRoute>,
			},

			//admin route
			{
				path: "/manageUser",
				element: <AdminRoute></AdminRoute>,
			},
			{
				path: "/manageClass",
				element: <AdminRoute></AdminRoute>,
			},
		],
	},
]);

export default router;
