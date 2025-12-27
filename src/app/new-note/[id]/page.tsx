export const dynamic = "force-dynamic";
export const revalidate = 0;
import { Room } from "@/components/notes/Room";
import TipTap from "@/components/notes/tiptap";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSpecificNotes } from "@/server/getNotes";
import { CircleX } from "lucide-react";

const page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const res = await getSpecificNotes(id);
  console.log(res);
  if (!res.success || !res.data) {
    return (
      <Card className="w-md mx-auto mt-10">
        <CardHeader className="text-red-500 text-3xl text-center">
          <CardTitle>Error 404</CardTitle>
        </CardHeader>
        <CardContent className="text-center flex flex-col items-center gap-5 ">
          <CardTitle className="">
            <CircleX color="red" size={60} />
          </CardTitle>
          <CardDescription className="">{res.error}</CardDescription>
        </CardContent>
      </Card>
    );
  }
  const content = JSON.stringify(res.data[0].note_content);
  return (
    <Room>
      <TipTap updatedAt={res.data[0].updated_at} content={content} />
    </Room>
  );
};

export default page;
