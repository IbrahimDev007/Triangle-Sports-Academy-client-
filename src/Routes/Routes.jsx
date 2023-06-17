import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddClasses from "../Pages/AddClasses/AddClasses";
import Classes from "../Pages/Classes/Classes";
import EnrollClasses from "../Pages/EnrollClases/EnrollClasses";
import Error from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Instractor from "../Pages/Instractor/Instractor";
import LoginForm from "../Pages/Login/Login";
import ManageUser from "../Pages/ManageUser/ManageUser";
import ManageClasses from "../Pages/MangeClasses/ManageClasses";
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
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "classes",
				element: <Classes />,
			},
			{
				path: "instructor",
				element: <Instractor />,
			},
			{
				path: "login",
				element: <LoginForm />,
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
						<ManageClasses />
					</AdminRoute>
				),
			},
		],
	},
]);

export default router;
