import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ListingPropertyFormData } from "@/zod";
import { Cross1Icon } from "@radix-ui/react-icons";
import { TriangleAlert } from "lucide-react";
import { useFormContext } from "react-hook-form";

type Props = {
  data?: string[]; // Array of image URLs, can be undefined
};

function ImageSection({ data = [] }: Props) {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ListingPropertyFormData>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 6) {
      e.target.value = ""; // Reset the input if more than 6 files are selected
      setValue("images", []); // Clear the images in the form state

      alert("You can only upload a maximum of 6 images.");
      return;
    }
    setValue("images", files); // Set the selected files to form state as an array
  };

  const handleRemoveImage = (index: number) => {
    const currentImages = getValues("images") || data; // Get the current images from form state or prop
    const updatedImages = currentImages.filter((_, i) => i !== index); // Remove the clicked image by index
    setValue("images", updatedImages); // Update the form state with the new array
  };

  return (
    <div className="mt-7">
      <h1 className="font-bold text-3xl my-3 ">
        Image Upload
        <span className="text-sm font-semibold"> (Max 6)</span>
      </h1>
      <div className="grid grid-cols-3 gap-3 my-6">
        {data?.map((item, index) => (
          <div className="relative" key={index}>
            <img
              src={item}
              alt={`Image ${index + 1}`}
              className="rounded-md border-2 object-cover "
            />
            <Button
              className="bg-transparent text-red-600 absolute top-0 right-0"
              type="button"
              onClick={() => handleRemoveImage(index)} // Button to remove image
            >
              <Cross1Icon />
            </Button>
          </div>
        ))}
      </div>

      <Label>
        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          multiple
          onChange={handleFileChange}
        />
        {errors.images && (
          <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
            <TriangleAlert size={18} /> {errors.images.message}
          </p>
        )}
      </Label>
    </div>
  );
}

export default ImageSection;
