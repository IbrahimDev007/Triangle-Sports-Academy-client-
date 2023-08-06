import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
//import custom style

import "./swiperstyle.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Home = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	const { data: popular = [] } = useQuery({
		queryKey: ["popular"],
		queryFn: async () => {
			const res = await axios("http://localhost:3000/popular");
			return res.data;
		},
	});

	const img = [
		"https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1583040989829-f668e2495ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1616353352910-15d970ac020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhc2tldGJhbGwlMjBnYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
	];

	console.log(popular);
	const instructors = popular.filter((item) => item.popular === "instructor");
	const classes = popular.filter((item) => item.popular === "class");

	return (
		<div className="px-4 min-w-[80vw]  mx-auto">
			<div className=" max-w-[80vw] max-h-[30vh] p-4 mx-auto ">
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					onAutoplayTimeLeft={onAutoplayTimeLeft}
					className="block"
				>
					{/* {img.map((item, index) => (
						<SwiperSlide key={index}>
							<img src={item} />
						</SwiperSlide>
					))} */}

					<div className="autoplay-progress" slot="container-end">
						<svg viewBox="0 0 48 48" ref={progressCircle}>
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<span ref={progressContent}></span>
					</div>
				</Swiper>
			</div>
			<div className="flex flex-col justify-center">
				<h3 className="my-5 py-12 px-4 bg-success rounded-2xl flex justify-center text-3xl">
					{" "}
					Popular Classes
				</h3>
				<div className=" grid grid-cols-3 gap-4">
					{classes.map((cls) => (
						<div
							className="card card-compact w-96  gap-4 bg-base-100 shadow-xl"
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
									<span className="font-semibold text-md">student:</span>
									{cls.students}
								</p>
								<div className="card-actions justify-end"></div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<h3 className="my-5 py-12 px-4 bg-warning rounded-2xl text-center text-3xl">
					{" "}
					Popular Instructor
				</h3>
				<div className=" grid grid-cols-3">
					{instructors.map((ins) => (
						<div
							className="card w-48 gap-4 bg-base-100 shadow-xl  hover:opacity-70"
							key={ins._id}
						>
							<figure>
								<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{ins.name}</h2>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{ins.email}
								</p>
								<p>
									<span className="font-semibold text-md">student:</span>
									{ins.students}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
