type InvestmentAPIResponse = {
    id: string
    name: string
    amount: number
    category: CategoriesAPIEnum
}

type InvestmentPaginationAPIresponse = {
    investments: InvestmentAPIResponse[],
    pagination:{
        page: number
        perPage: number
        totalRecords: number
        totalPages: number
    }
}