import React, { useState } from "react";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/navbar/Navbar";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../../services/apiQuery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigate = useNavigate();

  const { mutate: loginMutation } = useMutation({
    mutationFn: () => userLogin({ email, password }),
    onSuccess: (data) => {
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Logged in successfully.", { toastId: "admin-error" });
      navigate("/admin");
    },
    onError: (data: any) => {
      toast.error(data?.response.data.message, { toastId: "admin-error" });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation();
  };

  return (
    <section className='bg-gray-50 w-full'>
      <Navbar />
      <div
        className='flex items-center justify-center'
        style={{ height: "80vh" }}
      >
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 '>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  placeholder='name@company.com'
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 '>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  placeholder='Password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 '
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label className='text-gray-500'>Remember me</label>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='w-full border-2 py-1 bg-slate-900 text-white text-center cursor-pointer'
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0'>
        <Footer />
      </div>
    </section>
  );
};
export default Login;
