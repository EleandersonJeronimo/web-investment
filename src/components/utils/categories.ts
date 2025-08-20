export const CATEGORIES = {
	ação: {
		name: "Ação",
		icon: "📈",
	},

	fundo: {
		name: "Fundo",
		icon: "💰",
	},

	titulo: {
		name: "Título",
		icon: "📜",
	},

	imovel: {
		name: "Imovel",
		icon: "🏠",
	},
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
	keyof typeof CATEGORIES
>;
