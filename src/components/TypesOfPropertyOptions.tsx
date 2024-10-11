import { propertyTypeList } from "@/config/typeOfPropertyOptions";
import { Label } from "./ui/label";
import { useState } from "react";

function TypesOfPropertyOptions() {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="flex flex-col">
      <h2 className="font-bold">Type of Property:</h2>
      {propertyTypeList.map((item, index) => {
        return (
          <div key={index} className="text-lg">
            <input
              type="radio"
              className="mr-3"
              checked={selectedItem === item}
              value={item}
              onChange={(e) => {
                setSelectedItem(e.target.value);
              }}
            />
            <Label className="">{item}</Label>
          </div>
        );
      })}
    </div>
  );
}

export default TypesOfPropertyOptions;
