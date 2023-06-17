import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useInstructorHook = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();

	const { data: instructor, isLoading: isinstructorLoading } = useQuery({
		queryKey: ["Instructor", user?.email],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			const res = await instanceSecure.get(`/users/instructor/${user?.email}`);
			console.log(res.data);
			return res.data.instructor;
		},
	});

	return [instructor, isinstructorLoading];
};
export default useInstructorHook;
