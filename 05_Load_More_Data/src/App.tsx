import { useEffect, useState } from "react"
import ProductCard from "./components/ProductCard";
import { ProductResponse, ProductType } from "./types";

export default function App() {

  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState<ProductType[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  const limit = 20;

  async function fetchProducts(page = 0) {

    try {
      setLoading(true);

      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page === 0 ? 0 : page * limit}`)

      const results = await response.json() as ProductResponse;

      if (results.products.length) {

        const combinedProducts = [...new Set([...productList, ...results.products])];

        setProductList(combinedProducts);
        setTotal(results.total);
        setLastPage(false);
      }

      setLoading(false);

    } catch (error: any) {
      setLoading(true);
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (productList && productList.length === total) setLastPage(true);
  }, [productList]);

  useEffect(() => {
    fetchProducts()

    return () => {
      setProductList([])
      setLastPage(false);
      setTotal(0);
      setCurrentPage(0);
    }
  }, [])

  if (loading) {
    return (
      <div className="block">
        {errorMessage ? <div className="block px-4 py-2 rounded-md">
          {errorMessage}
        </div> : ""}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
          {Array.from(new Array(20)).map((_, i) => <div key={i} className="block p-2 rounded-lg animate-pulse space-y-2">
            <div className="w-full h-60 bg-slate-200"></div>
            <div className="text-lg font-semibold bg-slate-200 h-14"></div>
            <div className="flex items-center bg-slate-200 h-8">
              <div className="price">
              </div>
            </div>
          </div>)}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-4 mb-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2">
        {
          productList.length > 0 ? productList.map((product, i) => <ProductCard key={i} product={product} />)
            : "Loading..."
        }
      </div>

      <button disabled={lastPage} onClick={() => setCurrentPage(currentPage + 1)} className="mx-auto block px-4 py-2 bg-black disabled:bg-slate-200 text-white disabled:text-black text-center rounded-md">
        {lastPage ? "Nothing more to display" : "Load More"}
      </button>
    </div >
  )
}
