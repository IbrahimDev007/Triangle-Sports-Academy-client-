import { Service } from "../../Constant/constant";
import "./servicess.scss";
const Services = () => {
	return (
		<div>
			<div className="flex flex-wrap justify-center mt-10">
				{Service.map((teck, index) => (
					<span
						key={index}
						className={`${
							index % 2 === 0 ? "btn--wut" : "btn--wiggle"
						} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5`}
					>
						<img src={teck.companyImage} alt={teck.title} />
					</span>
				))}
			</div>
		</div>
	);
};

export default Services;
