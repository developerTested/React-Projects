import { ProductType } from '../types'

type productProps = {
    product: ProductType
}

export default function ProductCard({ product }: productProps) {
    return (
        <div className="block p-2 border rounded-lg shadow-md space-y-2">
            <img src={product.thumbnail} alt={product.title} className="w-60 h-60" />

            <div className="text-lg font-semibold">
                {product.title}
            </div>
            <div className="flex items-center">
                <div className="price">
                    {product.price}
                </div>
            </div>
        </div>
    )
}
