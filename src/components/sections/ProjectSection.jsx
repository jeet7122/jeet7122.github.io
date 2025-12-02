// src/components/sections/ProjectsSection.jsx
import { useState } from "react";
import { projects }  from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModel";
import ContentSection from "../layout/ContentSection"; // if you already have this wrapper

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <ContentSection id="projects" title="Shipped Projects" className="bg-gray-950">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </ContentSection>
  );
}
