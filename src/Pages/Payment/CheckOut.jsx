import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";

import useAuthHook from "../../hook/useAuthHook";
import axios from "axios";

const CheckoutForm = ({ selected, price }) => {
	const stripe = useStripe();
	const elements = useElements();
	const { user } = useAuthHook();
	const [cardError, setCardError] = useState("");
	const [clientSecret, setClientSecret] = useState("");
	const [processing, setProcessing] = useState(false);
	const [transactionId, setTransactionId] = useState("");

	useEffect(() => {
		if (price > 0) {
			axios
				.post("https://triangle-sports.onrender.com/create-payment-intent", {
					price,
				})
				.then((res) => {
					console.log(res.data.clientSecret);
					setClientSecret(res.data.clientSecret);
				});
		}
	}, [price]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);
		if (card === null) {
			return;
		}

		const { error } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (error) {
			console.log("error", error);
			setCardError(error.message);
		} else {
			setCardError("");
			// console.log('payment method', paymentMethod)
		}

		setProcessing(true);

		const { paymentIntent, error: confirmError } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						email: user?.email || "unknown",
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (confirmError) {
			console.log(confirmError);
		}

		console.log("payment intent", paymentIntent);
		setProcessing(false);
		if (paymentIntent.status === "succeeded") {
			setTransactionId(paymentIntent.id);
			// save payment information to the server
			const payment = {
				email: user?.email,
				transactionId: paymentIntent.id,
				price,
				date: new Date(),
				quantity: selected.length,
				selectedItems: selected.map((item) => item._id),
				itemNames: selected.map((item) => item.name),
			};
			axios
				.post("https://triangle-sports.onrender.com/payments", payment)
				.then((res) => {
					console.log(res.data);
					if (res.data.result.insertedId) {
						// display confirm
					}
				});
		}
	};

	return (
		<>
			<form className="w-full h-full" onSubmit={handleSubmit}>
				<CardElement />
				<button
					className="btn btn-primary btn-sm mt-4"
					type="submit"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			{cardError && <p className="text-red-600 ml-8">{cardError}</p>}
			{transactionId && (
				<p className="text-green-500">
					Transaction complete with transactionId: {transactionId}
				</p>
			)}
		</>
	);
};

export default CheckoutForm;
