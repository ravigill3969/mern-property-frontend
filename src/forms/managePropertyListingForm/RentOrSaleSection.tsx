import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ListingPropertyFormData } from "@/zod";
import { useFormContext } from "react-hook-form";

function RentOrSaleSection() {
  const {
    register,
    formState: { errors },
 
  } = useFormContext<ListingPropertyFormData>();
  return (
    <div className="flex flex-col  gap-5 ">
      <h1 className="font-bold text-3xl mt-5 mb-3">Select One</h1>
      <div className="flex gap-5 ml-9">
        <Label className="flex gap-2">
          <input
            {...register("rentOrSale")}
            className="h-4 w-4"
            type="radio"
            value={"rent"}
          />
          Rent
        </Label>
        <Label className="flex gap-2">
          <input
            {...register("rentOrSale")}
            type="radio"
            className="h-4 w-4"
            value="sale"
          />
          For sale
        </Label>
      </div>
      {errors.rentOrSale && (
        <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
          {errors.rentOrSale.message}
        </p>
      )}
      <Separator/>
    </div>
  );
}

export default RentOrSaleSection;
