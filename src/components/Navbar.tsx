import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "../hooks/useRouter";

const Navbar: React.FC = () => {
	const auth = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (auth && !auth.user) {
			router.push("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	let content = null;
	if (!auth || !auth.user) {
		content = (
			<button
				style={{ display: "block" }}
				type="button"
				onClick={() => {
					auth!.signin("email", "pass");
					router.push("/dashboard");
				}}
			>
				Signin
			</button>
		);
	} else {
		content = (
			<>
				<p>Account ({auth.user!.email})</p>
				<button
					style={{ display: "block" }}
					type="button"
					onClick={() => {
						auth!.signount();
						router.push("/");
					}}
				>
					Signout
				</button>
			</>
		);
	}

	return (
		<section>
			<NavLink style={{ display: "block" }} to="/dashboard">
				Dashboard
			</NavLink>
			<NavLink to="/">Main</NavLink>
			{content}
		</section>
	);
};

export default Navbar;
