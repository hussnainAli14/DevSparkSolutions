import Button from "@/app/ui/buttons/Button";
import H2 from "@/app/ui/heading/H2";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row justify-between items-center py-20 ">
        <div className="w-full md:w-1/2 pb-5 md:pb-0 ">
          <H2 color="text-black">
            After graduating, the Joes took different paths,
          </H2>
          <Paragraph>
            JM heading into a marketing agency role focused on web design,
            branding and animation, and JC working on print design and web
            advertising for household names like Kelloggs, Fred Perry and
            Axe/Lynx.
          </Paragraph>
          <Paragraph>
            JM heading into a marketing agency role focused on web design,
            branding and animation, and JC working on print design and web
            advertising for household names like Kelloggs, Fred Perry and
            Axe/Lynx.
          </Paragraph>
          <Button btnText="Start a project" type="primary" />
        </div>

        <Image
          src="/images/journey.webp"
          alt="journey"
          width={400}
          height={300}
          className="md:block hidden"
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Journey;
