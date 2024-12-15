import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="py-16 m-10" style={{ backgroundImage: "url('/images/WatchCTA.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Find your signature timepiece.</h3>
            <p className="text-lg text-gray-600 mb-6">
              Where luxury meets individuality. Discover a curated selection of exquisite watches that resonate with your unique style and personality.
            </p>
            <div className="cta-btn-wrap">
              <Link href="/categories" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">
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