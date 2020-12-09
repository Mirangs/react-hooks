import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProvideAuth } from "./hooks/useAuth";
import Main from "./components/Main";
import DashboardPage from "./components/DashboardPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
	return (
		<ProvideAuth>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Main />
					</Route>
					<Route path="/dashboard">
						<DashboardPage />
					</Route>
				</Switch>
			</BrowserRouter>
		</ProvideAuth>
	);
};

export default App;
