import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import UpdateModale from "../../components/UpdateModal/UpdateModale";
import useAuthHook from "../../hook/useAuthHook";
import useAxiosInterceptor from "../../hook/useAxiosInterceptor";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const Myclasses = () => {
	const [DataClass, setDataClass] = useState([]);
	const { user, loading } = useAuthHook();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	const [instanceSecure] = useAxiosInterceptor();
	const { data: myClasses = [] } = useQuery({
		queryKey: ["myClasses ", user?.email],
		enabled: !!user?.email && !!localStorage.getItem("access-verify-token"),
		queryFn: async () => {
			const res = await instanceSecure.get(`classes/instructor/${user?.email}`);
			console.log(res.data);
			return res.data;
		},
	});

	const handleModale = (item) => {
		setDataClass(item);
		window.my_modal_3.showModal();
	};
	const onSubmit = (data) => {
		const { _id } = DataClass;
		const formData = new FormData();
		formData.append("image", data.image[0]);
		fetch(img_hosting_url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					const imgURL = res.data.display_url;
					const { name, price, availableSeats } = data;
					const newItem = {
						name,
						price: parseFloat(price),
						availableSeats,
						image: imgURL,
						status: "panding",
					};
					console.log(newItem);
					instanceSecure.patch(`/classes/${_id}`, newItem).then((data) => {
						reset();
					});
				}
			});
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
						{myClasses &&
							myClasses.map((studentClass, index) => (
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
