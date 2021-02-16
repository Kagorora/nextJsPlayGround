import React from "react";
import { FiLogIn, FiSearch } from "react-icons/fi";

const header = () => {
  return (
    <div className='bg-blue-600 py-5 flex align-center flex justify-around'>
      <div>
        <a href='/' className='text-white'>
          karaba
        </a>
      </div>
      <div>
        <a
          href='/register'
          className='text-white bg-blue-500 rounded py-3 px-8 text-sm hover:bg-blue-500 mr-5'
        >
          Find Applications
        </a>

        <a
          href='/register'
          className='text-white bg-blue-700 rounded py-3 px-8 text-sm hover:bg-blue-500 mr-5'
        >
          Sign up
        </a>

        <a
          href='/login'
          className='text-white bg-blue-700 rounded py-3 px-8 text-sm hover:bg-blue-500'
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default header;
