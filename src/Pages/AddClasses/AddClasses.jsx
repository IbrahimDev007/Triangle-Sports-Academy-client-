// import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuthHook from "../../hook/useAuthHook";
import useAxiosInterceptor from "../../hook/useAxiosInterceptor";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClasses = () => {
	const [instanceSecure] = useAxiosInterceptor();
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuthHook();
	const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
	const onSubmit = (data) => {
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
						feedback: "null",
						instructor: user?.displayName,
						instructorEmail: user.email,
					};
					console.log(newItem);
					instanceSecure.post("/classes", newItem).then((data) => {
						console.log("after posting new class item", data.data);
						if (data.data.insertedId) {
							reset();
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "class added successfully",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
				}
			});
	};

	return (
		<div>
			<Helmet>
				<title>Triangle Acadamie | Add</title>
			</Helmet>
			<form className="card-body bg-success" onSubmit={handleSubmit(onSubmit)}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Class Name</span>
					</label>
					<input
						type="text"
						placeholder="class"
						className="input input-bordered"
						{...register("name", { required: true })}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Class Image</span>
					</label>
					<input
						type="file"
						className="file-input w-full max-w-xs"
						{...register("image", { required: true })}
					/>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Available seats</span>
					</label>
					<input
						type="number"
						placeholder="Seats"
						className="input input-bordered"
						{...register("availableSeats", { required: true })}
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Price</span>
					</label>
					<input
						type="number"
						placeholder="Price"
						className="input input-bordered"
						{...register("price", { required: true })}
					/>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary">Add Class</button>
				</div>
			</form>
		</div>
	);
};

export default AddClasses;
