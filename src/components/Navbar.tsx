import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Navbar: React.FC = () => {
	const auth = useAuth();

	useEffect(() => {
		console.log(auth);
	}, [auth]);

	let content = null;
	if (!auth || !auth.user) {
		content = (
			<button
				style={{ display: "block" }}
				type="button"
				onClick={() => auth!.signin("email", "pass")}
			>
				Signin
			</button>
		);
	} else {
		content = (
			<>
				<a href="/account">Account ({auth.user!.email})</a>
				<button
					style={{ display: "block" }}
					type="button"
					onClick={() => auth!.signount()}
				>
					Signout
				</button>
			</>
		);
	}

	return (
		<section>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
			{content}
		</section>
	);
};

export default Navbar;
