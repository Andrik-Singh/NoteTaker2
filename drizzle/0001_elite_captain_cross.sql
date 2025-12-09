CREATE TABLE "noteMembers" (
	"memberUserId" text NOT NULL,
	"noteId" text NOT NULL,
	"role" text NOT NULL,
	"joinedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "noteTags" (
	"noteId" text NOT NULL,
	"tagName" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "noteVersions" (
	"noteId" text,
	"versionId" text PRIMARY KEY NOT NULL,
	"userId" text,
	"createdAt" timestamp DEFAULT now(),
	"content" jsonb NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "noteFolder" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "noteFolder" CASCADE;--> statement-breakpoint
ALTER TABLE "NoteTable" RENAME COLUMN "oteContent" TO "noteContent";--> statement-breakpoint
ALTER TABLE "NoteTable" DROP CONSTRAINT IF EXISTS "NoteTable_parentFolder_noteFolder_folderId_fk";

--> statement-breakpoint
ALTER TABLE "noteMembers" ADD CONSTRAINT "noteMembers_memberUserId_user_id_fk" FOREIGN KEY ("memberUserId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "noteMembers" ADD CONSTRAINT "noteMembers_noteId_NoteTable_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."NoteTable"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "noteVersions" ADD CONSTRAINT "noteVersions_noteId_NoteTable_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."NoteTable"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "noteVersions" ADD CONSTRAINT "noteVersions_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "NoteTable" DROP COLUMN "parentFolder";