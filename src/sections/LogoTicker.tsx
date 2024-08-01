"use client";

import acmelogo from "../assets/logo-acme.png";
import qauntumlogo from "../assets/logo-quantum.png";
import echologo from "../assets/logo-echo.png";
import celestiallogo from "../assets/logo-celestial.png";
import apexlogo from "../assets/logo-apex.png";
import pulselogo from "../assets/logo-pulse.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={acmelogo} alt="logo" className="logo-ticker-image" />
            <Image src={qauntumlogo} alt="logo" className="logo-ticker-image" />
            <Image src={echologo} alt="logo" className="logo-ticker-image" />
            <Image
              src={celestiallogo}
              alt="logo"
              className="logo-ticker-image"
            />
            <Image src={apexlogo} alt="logo" className="logo-ticker-image" />
            <Image src={pulselogo} alt="logo" className="logo-ticker-image" />

            <Image src={acmelogo} alt="logo" className="logo-ticker-image" />
            <Image src={qauntumlogo} alt="logo" className="logo-ticker-image" />
            <Image src={echologo} alt="logo" className="logo-ticker-image" />
            <Image
              src={celestiallogo}
              alt="logo"
              className="logo-ticker-image"
            />
            <Image src={apexlogo} alt="logo" className="logo-ticker-image" />
            <Image src={pulselogo} alt="logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
