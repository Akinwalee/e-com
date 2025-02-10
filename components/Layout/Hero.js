import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col lg:h-screen md:flex-row">
      <div className="w-full md:w-3/5 bg-black flex lg:justify-center text-white">
        <div className="w-full relative md:w-full lg:w-2/6 px-4 lg:px-0 lg:ml-44 mt-24">
          <h1 className="text-3xl md:text-5xl mb-6 font-manrope tracking-wide  min-w-40 ">Fashionable watches for every occasion</h1>
          <p className="text-md w-full mb-4">
            Elevate your style with our curated collection of essential watches for every wardrobe. 
            From classic timepieces that exude sophistication to modern designs that make a statement.
          </p>
          <button className="bg-black text-white px-6 py-3 hover:bg-white hover:text-black my-8 border-2 border-white">
            View Collection
          </button>

          {/* The scroll down functionality */}
          <Link href="" className="absolute hidden lg:flex mt-12 space-x-2 bottom-10 ">
            <p className="text-xs text-neutral-400">Scroll to Explore</p>
            <Image 
              src="/images/w-ic-arrow.svg"
              width={22}
              height={22}
              alt="scroll down arrow"
              className="rotate-90 animate-bounceY"
            />
          </Link>
        </div>
      </div>
      <div className="w-full min-h-80 md:w-2/5 relative">
        <Image 
          src="/images/hiroshi-tsubono-7Iid4mkhh98-unsplash-p-1080.jpg"
          fill
          objectFit='cover'
          alt="Hero Image"
          className='absolute'
        />
      </div>
    </div>
  );
};

export default Hero;

