"use client";
import React from "react";

const TextField = ({
  value,
  setValue,
  label,
  placeholder,
  name,
  required = false,
}) => {
  return (
    <div className="relative w-full md:w-[40%]">
      <label className="block text-white/80">
        {label} {required && "*"}{" "}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        placeholder={placeholder}
        className={`block w-full border-b-2 border-b-white/50 focus:outline-none focus:border-b-turquoise bg-transparent text-darkgrey placeholder:text-darkgrey/50 py-2 px-3`}
      />
    </div>
  );
};

export default TextField;
