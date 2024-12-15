import React from 'react';
import Image from 'next/image';

export default function ImageComponent() {
    return (
        <div className="relative w-full h-96">
            <Image
                src="/images/roger-varenhorst-1UL_ux0Zo7g-unsplash-p-2000.jpg"
                alt="Beautiful Landscape"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    );
}
