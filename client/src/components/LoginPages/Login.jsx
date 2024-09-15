import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import sidepic from '../../assets/sidepic.jpg';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  return (
    <div  className="text-white h-[100vh] flex justify-center items-center bg-cover"
    style={{ backgroundImage: `url(${sidepic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
    <div className='bg-slate-900 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
      <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios.post('http://localhost:5000/api/auth/login', {
            email: values.email,
            password: values.password,
          })
          .then(response => {
            console.log('User logged in successfully:', response.data);
            // Redirect to dashboard
            navigate('/dashboard');
          })
          .catch(error => {
            console.error('There was an error logging in the user:', error);
            // Display error message
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='relative my-4'>
              <Field
                type='email'
                name='email'
                className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                placeholder=''
              />
              <label
                htmlFor='email'
                className='absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'
              >
                Your Email
              </label>
              <BiUser className='absolute top-4 right-4' />
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm mt-1' />
            </div>
            <div className='relative my-4'>
              <Field
                type='password'
                name='password'
                className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                placeholder=''
              />
              <label
                htmlFor='password'
                className='absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'
              >
                Your Password
              </label>
              <AiOutlineUnlock className='absolute top-4 right-4' />
              <ErrorMessage name='password' component='div' className='text-red-500 text-sm mt-1' />
            </div>
            <button
              type='submit'
              className='w-full mb-4 text-[18px] mt-6 rounded-full bg-purple-200 text-purple-800 hover:bg-red-400 hover:text-white py-2 transition-colors duration-300'
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Login;
