"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
const forgetPasswordSchema = z.object({
  email: z
    .email({ error: "Invalid email address" })
    .min(1, { error: "Email is required" }),
});
const page = () => {
  const methods = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const [timer, setTimer] = useState(0);
  const onSubmit = async (data: z.infer<typeof forgetPasswordSchema>) => {
    try {
      const { error } = await authClient.requestPasswordReset({
        email: data.email,
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) {
        toast.error(error.message);
        console.error(error)
      }
      setTimer(60);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(()=>{
    if(timer===0)return;
    const interval=setInterval(()=>{
      setTimer((prev)=>prev-1)
    },1000)
    return ()=>clearInterval(interval)
  },[timer])
  return (
    <Card className="md:w-md w-xs mx-auto mt-20 shadow-lg">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting || timer>0}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            <span>Reset Password</span>
            {timer>0 && <span className="ml-2">({timer}s)</span>}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default page;
