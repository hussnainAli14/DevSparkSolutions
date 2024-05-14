import React from "react";

const CategoryTag = ({ name, setSelectedItems, index, selectedItems }) => {
  const isItemSelected = selectedItems.find((x) => x === index);
  const handleSelect = () => {
    if (isItemSelected) {
      const filteredState = selectedItems.filter((x) => x !== index);
      setSelectedItems(filteredState);
      console.log(selectedItems);
    } else if (!isItemSelected) {
      setSelectedItems((state) => [...state, index]);
    }
  };
  return (
    <p
      className={`rounded-full py-2 px-4 text-center text-white border-[1px] border-solid w-fit border-white cursor-pointer ${
        isItemSelected && "bg-royalblue"
      }`}
      onClick={handleSelect}
    >
      {name}
    </p>
  );
};

export default CategoryTag;
