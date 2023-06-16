import { useState } from "react";
import { Helmet } from "react-helmet-async";

// import { useForm } from "react-hook-form";
import useAxiosInterceptor from "../../hook/useAxiosInterceptor";
import useClasses from "../../hook/useClasses";
const ManageClasses = () => {
	// const { register, handleSubmit } = useForm();
	const [stClasses, , refetch] = useClasses();
	const [instanceSecure] = useAxiosInterceptor();
	const [DataClass, setDataClass] = useState([]);
	const handleApproved = (approved, status) => {
		instanceSecure
			.patch(`/classes/${approved._id}?status=${status}`)
			.then((response) => {
				console.log(response.data);
				refetch();
				// Handle success
			});
	};

	const handleModale = (data) => {
		setDataClass(data);
		window.my_modal_3.showModal();
	};

	const handleSubmit = (e) => {
		instanceSecure
			.patch(`/admin/feedback/${DataClass._id}`, {
				feedback: e.target.feedback.value,
			})
			.then((response) => {
				console.log(response.data);
				refetch();
				// Handle success
			});
	};
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
							{stClasses.map((stClass, index) => (
								<tr key={stClass._id}>
									<td>{index}</td>
									<td>
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img
													// src={stClass.image}
													src={""}
													alt="Avatar Tailwind CSS Component"
												/>
											</div>
										</div>
									</td>
									<td>{stClass.name}</td>
									{/* <td className="text-end">${stClass.price}</td> */}
									<td className="text-end">{stClass.instructor}</td>
									<td className="text-end">{stClass.instructorEmail}</td>
									<td className="text-end">{stClass.availableSeats}</td>
									<td className="text-end">{stClass.price}</td>
									<td className="text-end">{stClass.status}</td>

									<td>
										<ul className="flex flex-col">
											<li
												className=" btn btn-ghost  btn-sm"
												onClick={() => handleApproved(stClass, "approved")}
											>
												Approved
											</li>
											<li
												className="btn btn-ghost btn-sm"
												onClick={() => handleApproved(stClass, "denaied")}
											>
												Denay
											</li>
											<li
												className=" btn btn-ghost btn-sm"
												onClick={() => handleModale(stClass)}
											>
												Feedback
											</li>
										</ul>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<dialog id="my_modal_3" className="modal">
						<form method="dialog" className="modal-box" onSubmit={handleSubmit}>
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
								✕
							</button>
							<h3 className="font-bold text-lg">Feedback!</h3>
							<input
								name="feedback"
								type="text"
								placeholder="class"
								className="input input-bordered"
							/>
							<button className="btn btn-accent" type="submit">
								submit
							</button>
						</form>
					</dialog>
				</div>
			</div>
		</div>
	);
};

export default ManageClasses;
