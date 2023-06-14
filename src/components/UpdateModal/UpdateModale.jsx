import { useForm } from "react-hook-form";

const UpdateModale = ({ onSubmit }) => {
	const { register, handleSubmit } = useForm();
	return (
		<div>
			<form method="dialog" className="modal-box">
				<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
					✕
				</button>
				<h3 className="font-bold text-lg">Update Clasee</h3>
				<form
					className="card-body bg-success"
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
			</form>
		</div>
	);
};

export default UpdateModale;
