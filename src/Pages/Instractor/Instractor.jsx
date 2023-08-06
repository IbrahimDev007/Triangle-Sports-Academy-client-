import React from "react";
import Banner from "../../components/Banner/Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Instractor = () => {
	const banner = {
		name: "Instructor",
		discriptiion:
			"A skilled and passionate sports instructor who possesses a deep understanding of various sports disciplines. With expertise in coaching and training, they inspire and guide individuals to reach their athletic potential. They provide personalized instruction, teach proper techniques, and instill discipline and teamwork. Their enthusiasm and knowledge create a dynamic learning environment, motivating students to excel in their chosen sport.",
	};

	const { data: instructor = [] } = useQuery({
		queryKey: ["instructor"],
		queryFn: async () => {
			const res = await axios(
				"https://sportsacdeme-ibrahimdev007.vercel.app/instructor"
			);
			return res.data;
		},
	});

	return (
		<div>
			<Banner name={banner.name} discriptiion={banner.discriptiion} />
			<div className="flex justify-center py-16">
				<div className="grid grid-cols-3 gap-8">
					{instructor.map((ins) => (
						<div className="card w-48 bg-base-100 shadow-xl" key={ins._id}>
							<figure>
								<img src={ins.image} alt="Shoes" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{ins.name}</h2>
								<p>
									<span className="font-semibold text-md">Email:</span>
									{ins.email}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Instractor;
