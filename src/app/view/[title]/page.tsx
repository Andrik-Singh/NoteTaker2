import ViewTemplate from "@/components/newNote/ViewTemplate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { templateCategories } from "@/lib/templates";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const page = async ({
  params,
}: {
  params: Promise<{
    title: string;
  }>;
}) => {
  const { title } = await params;
  const data = templateCategories
    .map((temp) => temp.templates)
    .flat()
    .find(
      (t) => t.title.toLocaleLowerCase().trim().replaceAll(" ", "") === title,
    );
  if (!data) notFound();
  return (
    <div>
      <div className="min-h-auto bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 ">
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
          <header className="mb-8 px-3 md:px-10 ">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex justify-between items-center min-w-full">
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                    {data?.title}
                  </h1>
                  <Badge
                    variant="secondary"
                    className="top-3 left-3 backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-sm"
                  >
                    {data.subtitle}
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </header>
        </div>
      </div>
      <ViewTemplate data={data} />
    </div>
  );
};

export default page;
