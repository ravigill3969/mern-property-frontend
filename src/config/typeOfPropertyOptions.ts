export const propertyTypeList = [
  "Apartment",
  "House",
  "Condominium",
  "Commercial Property",
  "Land",
  "Office Space",
] as const;


export const rentOptions = [
  {
    optionName: "Monthly Rent",
    type: "number",
    placeholder: "Enter monthly rent amount",
    registerKey: "monthlyRent", // Add registerKey here
  },
  {
    optionName: "Security Deposit",
    type: "number",
    placeholder: "Enter security deposit amount",
    registerKey: "securityDeposit", // Add registerKey here
  },
  {
    optionName: "Lease Terms",
    type: "text",
    placeholder: "Enter lease duration (e.g., 6 months, 1 year)",
    registerKey: "leaseTerms", // Add registerKey here
  },
  {
    optionName: "Move-in Date",
    type: "date",
    placeholder: "Select move-in date",
    registerKey: "moveInDate", // Add registerKey here
  },
  {
    optionName: "Property Size (sq ft)",
    type: "number",
    placeholder: "Enter property size in square feet",
    registerKey: "propertySize", // Add registerKey here
  },
  {
    optionName: "Number of Bedrooms",
    type: "number",
    placeholder: "Enter number of bedrooms",
    registerKey: "numberOfBedrooms", // Add registerKey here
  },
  {
    optionName: "Number of Bathrooms",
    type: "number",
    placeholder: "Enter number of bathrooms",
    registerKey: "numberOfBathrooms", // Add registerKey here
  },
  {
    optionName: "Furnished Status",
    type: "text",
    placeholder: "Enter furnished status (e.g., Furnished, Unfurnished)",
    registerKey: "furnishedStatus", // Add registerKey here
  },
  {
    optionName: "Parking Availability",
    type: "checkbox",
    placeholder: "",
    registerKey: "parkingAvailability", // Add registerKey here
  },
  {
    optionName: "Utilities Included",
    type: "checkbox",
    placeholder: "",
    registerKey: "utilitiesIncluded", // Add registerKey here
  },
  {
    optionName: "Pet Policy",
    type: "text",
    placeholder: "Enter pet policy (e.g., Pets Allowed, No Pets Allowed)",
    registerKey: "petPolicy", // Add registerKey here
  },
  {
    optionName: "Nearby Facilities",
    type: "text",
    placeholder: "Enter nearby facilities (e.g., Schools, Transport)",
    registerKey: "nearbyFacilities", // Add registerKey here
  },
];
export const saleOptions = [
  {
    optionName: "Asking Price",
    placeholder: "Enter asking price",
    type: "number",
    registerKey: "askingPrice", // Added registerKey
  },
  {
    optionName: "Property Size (sq ft)",
    placeholder: "Enter property size",
    type: "number",
    registerKey: "propertySize", // Added registerKey
  },
  {
    optionName: "Number of Bedrooms",
    placeholder: "Enter number of bedrooms",
    type: "number",
    registerKey: "numberOfBedrooms", // Added registerKey
  },
  {
    optionName: "Number of Bathrooms",
    placeholder: "Enter number of bathrooms",
    type: "number",
    registerKey: "numberOfBathrooms", // Added registerKey
  },
  {
    optionName: "Furnished Status",
    placeholder: "Enter furnished status",
    type: "text",
    registerKey: "furnishedStatus", // Added registerKey
  },
  {
    optionName: "HOA Fees",
    placeholder: "Enter HOA fees",
    type: "number",
    registerKey: "hoaFees", // Added registerKey
  },
  {
    optionName: "Property Taxes",
    placeholder: "Enter property taxes",
    type: "number",
    registerKey: "propertyTaxes", // Added registerKey
  },
  {
    optionName: "Nearby Facilities",
    placeholder: "Enter nearby facilities",
    type: "text",
    registerKey: "nearbyFacilities", // Added registerKey
  },
  {
    optionName: "Legal Clearances",
    placeholder: "Enter legal clearances",
    type: "text",
    registerKey: "legalClearances", // Added registerKey
  },
  {
    optionName: "Mortgage Assistance",
    placeholder: "Is mortgage assistance available?",
    type: "checkbox",
    registerKey: "mortgageAssistance", // Added registerKey
  },
  {
    optionName: "Parking Availability",
    placeholder: "Is parking available?",
    type: "checkbox",
    registerKey: "parkingAvailability", // Added registerKey
  },
];
