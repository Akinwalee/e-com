import FeaturedItem from './FeaturedItem';
import sampleProducts from './sampleProducts';

export default function Featured({ products = sampleProducts }) {
    return (
      <div className="mx-auto w-3/6 py-12">
        <div className="mb-8">
          <div className="text-xs font-thin text-black">SHOWCASE</div>
          <h2 className="text-3xl font-thin text-gray-900 font-manrope mt-4">Featured Watches</h2>
        </div>
        <div className="flex flex-wrap">
          <div role="list" className="flex w-full justify-between">
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
