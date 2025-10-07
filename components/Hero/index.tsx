"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0A1A2B] via-[#0D2A4B] to-[#12345E] pb-20 pt-28 md:pt-32 xl:pb-28 xl:pt-36">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/brand/2.jpg"
          alt="SaaS Technology"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay to make text visible */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex h-[50vh] md:h-[55vh] flex-col justify-center items-center text-center">
          {/* Subtitle from left */}
          <motion.h4
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
            className="mb-4 text-lg font-medium text-gray-200"
          >
            Smart Solutions for a Smarter World
          </motion.h4>

          {/* Title from right */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
            className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl md:leading-[70px] lg:text-6xl"
          >
            Innovating Solutions, Transforming <br className="hidden lg:block" />
            <span className="relative text-orange-400">
              Real-World Challenges
            </span>
          </motion.h1>

          {/* Paragraph from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
          >
            <p className="mb-8 max-w-xl text-gray-200 mx-auto">
              Empowering industries through innovative technologies, creativity, and forward-thinking solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
