import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
import { InvestmentRoute } from "./InvestmentRoute";

export function Routes() {
	return (
		<BrowserRouter>
			<InvestmentRoute />
		</BrowserRouter>
	);
}
