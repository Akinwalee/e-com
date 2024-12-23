import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Brands from '../components/Layout/Brands';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: Implement actual authentication logic
      // const response = await signIn(email, password);
      // if (response.success) {
      //   router.push('/dashboard');
      // }
      
      console.log('Login attempt:', { email, password });
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
              Log In
            </h2>
          </div>
          <form className="mt-8 space-y-6 bg-[#f8f7f6] p-[1rem]" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-col gap-10 rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="text-[1rem] mb-0.5">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-[#f8f7f6] border-black outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 text-gray-900 sm:text-sm"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="text-[1rem] mb-0.5">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-[#f8f7f6] border-black outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 text-gray-900 sm:text-sm"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-black hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log In
              </button>
            </div>
            <p className="mt-2 flex justify-between text-sm text-gray-600">
              <span>Don't have an account?{' '}</span>
              <span>
                <Link href="/signup" className="font-medium text--black hover:text-grey-500 underline">
                  Sign Up
                </Link>
              </span>
            </p>
          </form>
          {/* <Brands /> */}
        </div>
      </div>
    </Layout>
  );
}