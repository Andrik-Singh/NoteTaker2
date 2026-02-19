export const dynamic = "force-dynamic";
export const revalidate = 0;
import NonShareAbleTipTap from "@/components/notes/NonshareableTitap";
import { Room } from "@/components/notes/Room";
import TipTap from "@/components/notes/tiptap";
import ZenModeHeader from "@/components/notes/ZenModeHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSpecificNotes } from "@/server/getNotes";
import { ArrowLeft, CircleX, ClipboardSignature, FileText } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const res = await getSpecificNotes(id);
  if (!res.success || !res.data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Card className="w-full max-w-md border-red-200 dark:border-red-900">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-50 dark:bg-red-950 flex items-center justify-center">
              <CircleX className="text-red-500 dark:text-red-400" size={32} />
            </div>
            <CardTitle className="text-2xl text-red-600 dark:text-red-400">
              Something went wrong
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center pb-6">
            <CardDescription className="text-base">
              {res.error ?? "An unknown error occurred"}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    );
  }
  const content =
    res.data[0].note_content !== undefined
      ? JSON.stringify(res.data[0].note_content)
      : null;
  if (!content) {
    return;
  }
  return (
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
        <ZenModeHeader data={res.data[0]} />
        {res.data[0].shareable === false ? (
          <NonShareAbleTipTap
            category={res.data[0].note_category}
            updatedAt={res.data[0].updated_at}
            content={content}
          />
        ) : (
          <Room>
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-[70vh]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600"></div>
                  <span className="ml-4 text-lg text-gray-600 dark:text-gray-400">
                    Connecting to collaborative room...
                  </span>
                </div>
              }
            >
              <TipTap updatedAt={res.data[0].updated_at} content={content} />
            </Suspense>
          </Room>
        )}
      </div>
    </div>
  );
};

export default page;
