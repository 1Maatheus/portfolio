"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={"/pic.jpeg"}
              width="768"
              height="1024"
              alt="Matheus portrait"
              className="h-[15rem] w-[15rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Olá, eu sou o{" "}
        <span
          className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500
        "
        >
          Matheus.
        </span>{" "}
        Sou
        <span className="font-bold"> desenvolvedor front-end,</span> com foco em{" "}
        {""}
        <span className="font-bold">React</span>. Cursando{" "}
        <span className="font-bold">Análise e Desenvolvimento de Sistemas</span>
        , apaixonado por tecnologia e games, construindo sites e web apps
        responsivos usando tecnologias como{" "}
        <span className="font-bold">Tailwind, SASS e TypeScript!</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contato");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contate-me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/5 dark:bg-white/10"
          href="/cv-matheus.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer transition hover:text-gray-950  hover:scale-110 border border-black/5 dark:bg-white/10 dark:text-gray-200"
          href="https://www.linkedin.com/in/matheus-oliveira-monteiro-3a5b8925a/"
          target="blank"
        >
          <BsLinkedin className="hover:scale-110" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] transition cursor-pointer hover:text-gray-950 hover:scale-110 border border-black/5 dark:bg-white/10 dark:text-gray-200"
          href="https://github.com/1Maatheus"
          target="blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
