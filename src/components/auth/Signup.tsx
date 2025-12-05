"use client";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpType } from "@/zod/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSeparator,
} from "../ui/field";
import { Input } from "../ui/input";
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Signup = () => {
  const methods = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const [googleLoading, setGoogleLoading] = useState(false)
  const [githubLoading, setGithubLoading] = useState(false)
  const router=useRouter()
  const signUpSubmission = async (unsafeData: SignUpType) => {
    try {
      const data = signUpSchema.safeParse(unsafeData);
      if (!data.success) {
        toast.error("Invalid input data");
        return;
      }
      const authData=await authClient.signUp.email({
        name:data.data.name,
        email:data.data.email,
        password:data.data.password
      })
      if(authData.error){
        toast.error(authData.error.message)
        throw new Error(authData.error.message)
      }else{
        toast.success("Sign Up completed")
        router.push("/home")
      }
    } catch (err) {
      if(typeof err === "string"){
        toast.error(err)
      }else{
        console.error(err)
      }
    }
  };
   const handleSignWithGithub = async () => {
    try {
      setGithubLoading(true);
      const data =await authClient.signIn.social({
        provider:"github",
      })
      if(data.error){
        throw new Error(data.error.message)
      }
      toast.success("Signed in successfully")
      router.push("/home")
    } catch (error) {
      setGithubLoading(false);
      if(typeof error === "string"){
        toast.error(error)
      }else{
        console.error(error)
      }
    } finally {
      setGithubLoading(false);
    }
  };
  const handleSignInWithGoogle = async () => {
    try {
      setGoogleLoading(true);
      const data=await authClient.signIn.social({
        provider:"google"
      })
      if(data.error){
        throw new Error(data.error.message)
      }
      toast.success("Signed in successfully")
      router.push("/home")
    } catch (error) {
      if(typeof error === "string"){
        toast.error(error)
      }else{
        console.error(error)
      }
      setGoogleLoading(false);
    } finally {
      setGoogleLoading(false);
    }
  };
  return (
    <Card className="md:w-md w-xs ">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Create your account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(signUpSubmission)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name")}
              />
              {errors.name && <FieldError>{errors.name.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              {errors.email?.message && (
                <FieldError>{errors.email.message}</FieldError>
              )}
            </Field>
            <Field>
              <Field className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <FieldError>{errors.password?.message}</FieldError>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <FieldError>{errors.confirmPassword.message}</FieldError>
                  )}
                </Field>
              </Field>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            <FieldSeparator>Or Continue With</FieldSeparator>
            <Field>
              <Button
              disabled={isSubmitting || googleLoading || githubLoading}
              onClick={handleSignWithGithub}
              className="max-w-sm" variant="outline" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="currentColor"
                  />
                </svg>
                Login with Github
              </Button>
              <Button
              disabled={isSubmitting || googleLoading || githubLoading}
              onClick={handleSignInWithGoogle}
              className="max-w-sm" variant="outline" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Login with Google
              </Button>
            </Field>
            <Field>
              <Button type="submit" disabled={isSubmitting || googleLoading || githubLoading}>{isSubmitting ? "Creating" :"Create account"}</Button>
              <FieldDescription className="text-center">
                Already have an account? <Link href="sign-in">Sign in</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
};

export default Signup;
