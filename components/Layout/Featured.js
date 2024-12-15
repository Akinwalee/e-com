import FeaturedItem from './FeaturedItem';
import sampleProducts from './sampleProducts';

export default function Featured({ products = sampleProducts }) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="text-xl font-semibold text-gray-500">Showcase</div>
          <h2 className="text-3xl font-bold text-gray-900">Featured Watches</h2>
        </div>
        <div className="flex flex-wrap">
          <div role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
