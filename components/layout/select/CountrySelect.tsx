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
  { value: "", label: "Your city or Region" },
  { value: "australia", label: "Australia" },
  { value: "india", label: "India" },
  { value: "italy", label: "Italy" },
  { value: "japan", label: "Japan" },
];

const CountrySelect = () => {
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
      id="match-t"
      instanceId="match-t"
      className="single-select w-100"
      classNamePrefix="cs-select"
    />
  );
};

export default CountrySelect;
