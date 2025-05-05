"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import type { SingleValue } from "react-select";
import type { GroupBase } from "react-select";
import type { CreatableProps } from "react-select/creatable";

type OptionType = {
  value: string;
  label: string;
};

const CreatableSelect = dynamic<
  CreatableProps<OptionType, false, GroupBase<OptionType>>
>(() => import("react-select/creatable"), { ssr: false });

const options: OptionType[] = [
  { value: "", label: "Choose Activity" },
  { value: "activity-01", label: "Activity 01" },
  { value: "activity-02", label: "Activity 02" },
  { value: "activity-03", label: "Activity 03" },
];

const ActivitySelect = () => {
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
      id="match-th"
      instanceId="match-th"
      className="single-select w-100"
      classNamePrefix="cs-select"
    />
  );
};

export default ActivitySelect;
