import { Weeklyes } from "../../Constant/constant";

const Weekly = () => {
	return (
		<div className="sm:px-6 px-4 py-16">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12">
				{Weeklyes.map((weekly, idx) => (
					<div className="w-full sm:w-1/2 lg:w-2/3 p-2 card" key={idx}>
						<div>
							<div className="relative">
								<img src={weekly.image} alt={weekly.title} />
								<div className="bg-white absolute top-0 left-0">
									<p className="text-base leading-4 py-3 px-5 text-gray-800">
										News
									</p>
								</div>
							</div>
							<p className="text-base font-light leading-4 text-gray-800 mt-6">
								{weekly.name}
							</p>
							<h1 className="text-2xl font-semibold leading-7 sm:pr-6 mt-2 text-gray-800">
								{weekly.title}
							</h1>
							<p className="text-base leading-normal mt-4 sm:pr-6 text-gray-600">
								{weekly.description}
							</p>
							<button className="flex items-center  relative justify-between w-full sm:w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 ">
								<p className="text-base font-medium leading-4 text-white">
									Read more
								</p>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3.33203 8H12.6654"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10 10.6667L12.6667 8"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10 5.33344L12.6667 8.0001"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Weekly;
