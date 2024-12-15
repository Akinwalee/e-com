import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestItem({ product }) {
    return (
        <div role="listitem" className="product-item">
            <Link href={`/product/${product.id}`} className="block group relative">
                <Image
                    alt={product.name}
                    src={product.image}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg group-hover:opacity-75 transition duration-300 ease-in-out"
                />
                <div className="fp-data mt-4">
                    <div className="fp-title text-lg font-medium text-gray-900">{product.name}</div>
                </div>
            </Link>
        </div>
    );
}
