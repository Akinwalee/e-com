import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  // TODO: Fetch product details using the `id`
  const product = {
    title: 'Bulova Men\'s 96B104 Marine Star',
    description: 'Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. Blue dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Luminescent hands and markers. Date display at the 3 o\'clock position. Quartz movement. Scratch resistant mineral crystal. Solid case back. Case diameter: 43 mm. Case thickness: 11.2 mm. Band width: 20 mm. Deployment clasp. Water resistant at 100 meters / 330 feet. Functions: date, hour, minute, second.',
    image: '/images/bulova-marine-star.jpg',
    price: 299.99
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
          </div>
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {product.title}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              ${product.price}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">
              {product.description}
            </p>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}