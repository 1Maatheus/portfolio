import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import bikcraftImg from "@/public/bikcraft.png";
import cepImg from "@/public/cep.png";
import convertorImg from "@/public/convertor.png";
import landing_pageImg from "@/public/landing-page.png";
import meowLandingPageImg from "@/public/meow-landing-page.png";
import pokedexImg from "@/public/pokedex.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Cursos",
    hash: "#courses",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp Santander DIO JAVA + Angular",
    description:
      "Bootcamp realizado pela Digital Innovation One em parceria com o Santander, com foco em JAVA e Angular, com duração de 2 meses.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "TypeScript",
    description:
      "Curso de TypeScript realizado na Udemy, com foco em desenvolvimento web com React e Next.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "SASS",
    description:
      "Curso de SASS realizado na Origamid, com projetos práticos e foco em desenvolvimento web responsivo.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Git e Github",
    description:
      "Curso realizado na OneBitCode, voltado à versionamento de código com Git e Github.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Javascript",
    description:
      "Curso com foco em Javascript realizado na OneBitCode, realizando projetos práticos e aprendendo conceitos fundamentais da linguagem, como: variáveis, funções, objetos, arrays, manipulação do DOM, etc.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Bikcraft",
    description:
      "Projeto desenvolvido com a plataforma Origamid, site construído com HTML, CSS e Javascript, totalmente responsivo.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: bikcraftImg,
    pageLink: "https://1maatheus.github.io/Bikcraft/",
  },
  {
    title: "Buscador CEP",
    description:
      "Buscador de CEP, consumindo uma api pública. O usuário pode pesquisar por um CEP e ver os dados referentes ao mesmo.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: cepImg,
    pageLink: "https://1maatheus.github.io/buscador-cep/",
  },
  {
    title: "Conversor de EM para PX",
    description:
      "Um app que converte valores de EM para PX e vice-versa. O usuário pode escolher o valor base para a conversão. Muito útil para o desenvolvimento de sites responsivos, ",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: convertorImg,
    pageLink: "https://1maatheus.github.io/conversor-px-to-em/",
  },
  {
    title: "Landing Page",
    description:
      "Landing page, projeto realizado através de um desafio da frontendmentor.io, onde é desenvolvido um site responsivo com HTML e CSS.",
    tags: ["HTML", "CSS"],
    imageUrl: landing_pageImg,
    pageLink: "https://1maatheus.github.io/costumer-rating/",
  },
  {
    title: "Café Landing Page",
    description:
      "Projeto de uma landing page de um café, realizado através de um desafio da Codante.io",
    tags: ["HTML", "CSS"],
    imageUrl: meowLandingPageImg,
    pageLink: "https://1maatheus.github.io/meow-cafe-landing-page/",
  },
  {
    title: "Pokedex ",
    description:
      "Projeto clássico de uma pokedex. O usuário pode pesquisar por pokemons e ver detalhes de cada um junto à uma imagem do pokemon.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: pokedexImg,
    pageLink: "https://1maatheus.github.io/pokedex-js-vanilla/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SASS",
  "Framer Motion",
] as const;
