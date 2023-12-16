"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Sou apaixonado por transformar ideias criativas em experiências
        digitais. Sou desenvolvedor front-end dedicado com conhecimento em
        tecnologias web modernas. Possuo conhecimentos em{" "}
        <span className="font-bold">
          React (Next.js), JavaScript e TypeScript
        </span>
        . Estou sempre atento às últimas atualizações e melhores práticas do
        desenvolvimento front-end, e estou pronto para contribuir de maneira
        significativa para o sucesso do seu time. Se você está em busca de um
        desenvolvedor front-end{" "}
        <span className="font-medium">
          apaixonado por inovação e comprometido com a entrega de produtos de
          alta qualidade
        </span>
        , ficarei feliz em discutir como minhas habilidades podem agregar valor
        à sua equipe. <span className="font-bold">Vamos juntos!</span>
      </p>
    </motion.section>
  );
}
