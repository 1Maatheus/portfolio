"use client";

import React from "react";
import SectionHeading from "./Section-Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mt-20 sm:mt-0 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Atualmente cursando{" "}
        <span className="font-bold">Análise e Desenvolvimento de Sistemas</span>
        , sou apaixonado por tecnlogia e programação. Sou desenvolvedor
        front-end, com conhecimento em tecnologias web modernas. Possuo
        conhecimentos em{" "}
        <span className="font-bold">
          React, Next.js, JavaScript e TypeScript
        </span>
        . Estou sempre buscando construir projetos com boas práticas e estudo as
        documentações das tecnologias que uso atualmente, para sempre melhorar
        como desenvolvedor front-end. Me sinto pronto para contribuir de maneira
        significativa para o sucesso do seu time. Se você está em busca de um
        desenvolvedor front-end{" "}
        <span className="font-medium">
          apaixonado por inovação e comprometido com a entrega de produtos de
          alta qualidade
        </span>
        , ficarei feliz em discutir como minhas habilidades podem agregar valor
        à sua equipe!
      </p>
    </motion.section>
  );
}
