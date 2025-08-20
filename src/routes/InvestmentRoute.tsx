import { Routes, Route } from "react-router";
import { Investment } from "../pages/Investment";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Confirm } from "../pages/Confirm";
import { Dashboard } from "../pages/Dashboard";

export function InvestmentRoute() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route path="/" element={<Investment />} />
				<Route path="/confirm" element={<Confirm />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/investment/:id" element={<Investment />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
