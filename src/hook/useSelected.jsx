import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";
// import useInstructorHook from "./useInstractorHook";
const useSelected = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();
	const { refetch, data: selected = [] } = useQuery({
		queryKey: ["selected", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await instanceSecure(`/selecteds?email=${user?.email}`);
			console.log(res.data);
			return res.data;
		},
	});

	return [selected, refetch];
};

export default useSelected;
