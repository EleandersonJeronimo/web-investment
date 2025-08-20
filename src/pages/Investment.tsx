import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../components/utils/categories";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

export function Investment() {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const params = useParams<{id: string}>()

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();

		navigate("/confirm", { state: { fromSubmit: true } });
	}

	return (
		<form
			onSubmit={onSubmit}
			className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
		>
			<header>
				<h1 className="text-xl font-bold text-gray-100">Novo investimento</h1>
				<p className="text-sm text-gray-200 mt-2 mb-4">
					Dados do novo investimento
				</p>
			</header>

			<Input
				required
				legend="Título"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<div className="flex gap-4">
				<Select
					required
					legend="Tipo do investimento"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					{CATEGORIES_KEYS.map((category) => (
						<option key={category} value={category}>
							{CATEGORIES[category].name}
						</option>
					))}
				</Select>

				<Input
					legend="valor"
					required
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</div>

			<Button type="submit" isLoading={isLoading}>
				{ params.id ? 'Voltar' : 'Enviar' }
			</Button>
			<div>
				<a href="/dashboard">Ir para a lista de investimentos</a>
			</div>
		</form>
	);
}
