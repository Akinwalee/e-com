import Layout from '../components/Layout/Layout';
import Link from 'next/link'

export default function OrderConfirmation() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Order Confirmation
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Thank you for your purchase!
            </p>
          </div>
          <div className="text- center">
            <svg
              className="mx-auto h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Your order is confirmed
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              We'll send you an email with the details.
            </p>
          </div>
          <div className="text-center">
            <Link href="/" className="text-black hover:text-grey-500">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}