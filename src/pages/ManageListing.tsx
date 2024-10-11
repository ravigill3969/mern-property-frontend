import {
  useCreateMyListing,
  useGetMySingleListing,
  useUpdateMyListing,
} from "@/api/listingApi";
import ManagePropertyListingForm from "@/forms/managePropertyListingForm/ManagePropertyListingForm";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AddLising() {
  const params = useParams();

  useEffect(() => {
    document.title = "Add Listing - togthr2sale";
  }, []);

  const { isPending, createListing } = useCreateMyListing();
  const { data, isLoading } = useGetMySingleListing(params.listingId as string);
  const { isPending: isUpdatePending, updateListing } = useUpdateMyListing(
    params.listingId as string
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  const isEditing = !!data;

  return (
    <ManagePropertyListingForm
      isPending={isEditing ? isUpdatePending : isPending}
      onSave={isEditing ? updateListing : createListing}
      buttonText={isEditing ? "update" : "Add"}
      data={data}
    />
  );
}

export default AddLising;
