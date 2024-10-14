import { propertyTypeList } from "@/config/typeOfPropertyOptions";
import { Label } from "./ui/label";

type TypesOfPropertyOptionsProps = {
  setTypeOfProperty: (
    type:
      | "Apartment"
      | "House"
      | "Condominium"
      | "Commercial Property"
      | "Land"
      | "Office Space"
  ) => void;
  type:
    | "Apartment"
    | "House"
    | "Condominium"
    | "Commercial Property"
    | "Land"
    | "Office Space";
};

function TypesOfPropertyOptions({
  setTypeOfProperty,type
}: TypesOfPropertyOptionsProps) {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold">Type of Property:</h2>
      {propertyTypeList.map((item, index) => {
        return (
          <div key={index} className="text-lg">
            <input
              type="radio"
              className="mr-3"
              checked={type === item}
              value={item}
              onChange={(e) => {
                setTypeOfProperty(
                  e.target.value as
                    | "Apartment"
                    | "House"
                    | "Condominium"
                    | "Commercial Property"
                    | "Land"
                    | "Office Space"
                );
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
