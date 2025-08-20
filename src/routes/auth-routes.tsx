import { Routes, Route } from "react-router";
import { Cadastro } from "../pages/Cadastro";
import { AuthLayout } from "../components/AuthLayout";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route path="/" element={<Cadastro />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
