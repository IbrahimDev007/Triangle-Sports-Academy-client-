import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<div className="max-w-screen-2xl mx-auto ">
					<RouterProvider router={router} />
				</div>
			</QueryClientProvider>
		</HelmetProvider>
	</AuthProvider>
);
