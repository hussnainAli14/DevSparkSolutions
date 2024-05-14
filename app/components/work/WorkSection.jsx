import { projects } from "@/app/lib/data";
import WorkCard from "@/app/ui/cards/WorkCard";
import React from "react";

const WorkSection = () => {
  return (
    <div className="pt-32 flex flex-row flex-wrap gap-10 ">
      {projects.map((project, index) => (
        <WorkCard
          images={project.images}
          tags={project.tags}
          projectDesc={project.projectDesc}
          projectName={project.projectName}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default WorkSection;
