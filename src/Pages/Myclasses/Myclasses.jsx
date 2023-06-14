import React from "react";
import { Helmet } from "react-helmet-async";
import UpdateModale from "../../components/UpdateModal/UpdateModale";

const Myclasses = () => {
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div>
			<Helmet>
				<title>triangle Sports Academe |My Classes</title>
			</Helmet>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead className="bg-success text-white">
						<tr>
							<th>#</th>
							<th>Class Name</th>
							<th>Status</th>
							<th>Enroll Student</th>
							<th>FeedBack</th>
							<th>Update</th>
						</tr>
					</thead>
					<tbody>
						{/* {myclass.map((studentClass, index) => ( */}
						{/* <tr key={studentClass._id}> */}
						<tr>
							<td>{1}</td>

							<td>studentClass.name</td>
							{/* <td className="text-end">${studentClass.price}</td> */}
							<td className="text-end">Status</td>
							<td className="text-end">Enroll Student</td>
							<td className="text-end">FeedBack</td>
							<td className="text-end ">
								<button
									onClick={() => window.my_modal_3.showModal()}
									className="btn btn-sm btn-warning"
								>
									Update
								</button>
							</td>
						</tr>
						{/* )) */}
						{/* } */}
					</tbody>
				</table>
				<dialog id="my_modal_3" className="modal">
					<UpdateModale onSubmit={onSubmit} />
				</dialog>
			</div>
		</div>
	);
};

export default Myclasses;
