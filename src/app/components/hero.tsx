import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Empowering the Future of Education</h1>
        <p className="text-xl mb-6">
          Harnessing advanced technologies to revolutionize learning experiences for students worldwide.
        </p>
        <a
          href="#solutions"
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Explore Our Solutions
        </a>
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-opacity-30 bg-cover"
        style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}
      ></div>
    </section>
  );
};

export default Hero;
