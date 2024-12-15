import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="banner-section py-16 bg-black">
      <div className="container mx-auto">
        <div className="banner-wrap flex flex-nowrap justify-between gap-8">
          
          {/* Left Banner */}
          <Link href="/categories.html" className="banner-left w-full md:w-2/5 block relative hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-0" style={{ paddingBottom: '105%' }}>
              <Image
                src="/images/Redonepic.png"
                alt="Banner Image"
                fill
                className="banner-img object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="banner-data absolute bottom-6 left-6 text-white">
              <div className="banner-sub-title text-xl font-semibold">Luxury watch</div>
              <h3 className="banner-title text-4xl font-bold mt-2">Where Style Meets Substance.</h3>
            </div>
            <div className="banner-link absolute bottom-6 right-6 flex items-center">
              <div className="text-lg font-semibold">Explore Collection</div>
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
          <Link href="/products.html" className="banner-right w-full md:w-3/5 block relative hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-0" style={{ paddingBottom: '98%' }}>
              <Image
                src="/images/frank-park-nXruwpNrOzQ-unsplash.jpg"
                alt="Banner Image"
                fill
                className="banner-img object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="banner-data absolute bottom-6 left-6 text-white">
              <div className="banner-sub-title text-xl font-semibold">Wear professional</div>
              <h3 className="banner-title text-4xl font-bold mt-2">Fashion Meets Function In Every Tick.</h3>
            </div>
            <div className="banner-link absolute bottom-6 right-6 flex items-center">
              <div className="text-lg font-semibold">Shop Watches</div>
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