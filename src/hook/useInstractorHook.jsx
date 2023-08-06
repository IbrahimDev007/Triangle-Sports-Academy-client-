import { useQuery } from "@tanstack/react-query";
import useAuthHook from "./useAuthHook";
import useAxiosInterceptor from "./useAxiosInterceptor";

const useInstructorHook = () => {
	const { user, loading } = useAuthHook();
	const [instanceSecure] = useAxiosInterceptor();
	// console.log(instanceSecure);
	const token = localStorage.getItem("access-verify-token");

	const { data: instructor, isLoading: isinstructorLoading } = useQuery({
		queryKey: ["Instructor", user?.email, token],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			if (!user?.email || !token) {
				return false;
			}
			const res = await instanceSecure.get(`/users/instructor/${user?.email}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(res.data);
			return res.data.instructor;
		},
	});

	return [instructor, isinstructorLoading];
};
export default useInstructorHook;
