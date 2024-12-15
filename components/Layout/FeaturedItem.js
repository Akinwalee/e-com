import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedItem({ product }) {
    return (
        <div role="listitem" className="product-item">
            <Link href={`/product/${product.id}`} className="block group relative">
                <Image
                    alt={product.name}
                    src={product.image}
                    width={500} // Set appropriate width
                    height={500} // Set appropriate height
                    className="w-full h-auto object-cover rounded-lg group-hover:opacity-75 transition duration-300 ease-in-out"
                />
                {product.discount && (
                    <div className="discount absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                        Discount
                    </div>
                )}
                <div className="fp-data mt-4">
                    <div className="fp-title text-lg font-medium text-gray-900">{product.name}</div>
                    <div className="fp-price-wrap mt-2 flex items-center space-x-2">
                        {product.oldPrice && (
                            <div className="old-price text-sm text-gray-400 line-through">${product.oldPrice}</div>
                        )}
                        <div className="new-price text-lg font-semibold text-gray-900">${product.newPrice}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
