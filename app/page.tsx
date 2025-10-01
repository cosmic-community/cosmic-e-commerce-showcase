import { getProducts, getCollections } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import Link from 'next/link'

export default async function HomePage() {
  const [products, collections] = await Promise.all([
    getProducts(),
    getCollections()
  ])
  
  // Get featured products (first 6)
  const featuredProducts = products.slice(0, 6)
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Welcome to Cosmic Store
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products across electronics, clothing, and home & garden
        </p>
      </section>
      
      {/* Collections Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Collection</h2>
          <Link 
            href="/collections" 
            className="text-primary hover:underline font-medium"
          >
            View All →
          </Link>
        </div>
        
        {collections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No collections available</p>
        )}
      </section>
      
      {/* Featured Products Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link 
            href="/products" 
            className="text-primary hover:underline font-medium"
          >
            View All →
          </Link>
        </div>
        
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-8">No products available</p>
        )}
      </section>
    </div>
  )
}