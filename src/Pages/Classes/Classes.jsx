import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import useAdminHook from "../../hook/useAdminHook";
import useClasses from "../../hook/useClasses";
import useInstructorHook from "../../hook/useInstractorHook";
const Classes = () => {
	const [stClasses] = useClasses();
	const [Admin] = useAdminHook();
	const [instructor] = useInstructorHook();

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
				{stClasses.map((cls) => (
					<div
						className={`card card-compact w-96 bg-base-100 shadow-xl ${
							cls.availableSeats === 0 && "bg-red"
						}`}
						key={cls._id}
					>
						<figure>
							<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{cls.title}</h2>
							<p>
								<span className="font-semibold text-md">Instructor:</span>
								{cls.instructor}
							</p>
							<p>
								<span className="font-semibold text-md">Available Seats:</span>
								{cls.availableSeats}
							</p>
							<p>
								<span className="font-semibold text-md">Price:</span>
								{cls.price} <span className="font-semibold">$</span>
							</p>
							<div className="card-actions justify-center">
								<button
									className={`btn ${
										cls.availableSeats === 0 &&
										Admin &&
										instructor &&
										"btn-disabled"
									} btn-accent`}
								>
									Select
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Classes;
