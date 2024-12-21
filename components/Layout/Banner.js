import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="banner-section py-16 mx-auto my-24">
      <div className="w-3/6 mx-auto">
        <div className="banner-wrap flex flex-nowrap justify-between">
          
          {/* Left Banner */}
          <Link href="/categories.html" className="banner-left md:w-2/6 block relative">
            <div className="relative w-full h-72 overflow-hidden">
              <Image
                src="/images/Redonepic.png"
                alt="Banner Image"
                width={100}
                height={100}
                className="banner-img object-cover w-full shadow-lg hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="banner-data absolute top-6 left-6 text-white ">
              <div className="banner-sub-title text-xs">LUXURY WATCH</div>
              <h3 className="banner-title text-2xl mt-3 leading-10">Where Style Meets Substance.</h3>
            </div>
            <div className="banner-link absolute bottom-8 left-6 text-white flex items-center ">
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
          <Link href="/products.html" className="banner-right w-full  md:w-4/6 block relative overflow-hidden">
            <div className="relative w-full h-72 ml-5 overflow-hidden">
              <Image
                src="/images/frank-park-nXruwpNrOzQ-unsplash.jpg"
                alt="Banner Image"
                layout='fill'
                className="banner-img object-cover shadow-lg  hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="banner-data absolute top-6 left-12 text-white">
              <div className="banner-sub-title text-xs">WEAR PROFESSIONAL</div>
              <h3 className="banner-title text-2xl mt-3">Fashion Meets Function In Every Tick.</h3>
            </div>
            <div className="banner-link flex items-center absolute bottom-8 left-12">
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
  );
};

export default Banner;