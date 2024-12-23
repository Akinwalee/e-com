import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // TODO: Implement actual sign-up logic
      // const response = await signUp(formData);
      // if (response.success) {
      //   router.push('/dashboard');
      // }
      
      console.log('Sign up attempt:', formData);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4  sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-black hover:text-blue-500">
                Login
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6 bg-[#f8f7f6] p-[1rem]" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="user-field ">
                <label htmlFor="firstName" className="text-[0.8rem] mb-0.5">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  // className="appearance-none rounded-md relative block w-full px-3 py-2 border- border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  className="bg-[#f8f7f6] border-black outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 text-gray-900 sm:text-sm"
                  placeholder=""
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="user-field">
                <label htmlFor="lastName" className="text-[0.8rem] mb-0.5">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  // className="bg-[#f8f7f6] appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  className="bg-[#f8f7f6] outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 border-black text-gray-900 sm:text-sm"
                  placeholder=""
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-field">
              <label htmlFor="email" className="text-[0.8rem] mb-0.5">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                // className="bg-[#f8f7f6] appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                className="bg-[#f8f7f6] outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 border-black text-gray-900 sm:text-sm"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="user-field">
              <label htmlFor="password" className="text-[0.8rem] mb-0.5">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                // className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                className="bg-[#f8f7f6] outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 border-black text-gray-900 sm:text-sm"
                placeholder=""
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="user-field">
              <label htmlFor="confirmPassword" className="text-[0.8rem] mb-0.5">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                required
                // className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                className="bg-[#f8f7f6] outline-none w-full py-2 border-b-[1px] border-t-0 border-r-0 border-l-0 border-black text-gray-900 sm:text-sm"
                placeholder=""
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div>
              
              <label typeof='checkbox'><span>By creating an account, I agree to this website's <span>privacy policy</span> and <span>terms of service</span></span></label>
              <label typeof='checkbox'> I consent to recieve marketing emails</label>
            </div>
            
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}