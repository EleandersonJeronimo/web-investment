import { Input } from "../components/Input";

export function Investment() {
	return (
		<form className="bg-gray-500w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]">
			<header>
				<h1>Novo investimento</h1>
				<p>Dados do novo investimento</p>
			</header>

			<Input required legend="Nome da solicitação" />
		</form>
	);
}
