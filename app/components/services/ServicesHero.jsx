import { services } from "@/app/lib/data";
import ServiceCard from "@/app/ui/cards/ServiceCard";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const ServicesHero = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center py-20">
        <H1>
          Our <span className="gradient-text"> Services </span>
        </H1>
        <Paragraph
          color="text-white"
          className="text-center w-full md:w-3/4 lg:w-1/2 "
        >
          Focusing on what we’re good at means we can deliver unrivalled quality
          every time. Our services fall into three main buckets — web, systems
          and graphic design. If you’re unsure where your next project would
          sit, give us a call.
        </Paragraph>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 py-10 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              src={service.logo}
              label={service.name}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ServicesHero;
