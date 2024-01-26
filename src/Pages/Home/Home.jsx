//import custom style
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./swiperstyle.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Review from "./Component/Review/Review";
import Services from "./Component/Services/Services";
import { Contact } from "./Component/ContactUs/ContactUs";
import Latest from "./Component/Latest/Latest";
import Weekly from "./Component/Weekly/Weekly";
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
			const res = await axios("https://triangle-sports.onrender.com/popular");
			return res.data;
		},
	});

	const img = [
		{
			img: "https://plus.unsplash.com/premium_photo-1685286321787-c71422d4e827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			title: "Dynamic:",
			disc: "A sports academy that offers constantly evolving training programs and adapts to the latest techniques and trends in the sports world.",
		},

		{
			img: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			title: "Elite:",
			disc: "An academy known for its high standards, top-tier coaching staff, and exceptional training methods.",
		},
		{
			img: "https://images.unsplash.com/photo-1583040989829-f668e2495ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbCUyMGdhbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
			title: "Innovative:",
			disc: " An academy that pioneers new training methodologies, using cutting-edge technology and creative approaches to enhance athletes' performance.",
		},
		{
			img: "https://images.unsplash.com/photo-1616353352910-15d970ac020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhc2tldGJhbGwlMjBnYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
			title: "Comprehensive:",
			disc: "A place that offers a holistic approach to training, covering all aspects of physical, mental, and tactical development.",
		},
	];

	const instructors = popular.filter((item) => item.popular === "instructor");
	const classes = popular.filter((item) => item.popular === "class");

	return (
		<div className="px-4 min-w-full  mx-auto">
			<section>
				<div className="hero min-h-screen min-w-full bg-[url(https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?size=626&ext=jpg)] bg-cover bg-center bg-no-repeat">
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content text-center text-neutral-content">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl font-bold">
								Triangle Sports Academy
							</h1>
							<p className="mb-5">
								Introducing the Triangle Sports Academy, where champions are
								molded through passion and dedication! Our state-of-the-art
								facility boasts cutting-edge training equipment and expert
								instructors who are elite athletes in their own right. With a
								curriculum meticulously designed to cultivate skills,
								resilience, and teamwork, students excel both on and off the
								field. Our website serves as a portal to this world of
								excellence, offering detailed class schedules, instructor
								profiles, and a seamless registration process. Join us at
								Triangle Sports Academy, where dreams evolve into victories.
								Unleash your potential today!
							</p>
							<Link to={"/classes"} className="btn btn-primary">
								See All Classes
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className=" w-12/12 flex  flex-col justify-center ">
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
					className="myswiper w-full h-48 object-fill my-10"
				>
					{img.map((item, index) => (
						<SwiperSlide key={index}>
							<img src={item.img} />
							<div className="">
								<h2 className="text-orange-500 font-extralight text-3xl">
									{item.title}
								</h2>
								<h3 className="text-orange-500 font-extralight ">
									{item.disc}
								</h3>
							</div>
						</SwiperSlide>
					))}

					<div className="autoplay-progress" slot="container-end">
						<svg viewBox="0 0 48 48" ref={progressCircle}>
							<circle cx="24" cy="24" r="20"></circle>
						</svg>
						<span ref={progressContent}></span>
					</div>
				</Swiper>
			</section>
			<section className="">
				<h3 className="my-5 py-12 px-4 bg-transparent font-extralight rounded-2xl flex justify-center text-3xl">
					{" "}
					Review
				</h3>
				<Review />
			</section>
			<section className="">
				<h3 className="my-5 py-12 px-4 bg-transparent font-extralight rounded-2xl flex justify-center text-3xl">
					{" "}
					Services
				</h3>
				<Services />
			</section>

			<section>
				<h3 className="my-5 py-12 px-4 bg-transparent font-extralight rounded-2xl flex justify-center text-3xl">
					{" "}
					Latest
				</h3>
				<Latest />
			</section>
			<section>
				<h3 className="my-5 py-12 px-4 bg-transparent font-extralight rounded-2xl flex justify-center text-3xl">
					{" "}
					Weekly Hot
				</h3>
				<Weekly />
			</section>
			<section className="flex flex-col justify-center">
				<h3 className="my-5 py-12 px-4 bg-transparent font-extralight rounded-2xl flex justify-center text-3xl">
					Popular Classes
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{classes.map((cls) => (
						<div
							className="card card-compact w-full md:w-96 h-[100%]  gap-4 bg-base-100 shadow-xl"
							key={cls._id}
						>
							<figure>
								<img
									src={cls.image}
									className="object-cover h-72"
									alt={cls.title}
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">{cls.title}</h2>
								<p>
									<span className="font-semibold text-md">Instructor:</span>
									{cls.instructor}
								</p>
								<p>
									<span className="font-semibold text-md">Students:</span>
									{cls.students}
								</p>
								<div className="card-actions justify-end"></div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="flex flex-col justify-center items-center">
				<h3 className="my-5 py-8 sm:py-12 md:py-16 px-4 bg-warning rounded-2xl text-center text-3xl w-full">
					Popular Instructor
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:lg:xl:grid-cols-3  gap-4">
					{instructors.map((ins) => (
						<div
							className="card w-full sm:w-72 md:w-80 lg:w-96 xl:w-112 bg-base-100 shadow-xl mt-4 hover:opacity-70"
							key={ins._id}
						>
							<figure>
								<img
									src={ins.image}
									className="object-cover w-full h-80"
									alt={ins.name}
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">{ins.name}</h2>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{ins.email}
								</p>
								<p>
									<span className="font-semibold text-md">Students:</span>
									{ins.students}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<h3 className="my-5 py-4 px-4 bg-transparent font-semibold text-2xl  border border-black  border-y-2 border-x-0  border-dashed rounded-2xl flex justify-center ">
					{" "}
					Contuct Us
				</h3>
				<Contact />
			</section>
		</div>
	);
};

export default Home;
