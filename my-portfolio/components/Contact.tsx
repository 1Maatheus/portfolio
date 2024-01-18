"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contato", 0.3);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contato</SectionHeading>

      <div>
        <ul className="flex flex-wrap justify-center gap-2 text-[2.5rem] text-gray-800 ">
          <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            <a href="mailto:matheusoliveira7227@gmail.com" target="_blank">
              <SiGmail />
            </a>
          </li>
          <li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
            <a
              href="https://api.whatsapp.com/send?phone=5511961264121"
              target="_blank"
            >
              <FaWhatsappSquare />
            </a>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
