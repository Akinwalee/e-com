import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 bg-black flex justify-center text-white">
        <div className="w-2/6 ml-48 mt-24">
          <h1 className="text-5xl mb-6 font-manrope tracking-wide">Fashionable watches for every occasion</h1>
          <p className="text-md mb-4">
            Elevate your style with our curated collection of essential watches for every wardrobe. 
            From classic timepieces that exude sophistication to modern designs that make a statement.
          </p>
          <button className="bg-black-600 text-white px-6 py-3 hover:bg-white hover:text-black mt-4 border-2 border-white-500">
            View Collection
          </button>

          {/* The scroll down functionality */}

          
            <Link href="" className='flex mt-56 space-x-2'>
              <p className="text-xs text-neutral-400">Scroll to Explore</p>

              <Image 
                src="/images/w-ic-arrow.svg"
                width={22}
                height={22}
                alt='scroll down arrow'
                className='rotate-90 animate-bounceY'
              />
            </Link>
          
        </div>
      </div>
      
      <div className="w-2/5 bg-cover bg-center" style={{ backgroundImage: "url('/images/hiroshi-tsubono-7Iid4mkhh98-unsplash-p-1080.jpg')" }}></div>
    </div>
  );
};

export default Hero;