import { Button } from "../components/Button";
import { Input } from "../components/Input";
import React, { useState, useEffect } from "react";
import SearchSvg from "../assets/icon/search.svg";
import { InvestmentItem } from "../components/InvestmentItem";
import { type InvestmentItemProps } from "../components/InvestmentItem";
import { CATEGORIES } from "../components/utils/categories";
import { Pagination } from "../components/Pagination";
import {api} from "../services/api"
import { AxiosError } from "axios";

const PER_PAGE = 3

export function Dashboard() {
	const [name, setName] = useState("");
	const [page, setPage] = useState(1);
	const [totalOfPage, setTotalOfPage] = useState(0);
	const [investments, setInvestments] = useState<InvestmentItemProps[]>([]);

	async function fetchInvestment() {
		const response = await api.get<InvestmentPaginationAPIresponse>(`/investments?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`);

		setInvestments(response.data.investments.map((investment) => ({
			id: investment.id,
			name: investment.name,
			amount: investment.amount,
			category: investment.category
		})))

		setTotalOfPage(response.data.pagination.totalPages)
	}

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		fetchInvestment()
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

	

	useEffect(() => {
		fetchInvestment()
	}, [page])

	return (
		<div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
			<h1 className="text-gray-100 font-bold text-xl flex-1">Investimentos</h1>

			<form
				onSubmit={onSubmit}
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
