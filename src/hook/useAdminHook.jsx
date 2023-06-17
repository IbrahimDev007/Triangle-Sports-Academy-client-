import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useAdminHook = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();

	const { data: Admin, isLoading: isAdminLoading } = useQuery({
		queryKey: ["Admin", user?.email],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			const res = await instanceSecure.get(`/users/admin/${user?.email}`);
			console.log(res.data);
			return res.data.admin;
		},
	});

	return [Admin, isAdminLoading];
};
export default useAdminHook;
