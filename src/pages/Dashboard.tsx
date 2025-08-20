import { Button } from "../components/Button";
import { Input } from "../components/Input";
import React, { useState } from "react";
import SearchSvg from "../assets/icon/search.svg";
import { InvestmentItem } from "../components/InvestmentItem";
import { type InvestmentItemProps } from "../components/InvestmentItem";
import { CATEGORIES } from "../components/utils/categories";
import { Pagination } from "../components/Pagination";

const INVESTMENT_EXAMPLE = {
	id: "123",
	name: "teste",
	amount: "123,89",
	category: "Fundo",
	categoryIcon: CATEGORIES["fundo"].icon,
};

export function Dashboard() {
	const [name, setName] = useState("");
	const [page, setPage] = useState(1);
	const [totalOfPage, setTotalOfPage] = useState(10);
	const [investments, setInvestment] = useState<InvestmentItemProps[]>([
		INVESTMENT_EXAMPLE,
	]);

	function fetchInvestment(e: React.FormEvent) {
		e.preventDefault();
	}

	function handlePagination(action: "next" | "previous") {
		setPage((prevPage) => {
			if (action === "next" && prevPage < totalOfPage) {
				return prevPage + 1;
			}

			if (action === "previous" && prevPage > 1) {
				return prevPage - 1;
			}

			return prevPage;
		});
	}

	return (
		<div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
			<h1 className="text-gray-100 font-bold text-xl flex-1">Investimentos</h1>

			<form
				onSubmit={fetchInvestment}
				className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
			>
				<Input
					placeholder="Pesquisar pelo nome"
					onChange={(e) => setName(e.target.value)}
				/>

				<Button type="submit" variant="icon">
					<img src={SearchSvg} alt="pesquisar" />
				</Button>
			</form>

			<div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll my-6">
				{investments.map((item) => (
					<InvestmentItem
						key={item.id}
						data={item}
						href={`/investment/${item.id}`}
					/>
				))}
			</div>

			<Pagination
				current={page}
				total={totalOfPage}
				onNext={() => handlePagination("next")}
				onPrevious={() => handlePagination("previous")}
			/>
		</div>
	);
}
