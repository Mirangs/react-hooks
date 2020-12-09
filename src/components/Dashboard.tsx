import React from "react";

const Dashboard: React.FC<{ auth: any }> = ({ auth }) => (
	<h1>Dashboard for user, {auth.user.email}</h1>
);

export default Dashboard;
