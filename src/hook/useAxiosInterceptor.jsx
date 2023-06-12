import { useEffect } from "react";
import axios from "axios";

const useAxiosInterceptor = () => {
	const instanceSecure = axios.create({
		baseURL: "https://api.example.com",
	});
	const { logOut } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		// Create an instance of Axios with the desired configuration

		// Add a request interceptor
		instance.interceptors.request.use((config) => {
			// Retrieve the JWT token from local storage
			const token = localStorage.getItem("jwtToken");

			// Set the token in the request headers
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			return config;
		});

		// Add a response interceptor
		instance.interceptors.response.use(
			(response) => {
				response;
			},
			async (error) => {
				// Handle 401 Unauthorized error
				if (error.response.status === 401 || error.response.status === 404) {
					// Redirect or perform any other action
					await logOut();
					navigate("/login");
				}
				// Handle 404 Not Found error
				return Promise.reject(error);
			}
		);

		// Use the Axios instance for making requests
		// Example: await instance.get('/api/data') or await instance.post('/api/data', requestData)
	}, [logOut, navigate]);

	return [instanceSecure];
};

export default useAxiosInterceptor;
