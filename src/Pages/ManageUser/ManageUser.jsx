import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useClassses from "../../hook/useClasses";
import useAxiosInterceptor from "../../hook/useAxiosInterceptor";
const ManageUser = () => {
	const [instanceSecure] = useAxiosInterceptor();
	const [, , refetch] = useClassses();

	const { data: user = [], refetch: userRefetch } = useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const res = await instanceSecure("http://localhost:3000/users");
			return res.data;
		},
	});

	const handleRole = (user, role) => {
		instanceSecure.patch(`/users/${user._id}?role=${role}`).then((response) => {
			console.log(response.data);
			userRefetch();
			// Handle success
		});
	};

	const handleDelete = (user) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				instanceSecure
					.delete(`http://localhost:3000/users/${user._id}`)
					.then((res) => {
						if (res.data.deletedCount > 0) {
							userRefetch();
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
						}
					});
			}
		});
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
									<td>{user.name}</td>
									<td className="text-end">{user.role}</td>
									<td>
										<td
											className="text-end btn btn-warning"
											onClick={() => handleDelete(user)}
										>
											Delete
										</td>
										<td
											className={`text-end  btn btn-ghost ${
												user.role === "admin" && "btn-disabled"
											}`}
											onClick={() => handleRole(user, "admin")}
										>
											Make admin
										</td>
										<td
											className={`text-end  btn  ${
												user.role === "instractor" && "btn-disabled"
											}`}
											onClick={() => handleRole(user, "instructor")}
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
