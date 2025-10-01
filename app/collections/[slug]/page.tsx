// app/collections/[slug]/page.tsx
import { getCollection, getProductsByCollection } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

export default async function CollectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const collection = await getCollection(slug)
  
  if (!collection) {
    notFound()
  }
  
  const products = await getProductsByCollection(collection.id)
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href="/collections" className="text-gray-500 hover:text-gray-700">
              Collections
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium">{collection.title}</li>
        </ol>
      </nav>
      
      {/* Collection Header */}
      <div className="mb-12">
        {collection.metadata.collection_image && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img
              src={`${collection.metadata.collection_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
              alt={collection.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{collection.title}</h1>
        {collection.metadata.description && (
          <p className="text-xl text-gray-600 max-w-3xl">
            {collection.metadata.description}
          </p>
        )}
      </div>
      
      {/* Products Grid */}
      <div>
        <p className="text-gray-600 mb-6">{products.length} products in this collection</p>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products in this collection yet</p>
          </div>
        )}
      </div>
    </div>
  )
}