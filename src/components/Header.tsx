import logout from "../assets/icon/logout.svg";

export function Header() {
	return (
		<header className="w-full flex justify-between">
			<h1 className="my-8">GF Innovation</h1>

			<div className="flex items-center gap-3">
				<span className="text-sm font-semibold text-gray-200">Bem-Vindo</span>
				<img
					src={logout}
					alt="logout"
					className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
				/>
			</div>
		</header>
	);
}
