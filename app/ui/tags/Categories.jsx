import React from "react";

const CategoryTag = ({ name, setSelectedItems, index, selectedItems }) => {
  const isItemSelected = selectedItems.some((item) => item.index === index);

  const handleSelect = () => {
    if (isItemSelected) {
      const filteredState = selectedItems.filter((x) => x.index !== index);
      setSelectedItems(filteredState);
    } else if (!isItemSelected) {
      setSelectedItems((state) => [...state, { index: index, name: name }]);
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
