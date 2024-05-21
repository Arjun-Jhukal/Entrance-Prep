import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="max-w-screen min-h-screen flex justify-center items-center">
      <div className="container">
        <div className="text-center">
          <Image
            src={"/pageNotFound.jpg"}
            alt="404 Page Not Found Placeholder Image"
            width={1400}
            height={933}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
            className="md:hidden max-h-[250px] max-w-[250px] object-cover mx-auto"
          />
          <h3 className="hidden md:block text-[24px] uppercase text-gray-700">Error !</h3>

          <h1 className="md:text-[180px] text-[120px] font-bold text-purple-600 ">404</h1>
          <h3 className="text-[24px] uppercase text-gray-700">Page Not Found</h3>
          <p className="pb-6 pt-4 capitalize text-gray-600">The Page You are trying to access might be moved to some other location or deleted.</p>
          <Link href={"/"} className="bg-purple-500 px-8 py-2 uppercase inline-block text-white font-bold">
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
}
