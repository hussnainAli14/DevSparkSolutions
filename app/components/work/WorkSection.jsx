import { projects } from "@/app/lib/data";
import WorkCard from "@/app/ui/cards/WorkCard";
import React from "react";

const WorkSection = () => {
  return (
    <div className="pt-32 flex flex-row flex-wrap justify-center items-center md:items-start gap-x-0 sm:gap-x-10 gap-y-10 sm:gap-y-0 w-full m-auto ">
      {projects.map((project, index) => (
        <WorkCard
          images={project.images}
          tags={project.tags}
          projectDesc={project.projectDesc}
          projectName={project.projectName}
          index={index}
          key={index}
          id={project.id}
        />
      ))}
    </div>
  );
};

export default WorkSection;
