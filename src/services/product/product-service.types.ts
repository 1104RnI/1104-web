type ProductPlan = 'FREE' | 'PREMIUM' | 'ULTIMATE'

export type ProductListItem = {
	id: number
	title: string
	sub_title: string
	price: string
	price_caption: string
	summary: string
	description: string[]
	plan: ProductPlan
	badges: string[]
	labels: string[]
	overviews: string[]
	is_flagship: boolean
	background_image_url: string
}

export type Product = {
	id: string
	title: string
	price: string
	price_caption: string
	details: string[]
	plan: string
	badges: string[]
	overviews: string[]
	thumbnail_image_url: string
	is_purchased: boolean
}

export type Faq = {
	id: number
	image_url: string
	title: string
	description: string
	details: string[]
	order: number
}

export type GetProductFaqsResponse = Faq[]
