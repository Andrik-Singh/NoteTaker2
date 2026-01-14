export const dynamic = "force-dynamic";
export const revalidate = 0;
import { Room } from "@/components/notes/Room";
import TipTap from "@/components/notes/tiptap";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSpecificNotes } from "@/server/getNotes";
import { ArrowLeft, CircleX, FileText } from "lucide-react";
import Link from "next/link";

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
      <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Card className="w-full max-w-md border-red-200 dark:border-red-900">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-50 dark:bg-red-950 flex items-center justify-center">
              <CircleX className="text-red-500 dark:text-red-400" size={32} />
            </div>
            <CardTitle className="text-2xl text-red-600 dark:text-red-400">
              Error 404
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center pb-6">
            <CardDescription className="text-base">{res.error}</CardDescription>
          </CardContent>
        </Card>
      </div>
    );
  }

  const content = JSON.stringify(res.data[0].note_content);

  return (
    <Room>
      <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 ">
        <div className="px-3 md:px-10 py-8 ">
          <div className="mb-6 ">
            <Button
              variant="ghost"
              className="gap-2 hover:gap-3 transition-all"
              asChild
            >
              <Link href="/home">
                <ArrowLeft size={18} />
                <span>Go Back</span>
              </Link>
            </Button>
          </div>
          <header className="mb-8 px-3 md:px-10 max-w-3xl">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                  {res.data[0].note_title}
                </h1>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {new Date(res.data[0].created_at).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </header>

          <TipTap updatedAt={res.data[0].updated_at} content={content} />
        </div>
      </div>
    </Room>
  );
};

export default page;
