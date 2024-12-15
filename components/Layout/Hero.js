import React from 'react';

const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-3/5 bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Fashionable watches for every occasion</h1>
          <p className="text-xl mb-4">
          Elevate your style with our curated collection of essential watches for every wardrobe. 
          From classic timepieces that exude sophistication to modern designs that make a statement.
          </p>
          <button className="bg-black-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black mt-4 border-2 border-white-500">
            Shop Collection
          </button>
          {/* <p className="mt-8 text-sm">Scroll to Explore</p> */}
        </div>
      </div>
      <div className="w-2/5 bg-cover bg-center" style={{ backgroundImage: "url('/images/hiroshi-tsubono-7Iid4mkhh98-unsplash-p-1080.jpg')" }}></div>
    </div>
  );
};

export default Hero;