import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <main className=" flex min-h-screen flex-col items-center p-24">
      <div className="relative flex  place-items-center mb-10">
        <Image
          src="/images/deversify_-removebg.png"
          width={380}
          height={40}
          alt="logo"
        />
      </div>
      <div className="text-center font-semibold">Page not found!</div>
    </main>
  );
};

export default NotFound;
