import React from "react";
import SectionHeading from "./Section-Heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projetos</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
