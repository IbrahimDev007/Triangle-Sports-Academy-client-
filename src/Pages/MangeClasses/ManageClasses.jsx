import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const ManageClasses = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
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
								<td className="text-end">class.email</td>
								<td className="text-end">class.seats</td>
								<td className="text-end">class.price</td>
								<td className="text-end">class.status</td>

								<td>
									<ul className="flex flex-col">
										<li className=" btn btn-ghost  btn-sm">Approved</li>
										<li className="btn btn-ghost btn-sm">Denay</li>
										<li
											className=" btn btn-ghost btn-sm"
											onClick={() => window.my_modal_3.showModal()}
										>
											Feedback
										</li>
									</ul>
								</td>
							</tr>
							{/* )) */}
							{/* } */}
						</tbody>
					</table>
					<dialog id="my_modal_3" className="modal">
						<form
							method="dialog"
							className="modal-box"
							onSubmit={handleSubmit(onSubmit)}
						>
							<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
								✕
							</button>
							<h3 className="font-bold text-lg">Feedback!</h3>
							<input
								type="text"
								placeholder="class"
								className="input input-bordered"
								{...register("class", { required: true })}
							/>
						</form>
					</dialog>
				</div>
			</div>
		</div>
	);
};

export default ManageClasses;
