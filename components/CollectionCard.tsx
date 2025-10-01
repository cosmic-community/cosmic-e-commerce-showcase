import Link from 'next/link'
import type { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-transform hover:scale-105 hover:shadow-md">
        {/* Collection Image */}
        <div className="aspect-video bg-gray-100 overflow-hidden">
          {collection.metadata.collection_image ? (
            <img
              src={`${collection.metadata.collection_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={collection.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              width={400}
              height={200}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Collection Info */}
        <div className="p-4">
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {collection.title}
          </h3>
          {collection.metadata.description && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {collection.metadata.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}