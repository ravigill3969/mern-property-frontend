import * as z from "zod";
import { propertyTypeList } from "./config/typeOfPropertyOptions";

const createUserSchema = z.object({
  username: z
    .string()
    .min(4, "Username should be 4 characters long")
    .max(20, "Username must not exceed 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),

  email: z
    .string()
    .email("Invalid email address")
    .refine(
      (email) =>
        email.endsWith(".com") ||
        email.endsWith(".org") ||
        email.endsWith(".net"),
      {
        message: "Email must end with .com, .org, or .net",
      }
    ),

  password: z
    .string()
    .min(8, "Password should be 8 characters long")
    .max(100, "Password must not exceed 100 characters"),
});

// Handles additional dynamic properties as strings

export type CreateUserInput = z.infer<typeof createUserSchema>;

//LOGIN
const loginUserSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(1, "Password is required"),
});

export type LoginUserInput = z.infer<typeof loginUserSchema>;

const listingSchema = z.object({
  fullname: z.string().min(1, "Please enter your full name"),

  email: z.string().email("Invalid email address"),

  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long" })
    .max(15, { message: "Phone number must be no more than 15 digits" })
    .regex(
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
      "Invalid phone number format"
    ),

  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),

  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  postalCode: z.string().min(1, "Postal Code is required"),

  propertyType: z.enum(propertyTypeList, {
    errorMap: () => ({ message: "Please choose a valid property type" }),
  }),

  rentOrSale: z.enum(["rent", "sale"], {
    errorMap: () => ({ message: "Please select either rent or sale" }),
  }),

  monthlyRent: z.string().min(1, "Monthly Rent is required").optional(),
  securityDeposit: z.string().min(1, "Security Deposit is required").optional(),
  leaseTerms: z.string().min(1, "Lease Terms are required").optional(),
  moveInDate: z.string().min(1, "Move-in Date is required").optional(),
  propertySize: z.string().min(1, "Property Size is required"), // Already exists
  numberOfBedrooms: z.string().min(1, "Number of Bedrooms is required"), // Already exists
  numberOfBathrooms: z.string().min(1, "Number of Bathrooms is required"), // Already exists
  furnishedStatus: z.string().min(1, "Furnished Status is required"), // Already exists
  parkingAvailability: z.boolean().optional(), // Already exists
  utilitiesIncluded: z.boolean().optional(), // Already exists
  petPolicy: z.string().min(1, "Pet Policy is required"), // Already exists
  nearbyFacilities: z.string().min(1, "Nearby Facilities are required"), // Already exists

  // Adding the new keys from saleOptions
  askingPrice: z.string().min(1, "Asking Price is required").optional(),
  hoaFees: z.string().min(1, "HOA Fees are required").optional(),
  propertyTaxes: z.string().min(1, "Property Taxes are required").optional(),
  legalClearances: z
    .string()
    .min(1, "Legal Clearances are required")
    .optional(),
  mortgageAssistance: z.boolean().optional(),

  images: z
    .array(z.instanceof(File))
    .min(1, "At least one image is required")
    .max(6, "You can upload a maximum of 6 images"),
});

export type ListingPropertyFormData = z.infer<typeof listingSchema>;

export { loginUserSchema, createUserSchema, listingSchema };
