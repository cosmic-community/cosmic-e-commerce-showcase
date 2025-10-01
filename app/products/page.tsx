import { getProducts } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">All Products</h1>
        <p className="text-gray-600">
          Browse our complete collection of {products.length} products
        </p>
      </div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No products available</p>
        </div>
      )}
    </div>
  )
}