import Image from 'next/image';

const Brands = () => {
    return (
        <section className="featured-brands mb-8">
            <div className="mx-auto border-t border-neutral-300">
                <h2 className="text-2xl  text-center mb-4 ">Our Top Brands</h2>
                <div className="grid grid-cols-3 gap-16 w-5/6 lg:gap-8 lg:grid-cols-5 lg:w-3/6 mx-auto  pt-8">
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
                    width={120} 
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