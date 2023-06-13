import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useInstractorHook = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor;

	const { data: Instractor, isLoading: isInstractorLoading } = useQuery({
		queryKey: ["isInstractor", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await instanceSecure.get(`/users/instractor/${user?.email}`);
			return res.data.Instractor;
		},
	});
	return [Instractor, isInstractorLoading];
};
export default useInstractorHook;
