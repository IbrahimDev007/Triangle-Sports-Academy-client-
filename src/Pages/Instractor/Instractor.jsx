import React from "react";
import Banner from "../../components/Banner/Banner";

const Instractor = () => {
	const banner = {
		name: "Instructor",
		discriptiion:
			"A skilled and passionate sports instructor who possesses a deep understanding of various sports disciplines. With expertise in coaching and training, they inspire and guide individuals to reach their athletic potential. They provide personalized instruction, teach proper techniques, and instill discipline and teamwork. Their enthusiasm and knowledge create a dynamic learning environment, motivating students to excel in their chosen sport.",
	};

	return (
		<div>
			<Banner name={banner.name} discriptiion={banner.discriptiion} />
		</div>
	);
};

export default Instractor;
