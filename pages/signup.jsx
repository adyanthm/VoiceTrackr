import { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      await sendEmailVerification(userCredential.user);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: formData.email,
        createdAt: new Date().toISOString(),
      });

      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await setDoc(doc(db, 'users', result.user.uid), {
        email: result.user.email,
        createdAt: new Date().toISOString(),
      });
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - VoiceTrackr</title>
      </Head>
      
      <div className="min-h-screen flex">
        {/* Left side - Sign up form */}
        <div className="flex-1 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create account</h1>
            <p className="text-gray-600 mb-8">Sign up for an account to get started</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                           focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                           focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <div className="mt-1 space-y-1">
                  <p className="text-sm text-gray-500">• At least 5 characters</p>
                  <p className="text-sm text-gray-500">• One number</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                           focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gray-200 text-gray-600 font-medium rounded-lg 
                         hover:bg-gray-300 transition-all duration-200"
              >
                Continue with email
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignup}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center 
                         justify-center space-x-2 hover:bg-gray-50 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            </form>

            <p className="mt-8 text-sm text-gray-600 text-center">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:text-purple-500">
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Night Sky */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="night-sky">
            {/* Dense star field */}
            <div className="stars"></div>
            
            {/* Shooting star */}
            <div className="shooting-star"></div>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />
        </div>
      </div>
    </>
  );
}