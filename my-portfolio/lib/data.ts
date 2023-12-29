import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Bikcraft",
    description:
      "Projeto desenvolvido com a plataforma Origamid, site construído com HTML, CSS e Javascript, totalmente responsivo.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: bikcraftImg,
  },
  {
    title: "Buscador CEP",
    description:
      "Buscador de CEP, consumindo uma api pública. O usuário pode pesquisar por um CEP e ver os dados referentes ao mesmo.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: cepImg,
  },
  {
    title: "Conversor de EM para PX",
    description:
      "Um app que converte valores de EM para PX e vice-versa. O usuário pode escolher o valor base para a conversão. Muito útil para o desenvolvimento de sites responsivos, ",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: convertorImg,
  },
  {
    title: "Landing Page",
    description:
      "Landing page, projeto realizado através de um desafio da frontendmentor.io, onde é desenvolvido um site responsivo com HTML e CSS.",
    tags: ["HTML", "CSS"],
    imageUrl: landing_pageImg,
  },
  {
    title: "Café Landing Page",
    description:
      "Projeto de uma landing page de um café, realizado através de um desafio da Codante.io",
    tags: ["HTML", "CSS"],
    imageUrl: meowLandingPageImg,
  },
  {
    title: "Pokedex ",
    description:
      "Projeto clássico de uma pokedex. O usuário pode pesquisar por pokemons e ver detalhes de cada um junto à uma imagem do pokemon.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: pokedexImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
