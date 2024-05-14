"use client";
import { categories, priceRanges } from "@/app/lib/data";
import TextField from "@/app/ui/TextField/TextField";
import CategoryTag from "@/app/ui/tags/Categories";
import React, { useState } from "react";
import PriceOptions from "./PriceOptions";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState("");
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedPriceRange = (e, index) => {
    e.preventDefault();
    setSelectedPriceRange(priceRanges[index]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className=" mt-10 p-5 border-[1px] border-solid bg-formGradient border-t-white/50 rounded-xl"
      onSubmit={handleSubmit}
    >
      <p className="text-white text-2xl"> Send a Message </p>
      <div className="pt-10 flex flex-row flex-wrap w-full gap-y-10 gap-x-16">
        <TextField
          value={name}
          setValue={setName}
          placeholder="John Doe"
          label="Full Name"
        />
        <TextField
          value={company}
          setValue={setCompany}
          placeholder="DevSpark Solutions"
          label="Company Name"
        />
        <TextField
          value={email}
          setValue={setEmail}
          placeholder="abc@gmail.com"
          label="Email"
        />
        <TextField
          value={number}
          setValue={setNumber}
          placeholder="+9200330000333"
          label="Number"
        />
      </div>
      <p className="text-white text-normal py-10 ">
        What do you need help with?
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-5 items-start">
        {categories.map((category, index) => (
          <CategoryTag
            name={category}
            key={index}
            index={index}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </div>
      <p className="text-white text-normal py-10 ">
        What is your estimated budget?
      </p>

      <PriceOptions
        priceRange={selectedPriceRange}
        handleOpen={handleOpen}
        hasIcon={true}
        isOpen={isOpen}
        isClickable={false}
      />
      {isOpen && (
        <div>
          {priceRanges.map((el, index) => (
            <PriceOptions
              priceRange={el}
              key={index}
              index={index}
              handleOpen={handleOpen}
              onPriceRangeClick={handleSelectedPriceRange}
              selectedPriceRange={selectedPriceRange}
            />
          ))}
        </div>
      )}
      <p className="text-white text-normal py-10 ">
        Enter your project details?
      </p>
      <textarea
        value={projectDetails}
        onChange={(e) => setProjectDetails(e.target.value)}
        className="w-full rounded-xl border-[1px] border-solid border-white/50 text-darkgrey p-5 min-h-5 bg-transparent "
        placeholder="Enter project details here...."
      />

      <div className="flex flex-col lg:flex-row justify-between items-center py-5">
        <div className="flex flex-col lg:flex-row ">
          <Paragraph
            color="text-white"
            className="flex flex-row gap-3 items-center"
          >
            {" "}
            <MdOutlineMailOutline color="white" size={15} /> hello@phunk.co.uk
          </Paragraph>
          <Paragraph
            color="text-white"
            className="flex flex-row gap-3 items-center"
          >
            {" "}
            <FaPhoneAlt color="white" size={15} /> +923456789
          </Paragraph>
        </div>

        <button
          className="bg-white text-black py-2 cursor-pointer px-5 rounded-full "
          type="submit"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  );
};

export default ContactForm;