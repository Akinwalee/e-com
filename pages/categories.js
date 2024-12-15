import Image from 'next/image';
import Layout from '../components/Layout/Layout';

export default function Categories() {
  const categories = [
    {
      title: 'Luxury Watches',
      description: 'Exquisite timepieces for the discerning collector',
      image: '/images/luxury-category.jpg',
      productCount: 50
    },
    {
      title: 'Sports Watches',
      description: 'High-performance watches for active lifestyles',
      image: '/images/sports-category.jpg',
      productCount: 35
    },
    {
      title: 'Vintage Collection',
      description: 'Rare and nostalgic timepieces',
      image: '/images/vintage-category.jpg',
      productCount : 20
    }
  ];

  return (
    <Layout>
      <div className="categories-hero py-16 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Our Categories</h1>
          <p className="text-lg text-gray-700 text-center mb-10">
            Explore our diverse collection of watches, from luxury to sports and vintage.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="category-card">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
                <div className="mt-4">
                  <span className="text-blue-600 font-bold">{category.productCount}</span>
                  {' '}
                  products
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}