import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authorizeToken } from "@/server/authorizeToken";
import { CircleX } from "lucide-react";
import { notFound, redirect } from "next/navigation";

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string;
  }>;
}) => {
  const { id } = await params;
  const { token, role } = await searchParams;
  console.log(id, token, role);
  if (!token || !id || !role) notFound();
  const expiresAt = await authorizeToken(token, role, id);
  if (!expiresAt.success) {
    return (
      <Card className="w-md mx-auto mt-10">
        <CardHeader className="text-red-500 text-3xl text-center">
          <CardTitle>Error 404</CardTitle>
        </CardHeader>
        <CardContent className="text-center flex flex-col items-center gap-5 ">
            <CardTitle className="">
              <CircleX color="red" size={60}/>
            </CardTitle>
            <CardDescription className="">
              {expiresAt.message}
            </CardDescription>
        </CardContent>
      </Card>
    );
  }
  redirect(`/new-note/${id}`)
};

export default page;
