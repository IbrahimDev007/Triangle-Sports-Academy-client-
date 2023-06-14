import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty("--progress", 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<div className="px-4 min-w-[80vw]  mx-auto">
			<div className=" min-w-max max-h-[50vh]">
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
					className="myswiper"
				>
					<SwiperSlide>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
					</SwiperSlide>
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
				<div className=" grid grid-col-3">
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
			</div>
			<div className="flex flex-col justify-center">
				<h3 className="my-5 py-12 px-4 bg-warning rounded-2xl flex justify-center text-3xl">
					{" "}
					Popular Instructor
				</h3>
				<div className=" grid grid-col-3">
					<div className="card w-44 bg-base-100 shadow-xl  hover:opacity-70">
						<figure>
							<img
								src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"
								alt="Shoes"
							/>
						</figure>
						<div className="card-body">
							<h2 className="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
