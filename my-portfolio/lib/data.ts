import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNpm,
  SiStyledcomponents,
  SiVisualstudiocode,
  SiPhp,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import bikcraftImg from "@/public/bikcraft.png";
import convertorImg from "@/public/convertor.png";
import meowLandingPageImg from "@/public/meow-landing-page.png";
import pokedexImg from "@/public/pokedex.png";
import dogsImg from "@/public/dogs.png";
import weatherImg from "@/public/weather.png";

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
    title: "React Completo",
    description:
      "Curso de React realizado na Origamid, com projeto prático de uma rede social de cachorros para fixação de conteúdo.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "TypeScript",
    description:
      "Curso de TypeScript realizado na Origamid. Com projetos práticos e aprendizagem completa contendo types, interfaces, classes, typeguard, generics e etc.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Next.JS",
    description: "Curso com foco em Next.JS realizado na plataforma Udemy.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
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
    title: "Dogs - Social Media",
    description:
      "Rede social para cachorros, criado com React. Aplicação completa, com criação de conta, upload de imagem e possibilidade de comentários nas postagens!",
    tags: ["React", "Typescript"],
    imageUrl: dogsImg,
    pageLink: "https://socialmedia-dogs.vercel.app/",
  },
  {
    title: "Conversor de EM para PX",
    description:
      "Um app que converte valores de EM para PX e vice-versa. O usuário pode escolher o valor base para a conversão.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: convertorImg,
    pageLink: "https://1maatheus.github.io/conversor-px-to-em/",
  },
  {
    title: "Weather App",
    description:
      "Aplicação de previsão do tempo. O usuário pode pesquisar por cidades e ver a previsão do tempo atual e futura.",
    tags: ["Next.JS", "TypeScript", "Tailwind"],
    imageUrl: weatherImg,
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
  React.createElement(IoLogoJavascript),
  React.createElement(SiTypescript),
  React.createElement(SiPhp),
  React.createElement(FaReact),
  React.createElement(SiNextdotjs),
  React.createElement(FaNodeJs),
  React.createElement(FaGitAlt),
  React.createElement(SiNpm),
  React.createElement(SiVisualstudiocode),
  React.createElement(FaHtml5),
  React.createElement(FaCss3Alt),
  React.createElement(SiTailwindcss),
  React.createElement(FaSass),
  React.createElement(FaBootstrap),
  React.createElement(SiStyledcomponents),
  React.createElement(TbBrandFramerMotion),
] as const;
