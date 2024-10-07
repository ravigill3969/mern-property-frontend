import { CreateUserInput, LoginUserInput } from "@/zod";

const BASEURL = import.meta.env.VITE_BACKEND_BASE_URL;

export const registerUserRequest = async (data: CreateUserInput) => {
  const response = await fetch(`${BASEURL}/api/user/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody
};

export const loginUserRequest = async (data: LoginUserInput) => {
  const response = await fetch(`${BASEURL}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  return responseBody
};

export const validateToken = async () => {
  const response = await fetch(`${BASEURL}/api/user/validate-token`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Invalid token");
  }

  return await response.json();
};