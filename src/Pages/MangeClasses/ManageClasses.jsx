import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const ManageClasses = () => {
	return (
		<div>
			{" "}
			<div className="w-full">
				<Helmet>
					<title>triangle Sports Academe |Manage class</title>
				</Helmet>

				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>Class</th>
								<th>Class Name</th>
								<th>Instructor</th>
								<th>Email</th>
								<th>Seats</th>
								<th>Price</th>
								<th>staatus</th>
								<th>class update</th>
							</tr>
						</thead>
						<tbody>
							{/* {classes.map((class, index) => ( */}
							{/* <tr key={class._id}> */}
							<tr>
								<td>{1}</td>
								<td>
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img
												// src={class.image}
												src={""}
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
									</div>
								</td>
								<td>class.name</td>
								{/* <td className="text-end">${class.price}</td> */}
								<td className="text-end">class.instractor</td>
								<td className="text-end">class.seats</td>
								<td className="text-end">class.price</td>
								<td className="text-end">class.status</td>

								<td>
									<td className="text-end btn-ghost" onClick={""}>
										Approved
									</td>
									<td className="text-end btn-ghost" onClick={""}>
										Denay
									</td>
									<td className="text-end btn-ghost" onClick={""}>
										Feedback
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

export default ManageClasses;
