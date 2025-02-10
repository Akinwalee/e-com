import FeaturedItem from './FeaturedItem';
import sampleProducts from './sampleProducts';

export default function Featured({ products = sampleProducts }) {
    return (
      <div className="w-full lg:mx-auto px-4 lg:px-0 lg:w-3/6 py-12">
        <div className="mb-8">
          <div className="text-xs font-thin text-black">SHOWCASE</div>
          <h2 className="text-3xl font-thin text-gray-900 font-manrope mt-4">Featured Watches</h2>
        </div>
        <div>
          <div role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {products.length > 0 ? (
                products.map((product) => (
                    <FeaturedItem key={product.id} product={product} />
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
