export const dynamic = "force-dynamic";
export const revalidate = 0;
import TipTap from "@/components/notes/tiptap";
import { db } from "@/db";
import { noteTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const res = await db.select().from(noteTable).where(eq(noteTable.id, id));
  const content = JSON.stringify(res[0].content);
  return (
    <div>
      <TipTap content={content} />
    </div>
  );
};

export default page;
