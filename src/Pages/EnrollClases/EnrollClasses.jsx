import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAuthHook from "../../hook/useAuthHook";

const EnrollClasses = () => {
	const { user, loading } = useAuthHook();
	const { data: enroll = [] } = useQuery({
		queryKey: ["enroll", user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axios(
				`https://triangle-sports.onrender.com/enroll?email=${user?.email}`
			);
			console.log(res.data);
			return res.data;
		},
	});
	return (
		<div>
			{" "}
			<div className="w-full">
				<Helmet>
					<title>triangle Sports Academe |Enroll Classes</title>
				</Helmet>

				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						{/* head */}
						<thead>
							<tr>
								<th>#</th>

								<th className="mx-4 text-center">class Name</th>
								<th>Price</th>
								<th>Item Quentity </th>
							</tr>
						</thead>
						<tbody>
							{enroll &&
								enroll.map((item, index) => (
									<tr key={item._id}>
										<td>{index + 1}</td>

										<td className="text-end">
											{item.itemNames.map((className, index) => (
												<div className="text-end mx-4" key={index}>
													{className}
												</div>
											))}
										</td>
										<td className="text-end">${item.price}</td>
										<td className="text-end">{item.quantity}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default EnrollClasses;
