import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Banner from "../../components/Banner/Banner";
import useAdminHook from "../../hook/useAdminHook";
import useAuthHook from "../../hook/useAuthHook";
import useClasses from "../../hook/useClasses";
import useInstructorHook from "../../hook/useInstractorHook";
import useSelected from "../../hook/useSelected";
const Classes = () => {
	const [stClasses, , refetch] = useClasses();
	const [Admin] = useAdminHook();
	const [instructor] = useInstructorHook();
	const [selected, reload] = useSelected();
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useAuthHook();

	const filterClasses = stClasses.filter((cls) => cls.status === "approved");

	const handleAddToBooked = (item) => {
		const { _id, price, image, name } = item;
		const isClassAlreadySelected = selected.some(
			(selectedClass) => selectedClass.bookedId === _id
		);
		if (isClassAlreadySelected) {
			Swal.fire({
				title: "Class Already Added",
				text: "You have already added this class to your cart.",
				icon: "info",
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			if (user && user.email) {
				const bookedItem = {
					bookedId: _id,
					name,
					image,
					price,
					email: user.email,
					status: "selected",
				};
				axios
					.post(
						"https://sportsacdeme-ibrahimdev007.vercel.app/selecteds",
						bookedItem
					)
					.then((res) => {
						if (res.data.insertedId) {
							refetch();
							reload();
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "class added on the cart.",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
			} else {
				Swal.fire({
					title: "Please login to order the class",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Login now!",
				}).then((result) => {
					if (result.isConfirmed) {
						navigate("/login", { state: { from: location } });
					}
				});
			}
		}
	};

	const banner = {
		name: "Classes",
		discriptiion:
			"Experience the thrill of our exhilarating classes! Join us for engaging and action-packed sessions led by expert instructors. Whether you're a beginner or an experienced athlete, our classes cater to all skill levels. Discover new skills, improve your technique, and have fun in a supportive and energetic atmosphere. Don't miss out on the opportunity to elevate your game and achieve your fitness goals. Enroll today!",
	};

	// console.log(selected);
	return (
		<>
			<Helmet>Triangle Acdamie || Classes</Helmet>
			<Banner name={banner.name} discriptiion={banner.discriptiion} />

			<div className="grid grid-cols-3  p-8">
				{filterClasses.map((cls) => (
					<div
						className={`card card-compact w-96 bg-base-100 shadow-xl ${
							cls.availableSeats === 0 && "bg-red"
						}`}
						key={cls._id}
					>
						<figure>
							<img src={cls.image} className="object-cover h-72" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{cls.name}</h2>
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
										((cls.availableSeats === 0 || Admin || instructor) &&
											"btn-disabled") ||
										"btn-accent"
									} `}
									onClick={() => handleAddToBooked(cls)}
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
