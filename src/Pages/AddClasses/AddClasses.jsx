import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosInterceptor from "../../hook/useAxiosInterceptor";

const AddClasses = () => {
	const [instanceSecure] = useAxiosInterceptor();
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		instanceSecure.post("/classes/", data).then((res) => {
			console.log(res.data);
			reset();
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
						{...register("class", { required: true })}
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
						{...register("available-seat", { required: true })}
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
