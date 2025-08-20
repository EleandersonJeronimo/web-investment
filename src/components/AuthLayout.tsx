import { Outlet } from "react-router";
import { Input } from "./Input";
import { Button } from "./Button";

export function AuthLayout() {
	return (
		<div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100">
			<main className="p-3 w-full md:w-auto">
				<h1>GF Innovation</h1>
				<Outlet />

				<Input legend="Teste" />
				<Button>Teste</Button>
			</main>
		</div>
	);
}
