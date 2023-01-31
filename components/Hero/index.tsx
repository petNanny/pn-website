import React from "react";
import Image from "next/image";
// import heroBg from "../../public/hero-1-bg-img.png";
import heroImg from "../../images/dog.jpg";
const Hero = () => {
  return (
    <section className="bg-[url('/hero-1-bg-img.png')]">
      <div className="flex flex-col md:flex-row lg:flex-row items-center min-w-[390px] max-w-6xl mx-auto my-6">
        <div className="w-4/5 md:w-2/5 mr-4 md:mr-20 ml-4">
          <h1 className="text-[36px] md:text-[52px] text-[#3b3950] font-medium mb-6  drop-shadow-lg">
            Pet Nanny
          </h1>
          <p className="text-[17px] text-[#9e9cb9] mb-6">
            Pet sitting at your home Home visits for while you are away
          </p>
          <p className="text-[17px] text-[#9e9cb9] mb-10">
            A qualified pet sitter will drop-in and visit your home to spend some one-on-one time
            with your pet. Pet sitting services are suitable for all types of pets who would feel
            more comfortable in their own environment. Pet care at home is a safer and less
            stressful choice for all pet types than a commercial pet hotel.
          </p>
          <button className="bg-[#5a4fdc] text-white text-[15px] px-6 py-3 cursor-pointer rounded-md hover:shadow-lg hover:-translate-y-1 transition duration-700 ease-in-out ">
            Contact Us
          </button>
        </div>
        <div className=" w-4/5 md:w-1/2 mt-24">
          <Image alt="Hero Image" className="mx-auto" src={heroImg} width={546} height={682} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
