import { Navigate, useLocation } from "react-router";
import useAdminHook from "../hook/useAdminHook";

import useAuthHook from "../hook/useAuthHook";

const AdminRoute = ({ children }) => {
	const { user, loading } = useAuthHook();
	const [Admin, isAdminLoading] = useAdminHook();
	const location = useLocation();

	if (loading || isAdminLoading) {
		return <progress className="progress w-56"></progress>;
	}

	if (user && Admin) {
		return children;
	}
	return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
