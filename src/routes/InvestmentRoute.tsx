import { Routes, Route } from "react-router";
import { Investment } from "../pages/Investment";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";

export function InvestmentRoute() {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route path="/" element={<Investment />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
