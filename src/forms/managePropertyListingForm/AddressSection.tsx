import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ListingPropertyFormData } from "@/zod";
import { TriangleAlert } from "lucide-react";
import { useFormContext } from "react-hook-form";

function AddressSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ListingPropertyFormData>();
  return (
    <div className="gap-4 flex flex-col">
      <h1 className="font-bold text-3xl mt-5 mb-3">Location Details</h1>
      <Label>
        Address Line 1
        <Input
          {...register("addressLine1")}
          placeholder="23-2 Street name"
          className="border-green-600 mt-2 py-1 px-2 bg-slate"
          type="text"
        />
        {errors.addressLine1 && (
          <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
            <TriangleAlert size={18} /> {errors.addressLine1.message}
          </p>
        )}
      </Label>
      <Label>
        Address Line 2
        <Input
          {...register("addressLine2")}
          placeholder="23-2 Street name"
          className="border-green-600 mt-2 py-1 px-2 bg-slate"
          type="text"
        />
        {errors.addressLine2 && (
          <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
            <TriangleAlert size={18} /> {errors.addressLine2.message}
          </p>
        )}
      </Label>
      <div className="flex gap-3">
        <Label className="flex-1">
          City
          <Input
            {...register("city")}
            type="text"
            placeholder="City"
            className="border-green-600 mt-2 py-1 px-2 bg-slate"
          />
          {errors.city && (
            <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
              <TriangleAlert size={18} /> {errors.city.message}
            </p>
          )}
        </Label>
        <Label className="flex-1">
          State
          <Input
            {...register("state")}
            type="text"
            placeholder="State"
            className="border-green-600 mt-2 py-1 px-2 bg-slate"
          />
          {errors.state && (
            <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
              <TriangleAlert size={18} /> {errors.state.message}
            </p>
          )}
        </Label>
      </div>
      <div className="flex gap-3">
        <Label className="flex-1">
          Country
          <Input
            {...register("country")}
            type="text"
            placeholder="Country"
            className="border-green-600 mt-2 py-1 px-2 bg-slate"
          />
          {errors.country && (
            <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
              <TriangleAlert size={18} /> {errors.country.message}
            </p>
          )}
        </Label>
        <Label className="flex-1">
          Postal Code
          <Input
            {...register("postalCode")}
            type="text"
            placeholder="1A1 A1A"
            className="border-green-600 mt-2 py-1 px-2 bg-slate"
          />
          {errors.postalCode && (
            <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
              <TriangleAlert size={18} /> {errors.postalCode.message}
            </p>
          )}
        </Label>
      </div>

      <Separator />
    </div>
  );
}

export default AddressSection;
