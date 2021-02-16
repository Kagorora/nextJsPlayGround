import React from "react";
import Header from "./header";

const index = () => {
  return (
    <>
      <Header />
      <div className='mt-20'>
        <div className='login h-auto max-w-md mx-auto bg-white-100 shadow-md rounded p-8'>
          <p className='m-3 text-center strong'>Welcome</p>
          <p className='text-xl text-gray-700 text-center'>
            My name is Joe Doe
          </p>
          <p className='text-sm text-gray-400 text-center mb-10'>
            I live in Kigali{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
