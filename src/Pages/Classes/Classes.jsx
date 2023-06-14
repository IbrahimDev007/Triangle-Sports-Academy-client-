import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";

const Classes = () => {
	const banner = {
		name: "Classes",
		discriptiion:
			"Experience the thrill of our exhilarating classes! Join us for engaging and action-packed sessions led by expert instructors. Whether you're a beginner or an experienced athlete, our classes cater to all skill levels. Discover new skills, improve your technique, and have fun in a supportive and energetic atmosphere. Don't miss out on the opportunity to elevate your game and achieve your fitness goals. Enroll today!",
	};
	return (
		<>
			<Helmet>Triangle Acdamie || Classes</Helmet>
			<Banner name={banner.name} discriptiion={banner.discriptiion} />

			<div className="grid grid-cols-3  p-8">
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Classes;
