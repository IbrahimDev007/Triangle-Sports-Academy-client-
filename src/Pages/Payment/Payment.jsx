import React from "react";
import CheckoutForm from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelected from "../../hook/useSelected";

const Payment = () => {
	const stripePromise = loadStripe(import.meta.env.VITE_stripr_publish_key);
	const [selected, refetch] = useSelected();
	console.log(selected);
	const total = selected.reduce(
		(sum, studentClass) => studentClass.price + sum,
		0
	);
	const options = {
		mode: "payment",
		amount: 1099,
		currency: "usd",
		// Fully customizable with appearance API.
		appearance: {
			/*...*/
			// theme: "stripe",
			// variables: {
			// 	colorPrimary: "#0570de",
			// 	colorBackground: "#ffffff",
			// 	colorText: "#30313d",
			// 	colorDanger: "#df1b41",
			// 	fontFamily: "Ideal Sans, system-ui, sans-serif",
			// 	spacingUnit: "2px",
			// 	borderRadius: "4px",
			// 	// See all possible variables below
			// },
		},
	};

	return (
		<div className="w-6/12">
			<Elements stripe={stripePromise} className="w-full">
				<CheckoutForm selected={selected} price={total} />
			</Elements>
		</div>
	);
};

export default Payment;
