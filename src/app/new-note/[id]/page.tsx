export const dynamic = "force-dynamic";
export const revalidate = 0;
import TipTap from "@/components/notes/tiptap";
import { db } from "@/db";
import { note_table, note_tags } from "@/db/schema";
import { eq } from "drizzle-orm";

const page = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const res = await db.select().from(note_table).where(eq(note_table.id, id));
  const content = JSON.stringify(res[0].note_content);
  return (
    <div>
      <TipTap updatedAt={res[0].updated_at} content={content} />
    </div>
  );
};

export default page;
