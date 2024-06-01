"use client";
import { categories, priceRanges } from "@/app/lib/data";
import TextField from "@/app/ui/TextField/TextField";
import CategoryTag from "@/app/ui/tags/Categories";
import React, { useState } from "react";
import PriceOptions from "./PriceOptions";
import Paragraph from "@/app/ui/paragraph/Paragraph";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      selectedItems.length > 0 &&
      selectedPriceRange.length > 0
    ) {
      const formData = {
        senderName: name,
        companyName: company,
        email: email,
        phoneNumber: number,
        services: selectedItems,
        priceRange: selectedPriceRange,
        description: projectDetails,
      };
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        toast.success("We recieved your request. We'll get back to you soon");
      } else {
        toast.error("There was an error submitting you request. Try Again!");
      }
    } else {
      toast.error(
        "Please fill all the required fields! Required fields have * with them."
      );
    }
  };
  return (
    <>
      <Toaster />
      <form
        className=" mt-10 p-5 border-[1px] border-solid bg-formGradient border-t-white/50 rounded-xl"
        onSubmit={handleSubmit}
      >
        <p className="text-white text-2xl"> Send a Message </p>
        <div className="pt-10 flex flex-row flex-wrap w-full gap-y-10 gap-x-16">
          <TextField
            value={name}
            setValue={setName}
            name="name"
            placeholder="John Doe"
            label="Full Name"
            required={true}
          />
          <TextField
            value={company}
            setValue={setCompany}
            name="companyName"
            placeholder="DevCrew"
            label="Company Name"
          />
          <TextField
            value={email}
            setValue={setEmail}
            name="email"
            placeholder="abc@gmail.com"
            label="Email"
            required={true}
          />
          <TextField
            value={number}
            setValue={setNumber}
            name="number"
            placeholder="+9200330000333"
            label="Number"
          />
        </div>
        <p className="text-white text-normal py-10 ">
          What do you need help with? *
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-5 items-start">
          {categories.map((category, index) => (
            <CategoryTag
              name={category}
              key={category}
              index={index}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          ))}
        </div>
        <p className="text-white text-normal py-10 ">
          What is your estimated budget? *
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
          placeholder="Small Overview of project..."
          name="projectDetails"
        />

        <div className="flex flex-col lg:flex-row justify-between items-center py-5">
          <div className="flex flex-col lg:flex-row lg:gap-10 ">
            <Paragraph
              color="text-white"
              className="flex flex-row gap-3 items-center"
            >
              {" "}
              <MdOutlineMailOutline color="white" size={15} />{" "}
              contact@devcrew.tech
            </Paragraph>
            <Paragraph
              color="text-white"
              className="flex flex-row gap-3 items-center"
            >
              {" "}
              <FaPhoneAlt color="white" size={15} /> +923005258887
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
    </>
  );
};

export default ContactForm;
