import React from "react";
import useAsync from "../hooks/useAsync";
import Counter from "./Counter";

const myFunction = (): Promise<string> => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rnd = Math.random() * 10;
			rnd <= 5
				? resolve("Submitted successfully")
				: reject("There was an error");
		}, 2000);
	});
};

const Main = () => {
	const { execute, status, value, error } = useAsync(myFunction, false);

	let content;
	switch (status) {
		case "idle":
			content = <div>Start your journey by clicking a button</div>;
			break;
		case "success":
			content = <div>{value}</div>;
			break;
		case "error":
			content = <div>{error}</div>;
			break;
		default:
	}
	return (
		<div className="App">
			<h1>Hello world</h1>
			{content}
			<Counter />
			<button
				type="button"
				onClick={execute}
				disabled={status === "pending"}
			>
				{status !== "pending" ? "Click me" : "Loading..."}
			</button>
		</div>
	);
};

export default Main;
