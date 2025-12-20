CREATE TABLE "tokens" (
	"id" text PRIMARY KEY NOT NULL,
	"token_hash" text NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp NOT NULL,
	"revoked_at" timestamp,
	CONSTRAINT "tokens_token_hash_unique" UNIQUE("token_hash")
);
--> statement-breakpoint
ALTER TABLE "NoteTable" RENAME TO "noteTable";--> statement-breakpoint
ALTER TABLE "noteMembers" DROP CONSTRAINT "noteMembers_noteId_NoteTable_id_fk";
--> statement-breakpoint
ALTER TABLE "noteTable" DROP CONSTRAINT "NoteTable_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "noteTags" DROP CONSTRAINT "noteTags_noteId_NoteTable_id_fk";
--> statement-breakpoint
ALTER TABLE "noteVersions" DROP CONSTRAINT "noteVersions_noteId_NoteTable_id_fk";
--> statement-breakpoint
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "tokens_expires_idx" ON "tokens" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "tokens_user_idx" ON "tokens" USING btree ("created_by");--> statement-breakpoint
ALTER TABLE "noteMembers" ADD CONSTRAINT "noteMembers_noteId_noteTable_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."noteTable"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "noteTable" ADD CONSTRAINT "noteTable_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "noteTags" ADD CONSTRAINT "noteTags_noteId_noteTable_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."noteTable"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "noteVersions" ADD CONSTRAINT "noteVersions_noteId_noteTable_id_fk" FOREIGN KEY ("noteId") REFERENCES "public"."noteTable"("id") ON DELETE cascade ON UPDATE no action;