import React from "react";

const card = () => {
	return (
		<div>
			{/* card for blur effect  */}
			<div className="card w-96 bg-base-100 shadow-xl image-full">
				<figure>
					<img
						src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
			{/* card for shaddow  */}

			<div className="card w-96 glass">
				<figure>
					<img
						src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="car!"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Life hack</h2>
					<p>How to park your car at your garage?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Learn now!</button>
					</div>
				</div>
			</div>

			{/* card for normal   */}
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default card;
