import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
const ManageUser = () => {
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
							{/* {users.map((user, index) => ( */}
							{/* <tr key={user._id}> */}
							<tr>
								<td>{1}</td>
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
								{/* <td className="text-end">${user.price}</td> */}
								<td className="text-end">user.role</td>
								<td>
									<td className="text-end btn-ghost" onClick={""}>
										make admin
									</td>
									<td className="text-end btn-ghost" onClick={""}>
										make instractor
									</td>
								</td>
							</tr>
							{/* )) */}
							{/* } */}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ManageUser;
