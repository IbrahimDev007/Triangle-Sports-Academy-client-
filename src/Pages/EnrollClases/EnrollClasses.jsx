import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";

const EnrollClasses = () => {
	return (
		<div>
			{" "}
			<div className="w-full">
				<Helmet>
					<title>triangle Sports Academe |Enroll Classes</title>
				</Helmet>

				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>class</th>
								<th>class Name</th>
								<th>Price</th>
								<th>Tranjection Id</th>
							</tr>
						</thead>
						<tbody>
							{/* {enroll.map((studentClass, index) => ( */}
							{/* <tr key={studentClass._id}> */}
							<tr>
								<td>{1}</td>
								<td>
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img
												// src={studentClass.image}
												src={""}
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
									</div>
								</td>
								<td>studentClass.name</td>
								{/* <td className="text-end">${studentClass.price}</td> */}
								<td className="text-end">$222</td>
								<td>
									<td className="text-end">tranjection Id</td>
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

export default EnrollClasses;
