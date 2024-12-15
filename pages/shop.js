import Image from 'next/image';
import Layout from '../components/Layout/Layout';

export default function Shop() {
  const products = [
    {
      title: 'Bulova Men\'s 96B104 Marine Star',
      description: 'Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. Blue dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o\'clock position. Quartz movement. Scratch resistant mineral crystal. Solid case back. Case diameter: 43 mm. Case thickness: 11.2 mm. Band width: 20 mm. Deployment clasp. Water resistant at 100 meters / 330 feet. Functions: date, hour, minute, second.',
      image: '/images/Redonepic-p-500.png',
      price: 299.99
    },
    {
      title: 'Seiko Men\'s SNE329 Sport Solar Black Stainless Steel',
      description: 'Stainless steel case with a stainless steel bracelet. Fixed bezel. Black dial with luminous hands and index hour markers. Arabic numerals mark the 3, 6, 9 and 12 o\'clock positions. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o\'clock position. Solar quartz movement. Scratch resistant hardlex crystal. Solid case back. Case diameter: 43 mm. Case thickness: 12 mm. Band width: 22 mm. Deployment clasp. Water resistant at 100 meters / 330 feet. Functions: date, hour, minute, second.',
      image: '/images/Redonepic-p-500.png',
      price: 225.00
    },
    {
      title: 'Citizen Men\'s Eco-Drive Stainless Steel Watch',
      description: 'Stainless steel case with a stainless steel bracelet. Fixed bezel. Black dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o\'clock position. Eco-Drive movement. Scratch resistant mineral crystal. Solid case back. Case diameter: 42 mm. Case thickness: 10 mm. Band width: 20 mm. Deployment clasp. Water resistant at 100 meters / 330 feet. Functions: date, hour, minute, second.', image: '/images/citizen-eco-drive.jpg',
      image: '/images/Redonepic-p-500.png',
      price: 195.00
    }
  ];

  return (
    <Layout>
      <div className="shop-hero py-16 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Shop</h1>
          <p className="text-lg text-gray-700 text-center mb-10">
            Browse our collection of luxury and sports watches.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.title} className="product-card">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4">
                  <span className="text-black font-bold">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}