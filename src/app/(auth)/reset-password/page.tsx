"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = useSearchParams().get("token");
  const router = useRouter();
  const onSubmit = async () => {
    if (
      password !== confirmPassword ||
      password.length < 6 ||
      password.trim() === ""
    ) {
      toast.error("Passwords do not match or are less than 6 characters");
      return;
    } else {
      try {
        if (!token) {
          toast.error("Invalid or missing token");
          return;
        }
        setIsSubmitting(true);
        const { error } = await authClient.resetPassword({
          token,
          newPassword: password,
        });
        if(error){
            toast.error(error.message);
            console.error(error);
            setIsSubmitting(false);
            return;
        }
        setIsSubmitting(false);
        router.push("/sign-in");
      } catch (error) {
        console.error(error);
        setIsSubmitting(false);
      }
    }
  };
  return (
    <div className="flex  justify-center mt-5 px-4">
      <Card className="w-full max-w-md shadow-xl border border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            Reset Password
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              placeholder="Re-enter password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="w-full h-11 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg"
          >
            Reset Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
