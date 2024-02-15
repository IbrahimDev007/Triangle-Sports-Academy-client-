import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";
// import useInstructorHook from "./useInstractorHook";
const useSelected = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();
	// const token = localStorage.getItem("access-verify-token");
	const { refetch: reload, data: selected = [] } = useQuery({
		// token
		queryKey: ["selected", user?.email, ],
		// enabled:
		// 	!loading &&
		// 	!!user?.email &&
		// 	!!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			// || !token
			if (!user?.email ) {
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
