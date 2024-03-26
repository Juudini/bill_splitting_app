import Image from 'next/image';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';
import { Button, Link } from '@nextui-org/react';
export default function HeroComponent() {
  return (
    <header id="inicio">
      <section className="flex flex-col items-center justify-center text-start pt-[6rem] xl:pt-[1.4rem] xl:flex-row xl:justify-between xl:items-center">
        <div className="text-center xl:text-start xl:ml-8">
          <p className="text-4xl font-bold mb-4 md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-custom-primary2/25 to-orange-400 xl:text-7xl p-1">
            Welcome to the Bill Splitting Application
          </p>

          <p className="text-2xl text-custom-primary2 md:text-4xl xl:text-5xl">
            Your solution for easy bill splitting
          </p>
          <div className="flex justify-center mt-4 xl:justify-start">
            <Button
              radius="full"
              className="shadow-lg bg-orange-300 text-white px-4 py-2 mb-4 hover:bg-black transition-colors duration-300 ease-in-out"
              variant="flat"
            >
              Start
            </Button>
            <div className="mx-2"></div>

            <Link
              href="https://github.com/Juudini/bill_splitting_app"
              className="shadow-lg bg-orange-300 text-white px-4 py-2 mb-4 hover:bg-black transition-colors duration-300 ease-in-out rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Project
            </Link>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: [null, 1, 1.1] }}
          transition={{ duration: 0.7 }}
          className="mt-8 xl:ml-8"
        >
          <Image
            src="/assets/starman.webp"
            alt="Payment Methods"
            width={350}
            height={350}
            className="px-2 py-[2rem] z-10"
            draggable="false"
          />
        </motion.div>
      </section>
    </header>
  );
}
