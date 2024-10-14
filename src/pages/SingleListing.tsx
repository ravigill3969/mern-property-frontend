import { useGetMySingleListing } from "@/api/listingApi";
import { useParams } from "react-router-dom";

function SingleListingPage() {
  const params = useParams();
  const { data, isLoading } = useGetMySingleListing(params.listingId as string);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        No listing found.
      </div>
    );
  }

  const {
    fullname,
    email,
    phoneNumber,
    addressLine1,
    city,
    state,
    country,
    postalCode,
    propertyType,
    rentOrSale,
    monthlyRent,
    securityDeposit,
    leaseTerms,
    moveInDate,
    propertySize,
    numberOfBedrooms,
    numberOfBathrooms,
    furnishedStatus,
    parkingAvailability,
    utilitiesIncluded,
    petPolicy,
    images,
    askingPrice,
    propertyTaxes,
    hoaFees,
    legalClearances,
    mortgageAssistance,
  } = data;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{fullname}'s Property</h1>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-gray-500">Email</p>
              <p>{email}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Phone Number
              </p>
              <p>{phoneNumber}</p>
            </div>

            <div className="col-span-2">
              <p className="text-sm font-semibold text-gray-500">Address</p>
              <p>
                {addressLine1}, {city}, {state}, {country}, {postalCode}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Property Type
              </p>
              <p>{propertyType}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Rent or Sale
              </p>
              <p>{rentOrSale}</p>
            </div>

            <div>
              {rentOrSale === "rent" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Monthly Rent
                  </p>
                  <p>${monthlyRent}</p>
                </>
              )}

              {rentOrSale === "sale" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Asking Price
                  </p>
                  <p>${askingPrice}</p>
                </>
              )}
            </div>

            <div>
              {rentOrSale === "rent" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Security Deposit
                  </p>
                  <p>${securityDeposit}</p>
                </>
              )}
            </div>

            <div>
              {rentOrSale === "rent" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Lease Terms
                  </p>
                  <p>{leaseTerms}</p>
                </>
              )}
            </div>

            <div>
              {rentOrSale === "rent" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Move-in Date
                  </p>
                  <p>{new Date(moveInDate as string).toLocaleDateString()}</p>
                </>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Property Size
              </p>
              <p>{propertySize}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Bedrooms / Bathrooms
              </p>
              <p>
                {numberOfBedrooms} Bed / {numberOfBathrooms} Bath
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Furnished Status
              </p>
              <p>{furnishedStatus}</p>
            </div>
            <div>
              {rentOrSale === "sale" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Property Taxes
                  </p>
                  <p>{propertyTaxes}</p>
                </>
              )}
            </div>

            <div>
              {rentOrSale === "sale" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Mortgage Ass.
                  </p>
                  <p>{mortgageAssistance}</p>
                </>
              )}
            </div>
            <div>
              {rentOrSale === "sale" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    HOA fees
                  </p>
                  <p>{hoaFees}</p>
                </>
              )}
            </div>
            <div>
              {rentOrSale === "sale" && (
                <>
                  <p className="text-sm font-semibold text-gray-500">
                    Legal clearance
                  </p>
                  <p>{legalClearances}</p>
                </>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Parking Available
              </p>
              <p>{parkingAvailability ? "Yes" : "No"}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">
                Utilities Included
              </p>
              <p>{utilitiesIncluded ? "Yes" : "No"}</p>
            </div>

            <div className="col-span-2">
              <div>
                {rentOrSale === "rent" && (
                  <>
                    <p className="text-sm font-semibold text-gray-500">
                      Pet Policy
                    </p>
                    <p>{petPolicy}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Property Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleListingPage;
