import { Navigate, useLocation } from "react-router";

import useAuthHook from "../hook/useAuthHook";
import useInstructorHook from "../hook/useInstractorHook";

const InstructorRoute = ({ children }) => {
	const { user, loading } = useAuthHook();
	const [Instructor, isinstructorLoading] = useInstructorHook();
	const location = useLocation();

	if (loading || isinstructorLoading) {
		return <progress className="progress w-56"></progress>;
	}

	if (user && Instructor) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
