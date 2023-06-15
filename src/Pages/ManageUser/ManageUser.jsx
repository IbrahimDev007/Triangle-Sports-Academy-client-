import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosInterceptor from "../../hook/useAxiosInterceptor";
// import Swal from "sweetalert2";
const ManageUser = () => {
	const [instanceSecure] = useAxiosInterceptor();
	const { data: user = [], refetch } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await instanceSecure("http://localhost:3000/users");
			return res.data;
		},
	});

	const handleAdmin = (_id) => {
		console.log(_id);
	};

	const handleInstructor = (_id) => {
		console.log(_id);
	};
	const handleDelete = (_id) => {
		console.log(_id);
	};

	return (
		<div>
			{" "}
			<div className="w-full">
				<Helmet>
					<title>triangle Sports Academe |Manage User</title>
				</Helmet>

				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>user</th>
								<th>user Name</th>
								<th>role</th>
								<th>Update role</th>
							</tr>
						</thead>
						<tbody>
							{user.map((user, index) => (
								<tr key={user._id}>
									<td>{index}</td>
									<td>
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													// src={user.image}
													src={""}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
									</td>
									<td>user.name</td>

									<td className="text-end">{user.role}</td>
									<td
										className="text-end btn-ghost"
										onClick={() => handleDelete(user._id)}
									>
										Delete
									</td>
									<td>
										<td
											className={`text-end btn-ghost${
												user.role === "admin" && "btn-disabled"
											}`}
											onClick={() => handleAdmin(user._id)}
										>
											Make admin
										</td>
										<td
											className={`text-end btn-ghost${
												user.role === "instructor" && "btn-disabled"
											}`}
											onClick={() => handleInstructor(user._id)}
										>
											Make instractor
										</td>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageUser;
