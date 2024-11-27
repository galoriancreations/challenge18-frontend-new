import React from "react";
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <section className=" relative min-h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="/images/hero image.webp"
        alt="hero image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0 opacity-80"
      />
      <div className="container relative z-10 py-16  text-gray-800 mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          <span className="text-4xl">Ting Global</span>
          <br /> Cultivating an Evolving Education Ecosystem
        </h1>
        <p className="text-xl mb-6">Harnessing advanced technologies to revolutionize education worldwide.</p>
        <a
          href="#solutions"
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Explore Our Solutions
        </a>
      </div>
    </section>
  );
};

export default Hero;
