import React from "react";

const Banner = ({ name, discriptiion }) => {
	return (
		<div>
			<div
				className="hero min-h-40vh"
				style={{
					backgroundImage: `url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)`,
				}}
			>
				<div className="hero-overlay bg-opacity-30"></div>
				<div className="hero-content text-center text-info-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{name}</h1>
						<p className="mb-5">{discriptiion}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
