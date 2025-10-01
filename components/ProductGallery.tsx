'use client'

import { useState } from 'react'
import type { Product } from '@/types'

interface ProductGalleryProps {
  product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.metadata.product_images || []
  const [selectedImage, setSelectedImage] = useState(0)
  
  if (images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }
  
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={`${images[selectedImage].imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt={`${product.title} - Image ${selectedImage + 1}`}
          className="w-full h-full object-cover"
          width={600}
          height={600}
        />
      </div>
      
      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index
                  ? 'border-primary'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={`${product.title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={150}
                height={150}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}