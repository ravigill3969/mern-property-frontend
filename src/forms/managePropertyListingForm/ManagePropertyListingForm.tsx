import { FormProvider, useForm } from "react-hook-form";

import { ListingPropertyFormData, listingSchema } from "@/zod";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import DeatailSection from "./UserDeatailSection";
import AddressSection from "./AddressSection";
import TypeOfPropertSection from "./TypeOfPropertSection";
import RentOrSaleSection from "./RentOrSaleSection";
import RentOptionsSection from "./RentOptionsSection";
import SaleOptionSection from "./SaleOptionSection";
import ImageSection from "./ImageSection";
import { ListingResponse } from "../../responseTypes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type MyComopoProps = {
  isPending: boolean; // Use lowercase `boolean`
  onSave: (data: FormData) => void; // Ensure `onSave` expects FormData and returns void
  buttonText: string;
  data?: ListingResponse;
};
function ManagePropertyListingForm({
  isPending,
  onSave,
  buttonText,
  data,
}: MyComopoProps) {
  const location = useLocation();

  const formMethods = useForm<ListingPropertyFormData>({
    resolver: zodResolver(listingSchema),
    defaultValues: data
      ? {
          fullname: data.fullname || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          addressLine1: data.addressLine1 || "",
          addressLine2: data.addressLine2 || "",
          city: data.city || "",
          state: data.state || "",
          country: data.country || "",
          postalCode: data.postalCode || "",
          propertyType: data.propertyType || "Apartment",
          rentOrSale: data.rentOrSale || "rent",
          monthlyRent: data.monthlyRent || "0",
          securityDeposit: data.securityDeposit || "0",
          leaseTerms: data.leaseTerms || "none",
          moveInDate: data.moveInDate || "2024-01-01",
          propertySize: data.propertySize || "",
          numberOfBedrooms: data.numberOfBedrooms || "",
          numberOfBathrooms: data.numberOfBathrooms || "",
          furnishedStatus: data.furnishedStatus || "",
          parkingAvailability: data.parkingAvailability || false,
          utilitiesIncluded: data.utilitiesIncluded || false,
          petPolicy: data.petPolicy || " ",
          askingPrice: data.askingPrice,
          hoaFees: data.hoaFees,
          legalClearances: data.legalClearances,
          mortgageAssistance: data.mortgageAssistance,
          propertyTaxes: data.propertyTaxes,
          // Convert the string URLs (if they exist) to an empty array or actual File objects if you want to implement it later.
          images: [], // Or handle any required conversions here.
        }
      : undefined,
  });

  const { handleSubmit, watch, reset } = formMethods;

  useEffect(() => {
    if (location.pathname === "/add-listing") {
      // Reset the form with empty values when adding a new listing
      reset({
        fullname: "",
        email: "",
        phoneNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        propertyType: "Apartment",
        rentOrSale: "rent",
        monthlyRent: "",
        securityDeposit: "",
        leaseTerms: "",
        moveInDate: "",
        propertySize: "",
        numberOfBedrooms: "",
        numberOfBathrooms: "",
        furnishedStatus: "",
        parkingAvailability: false,
        utilitiesIncluded: false,
        askingPrice: "",
        propertyTaxes: "",
        petPolicy: "",
        hoaFees: "",
        legalClearances: "",
        images: [], // Empty array for new listing
      });
    }
  }, [location.pathname, reset]);

  const onSubmit = (data: ListingPropertyFormData) => {
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("addressLine1", data.addressLine1);
    formData.append("addressLine2", data.addressLine2 || "");
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("postalCode", data.postalCode);
    formData.append("propertyType", data.propertyType);
    formData.append("rentOrSale", data.rentOrSale);

    // Rent-specific fields (conditionally append if the type is rent)
    if (data.rentOrSale === "rent") {
      formData.append("monthlyRent", data.monthlyRent || "");
      formData.append("securityDeposit", data.securityDeposit || "");
      formData.append("leaseTerms", data.leaseTerms || "");
      formData.append("moveInDate", data.moveInDate || "");
      formData.append("petPolicy", data.petPolicy || "");

    }

    // Sale-specific fields (conditionally append if the type is sale)
    if (data.rentOrSale === "sale") {
      formData.append("askingPrice", data.askingPrice || "");
      formData.append("hoaFees", data.hoaFees || "");
      formData.append("propertyTaxes", data.propertyTaxes || "");
      formData.append("legalClearances", data.legalClearances || "");
      formData.append(
        "mortgageAssistance",
        String(data.mortgageAssistance || "false")
      );
    }

    // Common fields
    formData.append("propertySize", data.propertySize || "");
    formData.append("numberOfBedrooms", data.numberOfBedrooms);
    formData.append("numberOfBathrooms", data.numberOfBathrooms);
    formData.append("furnishedStatus", data.furnishedStatus);
    formData.append(
      "parkingAvailability",
      String(data.parkingAvailability || "false")
    );
    formData.append(
      "utilitiesIncluded",
      String(data.utilitiesIncluded || "false")
    );

    if (data.images) {
      data.images.forEach((file) => {
        formData.append(`files`, file, file.name); // Append each file with a custom name
      });
    }
    onSave(formData);
    reset(); // You might want to reset to the default values
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-10 bg-white p-6 rounded-lg mt-6 border-green-600 shadow-lg"
      >
        <DeatailSection />
        <AddressSection />
        <TypeOfPropertSection />
        <RentOrSaleSection />
        {watch("rentOrSale") === "rent" && <RentOptionsSection />}
        {watch("rentOrSale") === "sale" && <SaleOptionSection />}
        <ImageSection data={data?.images || []} />
        <Button type="submit" className="mt-5 bg-blue-600 hover:bg-blue-700">
          {isPending ? "Loading..." : buttonText}
        </Button>
      </form>
    </FormProvider>
  );
}

export default ManagePropertyListingForm;
