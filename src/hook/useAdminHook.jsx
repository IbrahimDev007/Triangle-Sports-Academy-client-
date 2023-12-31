import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useAdminHook = () => {
	const { user, loading } = useAuthHook();
	// console.log(user?.email, "admin email: ");
	const [instanceSecure] = useAxiosInterceptor();
	const token = localStorage.getItem("access-verify-token");
	const { data: Admin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["Admin", user?.email, token],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			if (!user?.email || !token) {
				return false;
			}
			const res = await instanceSecure.get(`/users/admin/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(res.data, "admin");
			return res.data.admin;
		},
	});

	return [Admin, isAdminLoading];
};
export default useAdminHook;
