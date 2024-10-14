export const rentOrSaleOption = [
  {
    title: "rent",
    type: "radio",
  },
  {
    title: "sale",
    type: "radio",
  },
];

export const rentOptions = [
  {
    title: "Rent per month",
    type: "number",
    className: "font-bold ",
    placeholder: "$500",
    classNameForInput: "w-20 px-2",
  },
  {
    title: "Parking",
    type: "checkbox",
  },

  {
    title: "Utilities",
    type: "checkbox",
  },
];
export const saleOptions = [
  {
    title: "Price",
    type: "number",
    className: "font-bold",
    placeholder: "$100000",

    classNameForInput: "w-25 px-2 ",
  },
  {
    title: "Parking",
    type: "checkbox",
  },
  
];

export const propertyTypeList = [
  "Apartment",
  "House",
  "Condominium",
  "Commercial Property",
  "Land",
  "Office Space",
] as const;
