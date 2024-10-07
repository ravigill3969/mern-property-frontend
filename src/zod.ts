import * as z from "zod";

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

export type CreateUserInput = z.infer<typeof createUserSchema>;

//LOGIN
const loginUserSchema = z.object({

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(1,"Password is required")
});

export type LoginUserInput = z.infer<typeof loginUserSchema>;

export { loginUserSchema, createUserSchema };
