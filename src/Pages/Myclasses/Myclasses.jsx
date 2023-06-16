import React from "react";
import { Helmet } from "react-helmet-async";
import UpdateModale from "../../components/UpdateModal/UpdateModale";
import useClasses from "../../hook/useClasses";

const Myclasses = () => {
	const [DataClass, setDataClass] = useState([]);
	const [stClasses] = useClasses();
	const handleModale = (data) => {
		setDataClass(data);
		window.my_modal_3.showModal();
	};
	const onSubmit = (data) => {
		const { _id } = DataClass;
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
							<th>Price</th>
							<th>Status</th>
							<th>Enroll Student</th>
							<th>FeedBack</th>
							<th>Update</th>
						</tr>
					</thead>
					<tbody>
						{stClasses.map((studentClass, index) => (
							<tr key={studentClass._id}>
								<td>{index}</td>
								<td>{studentClass.name}</td>
								<td className="text-end">${studentClass.price}</td>
								<td className="text-end">{studentClass.status}</td>
								<td className="text-end">{studentClass.enroll}</td>
								<td className="text-end">{studentClass.feedback}</td>
								<td className="text-end ">
									<button
										onClick={() => handleModale(studentClass)}
										className="btn btn-sm btn-warning"
									>
										Update
									</button>
								</td>
							</tr>
						))}
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
