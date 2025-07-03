'use client';

import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html className="absolute inset-0 row z-50">
      <div className="row flex-col gap-12 md:gap-[4.25rem] 2xl:gap-20 !min-w-[15rem]">
        {/* Spinner */}
        <div className="row-h">
          <div className="lds-spinner translate-x-[-2rem] scale-[0.5] md:scale-[0.75] 2xl:scale-[0.9]"><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
        </div>

        {/* Text */}
        <span className="text-md sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-[#1F1F1F]">Still loading...</span>
      </div>
    </Html>
  );
};

export default Loader;
