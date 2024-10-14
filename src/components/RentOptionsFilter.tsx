import { rentOptions } from "@/config/allFiltersOption";
import { Label } from "./ui/label";

type RentOptionsFilterProps = {
  setRent: (rent: number) => void;
  setParkingAvailability: (parking: boolean) => void;
  setFurnished: (furnished: boolean) => void;
  setUtilities: (utilities: boolean) => void;
  setMoveInDate: (date: Date) => void;
  furnished: boolean;
  parking: boolean;
  utilities: boolean;
};

function RentOptionsFilter({
  setRent,
  setParkingAvailability,
  setFurnished,
  setUtilities,
  setMoveInDate,
  furnished,
  parking,
  utilities,
}: RentOptionsFilterProps) {
  const handleChange = (
    itemTitle: string,
    type: string,
    value: boolean | string
  ) => {
    if (type === "checkbox") {
      switch (itemTitle) {
        case "Parking":
          setParkingAvailability(value as boolean);
          break;
        case "Furnished":
          setFurnished(value as boolean);
          break;
        case "Utilities":
          setUtilities(value as boolean);
          break;
      }
    } else if (type === "number") {
      setRent(Number(value));
    } else if (type === "date") {
      setMoveInDate(new Date(value as string));
    }
  };

  return (
    <div className="flex flex-col my-3">
      <h2 className="font-bold mb-2">Rent Options</h2>
      {rentOptions.map((item, index) => {
        const isChecked =
          item.title === "Parking"
            ? parking
            : item.title === "Furnished"
            ? furnished
            : item.title === "Utilities"
            ? utilities
            : false;

        return (
          <div key={index} className="text-lg">
            <input
              type={item.type}
              className={`mr-3 border-2 my-1 ${item.classNameForInput}`}
              placeholder={item.placeholder}
              checked={item.type === "checkbox" ? isChecked : undefined}
              onChange={(e) =>
                handleChange(
                  item.title,
                  item.type,
                  item.type === "checkbox" ? e.target.checked : e.target.value
                )
              }
            />
            <Label className={item.className}>{item.title}</Label>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default RentOptionsFilter;
