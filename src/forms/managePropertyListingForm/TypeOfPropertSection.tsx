import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { propertyTypeList } from "@/config/typeOfPropertyOptions";
import { ListingPropertyFormData } from "@/zod";
import { useFormContext } from "react-hook-form";

function TypeOfPropertSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<ListingPropertyFormData>();
  const selectedPropertyType = watch("propertyType");
  return (
    <div className="my-3">
      <h1 className="font-bold text-3xl my-3 ">
        Select Property Type{" "}
        <span className="text-sm font-semibold">(choose 1 option)</span>
      </h1>
      <div className="flex gap-6 items-center  mx-9 flex-wrap my-5">
        {propertyTypeList.map((item, index) => {
          return (
            <Label key={index} className="flex items-center gap-2">
              <input
                {...register("propertyType")}
                type="radio"
                id={`property-type-${index}`}
                name="propertyType"
                value={item}
                checked={selectedPropertyType === item}
                className="h-4 w-4"
              />
              {item}
            </Label>
          );
        })}
      </div>
      {errors.propertyType && (
        <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
          {errors.propertyType.message}
        </p>
      )}
      <Separator/>
    </div>
  );
}

export default TypeOfPropertSection;
