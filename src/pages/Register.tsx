import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { registerItems } from "@/inputContaierForLoop";
import { createUserSchema, CreateUserInput } from "../zod";
import { TriangleAlert } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUserRequest } from "@/api/userApi";
import toast from "react-hot-toast";
import { useEffect } from "react";

function Register() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  useEffect(() => {
    document.title = "Register - togthr2sale";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: registerUserRequest,
    onSuccess: async () => {
      toast.success(" Registered sucessfully");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
    },
  });

  const onSubmit = (formData: CreateUserInput) => {
    console.log(formData);
    mutate(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[380px] bg-white p-8 rounded-lg shadow-2xl "
      >
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Welcome!
        </h1>

        <div className="  p-6 rounded-lg">
          <div className="flex flex-col items-center">
            {registerItems.map((item, index) => (
              <div key={index} className="mb-4 w-full">
                <Label
                  htmlFor={item.inputName}
                  className="font-semibold text-gray-700"
                >
                  {item.inputName.charAt(0).toUpperCase() +
                    item.inputName.slice(1)}
                </Label>
                <Input
                  id={item.inputName}
                  className={`mt-1 w-full border-2 p-3 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-300 transition-colors duration-300 ${
                    errors[item.inputName as keyof CreateUserInput]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...register(item.inputName as keyof CreateUserInput)}
                  type={item.textType}
                  placeholder={item.placeholder}
                />
                {errors[item.inputName as keyof CreateUserInput] && (
                  <p className="text-red-500 text-sm font-semibold mt-2 flex items-center">
                    <TriangleAlert className="mr-1" size={16} />
                    {errors[item.inputName as keyof CreateUserInput]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 mb-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>

          <Button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 bg-green-500 hover:bg-green-600"
            disabled={isPending}
          >
            {isPending ? "Registering..." : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
