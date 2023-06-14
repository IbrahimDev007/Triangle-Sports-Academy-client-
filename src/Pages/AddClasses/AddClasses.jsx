import React from "react";
import { Helmet } from "react-helmet-async";

const AddClasses = () => {
	return (
		<div>
			<Helmet>
				<title>Triangle Acadamie | Add</title>
			</Helmet>
			<div className="card-body bg-success">
				<div className="form-control">
					<label className="label">
						<span className="label-text">Class Name</span>
					</label>
					<input
						type="text"
						placeholder="class"
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Class Image</span>
					</label>
					<input type="file" className="file-input w-full max-w-xs" />
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Available seats</span>
					</label>
					<input
						type="number"
						placeholder="Seats"
						className="input input-bordered"
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
					/>
				</div>
				<div className="form-control mt-6">
					<button className="btn btn-primary">Add Class</button>
				</div>
			</div>
		</div>
	);
};

export default AddClasses;
