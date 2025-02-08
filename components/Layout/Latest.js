import LatestItem from './LatestItem';
import sampleProducts from './sampleProducts';

export default function Latest({ products = sampleProducts }) {
    return (
      <div className="w-full p-4 lg:p-0 lg:w-3/6 my-8 lg:my-24 mx-auto py-12">
        <div className="mb-8">
          <div className="text-md  text-gray-500">Explore Our Products</div>
          <h2 className="text-2xl  text-gray-900">Latest Products</h2>
        </div>
        <div className="flex">
          <div role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {products.length > 0 ? (
                products.map((product) => (
                    <LatestItem key={product.id} product={product} />
                ))
            ) : (
                <div className="empty-state w-dyn-empty mt-8">
                    <div className="text-center text-lg text-gray-500">No products found.</div>
                </div>
            )}
          </div>
        </div>
      </div>
    );
}