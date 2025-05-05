"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import type { SingleValue, GroupBase } from "react-select";
import type { CreatableProps } from "react-select/creatable";

type OptionType = {
  value: string;
  label: string;
};

const CreatableSelect = dynamic<
  CreatableProps<OptionType, false, GroupBase<OptionType>>
>(() => import("react-select/creatable"), { ssr: false });

const options: OptionType[] = [
  { value: "", label: "Your Guest" },
  { value: "guest-01", label: "Guest 01" },
  { value: "guest-02", label: "Guest 02" },
  { value: "guest-03", label: "Guest 03" },
];

const GuestSelect = () => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(
    options[0]
  );

  const handleChange = (newValue: SingleValue<OptionType>) => {
    setSelectedOption(newValue);
  };

  return (
    <CreatableSelect
      value={selectedOption}
      onChange={handleChange}
      options={options}
      id="match-o"
      instanceId="match-o"
      className="single-select w-100"
      classNamePrefix="cs-select"
    />
  );
};

export default GuestSelect;
