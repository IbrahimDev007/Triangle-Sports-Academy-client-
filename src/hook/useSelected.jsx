import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useInstructorHook from "./useInstractorHook";
const useSelected = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useInstructorHook();
	const { refetch, data: selected = [] } = useQuery({
		queryKey: ["selected", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await instanceSecure(`/selecteds?email=${user?.email}`);
			console.log("res from axios", res);
			return res.data;
		},
	});

	return [selected, refetch];
};

export default useSelected;
