export type ProductResponse = {
    products: ProductType[],
    total: number,
    skip: number,
    limit: number,
}

export type ProductType = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand?: string,
    sku: string,
    weight: number,
    dimensions: DimensionsType,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: ReviewType[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: MetaType,
    images: string[],
    thumbnail: string,
}

export type DimensionsType = {
    width: number,
    height: number,
    depth: number,
}

export type ReviewType = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string,
}

export type MetaType = {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string,
}