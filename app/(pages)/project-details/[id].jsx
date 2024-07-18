import ImageTextLayout from "@/app/components/projectDetails/ImageTextLayout";
import { projects } from "@/app/lib/data";
import WorkItem from "@/app/ui/global/WorkItem";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Image from "next/image";
import React from "react";

const page = ({ searchParams }) => {
  const idFromSearchParams = parseInt(searchParams.id);
  const projectToShowDetails = projects.filter(
    (project) => project.id === idFromSearchParams
  );
  return (
    <div className="bg-lightGray w-full">
      <div className="bg-black min-h-dvh">
        <MaxWidthWrapper className={" pt-20 md:pt-36 px-5  "}>
          <WorkItem hasButton={false} index={1} el={projectToShowDetails[0]} />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="py-20  ">
        <div className="pb-10 px-5">
          <H1 className="text-center">About the project</H1>
          <Paragraph className="text-center w-full md:w-3/4 m-auto ">
            {projectToShowDetails[0].projectCompanyandTechInfo}
          </Paragraph>
        </div>
        <div className="flex flex-col gap-20">
          {projectToShowDetails[0].extraInfo.map((item, index) => (
            <ImageTextLayout
              text={item.detail}
              image={item.image}
              key={index}
              index={index}
            />
          ))}
        </div>
        <Paragraph className="text-center w-[95%] md:w-3/4 m-auto pt-20 ">
          {projectToShowDetails[0].projectWorking}
        </Paragraph>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
