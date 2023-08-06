import { useForm } from "react-hook-form";

const UpdateModale = ({ onSubmit }) => {
	const { register, handleSubmit } = useForm();
	return (
		<div modal-box text-center text-yellow-50>
			<form method="dialog" className=" text-center  text-yellow-50  ">
				<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white bg-red-400">
					✕
				</button>
				<h3 className="font-bold text-lg ">Update Clasee</h3>
			</form>
			<form
				className="card-body bg-success modal-box"
				onSubmit={handleSubmit(onSubmit)}
			>
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
					<button className="btn btn-primary">Update Class</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateModale;
