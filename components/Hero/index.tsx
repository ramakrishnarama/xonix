"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#FFFBF2] via-[#FFF5D9] to-[#FFEAB3] pb-28 pt-36 md:pt-44 xl:pb-36 xl:pt-52">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src="/images/brand/3409297.jpg"
          alt="SaaS Technology"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-25"
        />
        {/* Add more images as needed */}
      </div>

      {/* Gentle gradient overlay for balance */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-orange-50/60 z-0" />

      {/* Glow orbs */}
      <div className="absolute -top-32 -left-40 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex h-[60vh] flex-col justify-center items-center text-center">
          {/* Subtitle from left */}
          <motion.h4
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
            className="mb-4 text-lg font-medium text-gray-700"
          >
            Smart Solutions for a Smarter World
          </motion.h4>

          {/* Title from right */}
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
            className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl md:leading-[80px]"
          >
            Innovating Solutions, Transforming <br className="hidden lg:block" />
            <span className="relative text-orange-500">
              Real-World Challenges
            </span>
          </motion.h1>

          {/* Paragraph from left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
          >
            <p className="mb-8 max-w-xl text-gray-700 mx-auto">
              Empowering industries through innovative technologies, creativity, and forward-thinking solutions.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
