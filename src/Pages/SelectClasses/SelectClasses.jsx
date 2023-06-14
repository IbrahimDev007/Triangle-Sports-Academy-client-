import { Helmet } from "react-helmet-async";

// import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectClasses = () => {
	//   const [selected, refetch] = useSelected();
	// console.log(selected);
	// const total = selected.reduce((sum, studentClass) => studentClass.price + sum, 0);

	const handleDelete = (studentClass) => {
		// Swal.fire({
		// 	title: "Are you sure?",
		// 	text: "You won't be able to revert this!",
		// 	icon: "warning",
		// 	showCancelButton: true,
		// 	confirmButtonColor: "#3085d6",
		// 	cancelButtonColor: "#d33",
		// 	confirmButtonText: "Yes, delete it!",
		// }).then((result) => {
		// 	if (result.isConfirmed) {
		// 		fetch(`https://localhost:3000/selecteds/${studentClass._id}`, {
		// 			method: "DELETE",
		// 		})
		// 			.then((res) => res.json())
		// 			.then((data) => {
		// 				if (data.deletedCount > 0) {
		// 					refetch();
		// 					Swal.fire("Deleted!", "Your file has been deleted.", "success");
		// 				}
		// 			});
		// 	}
		// });
	};
	return (
		<div>
			{" "}
			<div className="w-full">
				<Helmet>
					<title>triangle Sports Academe | My selected</title>
				</Helmet>
				<div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
					<h3 className="text-3xl">Total classes: selected.length</h3>
					<h3 className="text-3xl">Total Price: total</h3>
					<Link to="/dashboard/payment">
						<button className="btn btn-warning btn-sm">PAY</button>
					</Link>
				</div>
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>
								<th>class</th>
								<th>class Name</th>
								<th>Price</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{/* {selected.map((studentClass, index) => ( */}
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
									<button
										onClick={() => handleDelete(studentClass)}
										className="btn btn-ghost bg-red-600  text-white"
									>
										Delete
									</button>
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

export default SelectClasses;