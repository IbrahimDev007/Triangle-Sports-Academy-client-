import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useInstructorHook = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();

	const { data: Instructor, isLoading: isinstructorLoading } = useQuery({
		queryKey: ["Instructor", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await instanceSecure.get(`/users/instructor/${user?.email}`);
			return res.data.instructor;
		},
	});
	return [Instructor, isinstructorLoading];
};
export default useInstructorHook;
