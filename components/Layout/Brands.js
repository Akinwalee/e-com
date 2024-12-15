import Image from 'next/image';

const Brands = () => {
    return (
        <section className="featured-brands py-12">
            <div className="container mx-auto border-t border-gray-700 pt-3">
                <h2 className="text-3xl text-center mb-4 font-bold">Our Top Brands</h2>
                <div className="flex justify-center space-x-8 pt-5">
                {[
                    'bulova-2.svg',
                    'seiko-1.svg', 
                    'citizen-logo-1.svg', 
                    'timexx.svg', 
                    'casio-logo.svg'
                ].map((brand) => (
                    <Image 
                    key={brand}
                    src={`/images/${brand}`} 
                    alt={`${brand} Logo`} 
                    width={100} 
                    height={50} 
                    className="grayscale hover:grayscale-0 transition"
                    />
                ))}
                </div>
            </div>
        </section>
    )
}

export default Brands;