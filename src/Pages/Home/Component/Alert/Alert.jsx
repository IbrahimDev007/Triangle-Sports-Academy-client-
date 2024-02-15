import { useState } from "react";

const Alert = () => {
	const [alert, setalert] = useState(true);

	return (
		<div>
			{alert && (
				<div
					role="alert"
					className="alert bg-red-500 font-semibold rounded-none text-white text-lg  flex items-center justify-between"
				>
					<span>
						For Server Data Load issue May You One Or Two Time Refresh
					</span>
					<button
						className="btn btn-sm btn-circle btn-outline text-white  "
						onClick={() => setalert(!alert)}
					>
						X
					</button>
				</div>
			)}
		</div>
	);
};

export default Alert;
