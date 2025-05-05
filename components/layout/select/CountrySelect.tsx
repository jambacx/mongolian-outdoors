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
  { value: "otgontenger", label: "Otgontenger Mountain" },
  { value: "ulaagchin_khar_nuur", label: "Ulaagchinii Khar Lake" },
  { value: "telmen_lake", label: "Telmen Lake" },
  { value: "bor_khars", label: "Bor Khar Sand Dunes" },
  { value: "tarvagatai_nuruu", label: "Tarvagatai Nuruu National Park" },
  { value: "uliastai", label: "Uliastai City" },
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
