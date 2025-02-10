import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className='p-4 lg:p-0'>
      <section className="banner-section  mx-auto">
        <div className="w-full lg:w-3/6 mx-auto">
          <div className="banner-wrap grid grid-cols-1 md:grid-cols-3">
            
            {/* Left Banner */}
            <Link href="/categories.html" className="banner-left block relative col-span-1">
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src="/images/Redonepic.png"
                  alt="Banner Image"
                  width={200}
                  height={100}
                  className="banner-img absolute h-full object-cover w-full shadow-lg hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="banner-data absolute top-6 left-4 lg:left-6 text-white">
                <div className="banner-sub-title text-xs">LUXURY WATCH</div>
                <h3 className="banner-title text-2xl mt-3 leading-10">Where Style Meets Substance.</h3>
              </div>
              <div className="banner-link absolute bottom-8 left-4 lg:left-6 text-white flex items-center ">
                <div className="text-sm">Explore Collection</div>
                <Image
                  src="/images/w-ic-arrow.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </div>
            </Link>

            {/* Right Banner */}
            <Link href="/products.html" className="banner-right w-full block relative overflow-hidden col-span-2 mt-4 md:mt-0">
              <div className="relative w-full h-72 md:ml-5 overflow-hidden">
                <Image
                  src="/images/frank-park-nXruwpNrOzQ-unsplash.jpg"
                  alt="Banner Image"
                  layout='fill'
                  className="banner-img object-cover shadow-lg  hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="banner-data absolute top-6 left-4 md:left-12 text-white">
                <div className="banner-sub-title text-xs">WEAR PROFESSIONAL</div>
                <h3 className="banner-title text-2xl mt-3">Fashion Meets Function In Every Tick.</h3>
              </div>
              <div className="banner-link flex items-center absolute bottom-8 left-4 md:left-12">
                <div className="text-sm text-white">Shop Watches</div>
                <Image
                  src="/images/w-ic-arrow.svg"
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </div>
            </Link>

          </div>
        </div>
      </section>
  </div>
  );
};

export default Banner;