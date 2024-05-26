import Button from "@/app/ui/buttons/Button";
import H2 from "@/app/ui/heading/H2";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import Image from "next/image";
import React from "react";
import MotionDiv from "../../motionContainers/MotionDiv";
import { fadeInLeftVariant, fadeInRightVariant } from "@/app/lib/variants";

const Journey = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row justify-between items-center py-20 ">
        <MotionDiv
          variants={fadeInLeftVariant}
          className="w-full md:w-1/2 pb-5 md:pb-0 "
        >
          <H2 color="text-black">
            Our journey began at university, where a passion for learning and
            building projects took root.
          </H2>
          <Paragraph>
            It was during this time that we started taking on projects
            outsourced to us, honing our skills and gaining valuable
            experience.As our expertise grew, we ventured onto UpWork, eager to
            take on new challenges and expand our portfolio. The platform
            provided us with opportunities to work on diverse projects, and we
            quickly established a reputation for delivering high-quality work.
            Our dedication and skill paid off, and we proudly earned more than
            $7,000 through UpWork.
          </Paragraph>
          <Paragraph>
            Fueled by our success and a desire to create something of our own,
            we founded our own startup. This was a significant milestone in our
            journey, marking the transition from freelancers to entrepreneurs.
            Over the years, we have had the privilege of working with multiple
            companies, each project adding to our wealth of experience and
            knowledge. We always strive to give our best, ensuring that every
            client is satisfied with the results.
          </Paragraph>
          <Button btnText="Start a project" type="primary" />
        </MotionDiv>
        <MotionDiv variants={fadeInRightVariant}>
          <Image
            src="/images/journey.webp"
            alt="journey"
            width={400}
            height={300}
            className="md:block hidden"
          />
        </MotionDiv>
      </div>
    </MaxWidthWrapper>
  );
};

export default Journey;
