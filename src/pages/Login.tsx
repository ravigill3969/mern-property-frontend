import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { TriangleAlert } from "lucide-react";

import { loginItems } from "@/inputContaierForLoop";
import { loginUserSchema, LoginUserInput } from "../zod";
import { loginUserRequest } from "@/api/userApi";
import { useEffect } from "react";
import { useAuth } from "@/zustand/store";

function Login() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }

    document.title = "Log In - togthr2sale";
  }, [isLoggedIn]);

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserInput>({
    resolver: zodResolver(loginUserSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUserRequest,
    onSuccess: async () => {
      toast.success("Welcome to the app", {
        icon: "✔️",
      });
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });

      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message, {
        icon: "🚫",
      });
    },
  });

  const onSubmit = (data: LoginUserInput) => {
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-lg w-[380px] p-8"
      >
        {/* Title */}
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Log In
        </h1>

        {/* Form Fields */}
        <div className="flex flex-col">
          {loginItems.map((item, index) => (
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
                className={`mt-1 w-full border-2 p-3 rounded-lg focus:outline-none focus:border-green-500 transition-colors duration-300 ${
                  errors[item.inputName as keyof LoginUserInput]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...register(item.inputName as keyof LoginUserInput)}
                type={item.textType}
                placeholder={item.placeholder}
              />
              {errors[item.inputName as keyof LoginUserInput] && (
                <p className="text-red-500 text-sm font-semibold mt-2 flex items-center">
                  <TriangleAlert className="mr-1" size={16} />
                  {errors[item.inputName as keyof LoginUserInput]?.message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Register Link */}
        <p className="text-sm text-gray-600 mb-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>

        {/* Submit Button */}
        <Button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition-colors duration-300 ${
            isPending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          disabled={isPending}
        >
          {isPending ? "Waiting..." : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
