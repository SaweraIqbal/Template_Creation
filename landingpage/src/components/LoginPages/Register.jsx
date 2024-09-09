import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import * as Yup from 'yup';

const Register = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <div className='bg-slate-900 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
      <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios.post('http://localhost:5000/api/auth/register', {
            email: values.email,
            password: values.password,
          })
          .then(response => {
            console.log('User registered successfully:', response.data);
            // Redirect to login page
            window.location.href = '/';
          })
          .catch(error => {
            console.error('There was an error registering the user:', error);
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
            <div className='relative my-4'>
              <Field
                type='password'
                name='confirmPassword'
                className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                placeholder=''
              />
              <label
                htmlFor='confirmPassword'
                className='absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'
              >
                Confirm Password
              </label>
              <AiOutlineUnlock className='absolute top-4 right-4' />
              <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-sm mt-1' />
            </div>
            <button
              type='submit'
              className='w-full mb-4 text-[18px] mt-6 rounded-full bg-purple-200 text-purple-800 hover:bg-red-400 hover:text-white py-2 transition-colors duration-300'
              disabled={isSubmitting}
            >
              Register
            </button>
            <div>
              <span className='mt-6'>
                Already have an Account? <Link to='/login' className='text-purple-500'>Log In</Link>
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;