import { footerData } from "@/app/lib/data";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import React from "react";
import FooterItem from "./FooterItem";

const RightSection = () => {
  return (
    <div className="flex flex-nowrap flex-row  ">
      {footerData.map((item, index) => (
        <div className="flex flex-col w-full md:w-3/4 gap-5 " key={index}>
          {/* <div> */}
          <Paragraph
            py="py-0"
            color="text-royalblue"
            className="text-lg font-bold"
          >
            {item.heading}
          </Paragraph>
          {/* </div> */}
          {/* <div> */}
          <FooterItem subItems={item.subItems} />
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default RightSection;
