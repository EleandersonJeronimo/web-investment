export const CATEGORIES = {
	ação: {
		name: "Ação",
	},

	fundo: {
		name: "Fundo",
	},

	titulo: {
		name: "Título",
	},

	imovel: {
		name: "Imovel",
	},
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
	keyof typeof CATEGORIES
>;
