import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";
// import useInstructorHook from "./useInstractorHook";
const useSelected = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();
	const token = localStorage.getItem("access-verify-token");
	const { refetch: reload, data: selected = [] } = useQuery({
		queryKey: ["selected", user?.email, token],
		enabled:
			!loading &&
			!!user?.email &&
			!!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			if (!user?.email || !token) {
				return false;
			}
			const res = await instanceSecure(`/selecteds?email=${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(res.data);
			return res.data;
		},
	});

	return [selected, reload];
};

export default useSelected;
