import BookCall from "@/app/components/contactus/BookCall";
import Calendar from "@/app/components/contactus/Calendar";
import ContactForm from "@/app/components/contactus/ContactForm";
import Review from "@/app/components/home/Review";
import H1 from "@/app/ui/heading/H1";
import MaxWidthWrapper from "@/app/ui/layout/MaxWidthWrapper";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";

const page = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="pt-20 px-5 md:px-20 ">
          <H1 className="text-center ">
            Talk to <span className="gradient-text ">Dev Spark Solutions.</span>
          </H1>
          <Paragraph py="py-7" className="text-center">
            Focusing on what we’re good at means we can deliver unrivalled
            quality every time. Our services fall into three main buckets — web,
            systems and graphic design. If you’re unsure where your next project
            would sit, give us a call.
          </Paragraph>
          <BookCall />
          <ContactForm />
        </div>
      </MaxWidthWrapper>

      <div className="w-full px-5 md:px-20 ">
        <Review py="py-0" pt={"pt-32"} />
      </div>
    </>
  );
};

export default page;
