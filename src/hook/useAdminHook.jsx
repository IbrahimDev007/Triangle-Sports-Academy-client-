import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useAdmin = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor;

	const { data: Admin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["isAdmin", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await instanceSecure.get(`/users/admin/${user?.email}`);
			return res.data.admin;
		},
	});
	return [Admin, isAdminLoading];
};
export default useAdmin;
