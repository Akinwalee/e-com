import LatestItem from './LatestItem';
import sampleProducts from './sampleProducts';

export default function Latest({ products = sampleProducts }) {
    return (
      <div className="w-3/6 mx-auto py-12">
        <div className="mb-8">
          <div className="text-md  text-gray-500">Explore Our Products</div>
          <h2 className="text-2xl  text-gray-900">Latest Products</h2>
        </div>
        <div className="flex flex-wrap">
          <div role="list" className="flex justify-between w-full">
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