import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="p-16 w-3/6 mx-auto" style={{ backgroundImage: "url('/images/WatchCTA.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className=" mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl leading-10 w-3/4 text-white font-semibold mb-4">Find your signature timepiece.</h3>
            <p className="text-sm text-white mb-6">
              Where luxury meets individuality. Discover a curated selection of exquisite watches that resonate with your unique style and personality.
            </p>
            <div className="cta-btn-wrap">

              <Link href="/categories" className="inline-block bg-black border text-white px-6 py-3 text-xs transition-transform duration-500 hover:bg-white hover:text-black">
                Shop Collection
              </Link>
            </div>
          </div>
          {/* You can add an image or other content in the other half of the section */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;