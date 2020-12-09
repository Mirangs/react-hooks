import React from "react";
import { useRequireAuth } from "../hooks/useRequireAuth";
import Dashboard from "./Dashboard";

const DashboardPage: React.FC = () => {
	const auth = useRequireAuth();

	console.log(auth);
	if (!auth) {
		return <p>Loading...</p>;
	}

	return <Dashboard auth={auth} />;
};

export default DashboardPage;
