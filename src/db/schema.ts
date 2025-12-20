import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  index,
  jsonb,
  primaryKey,
} from "drizzle-orm/pg-core";


export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("account_userId_idx").on(table.userId)],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const note_table = pgTable("notes", {
  id: text("id").primaryKey().notNull(),
  user_id: text("user_id")
    .references(() => user.id, { onDelete: "cascade" })
    .notNull(),
  note_content: jsonb("note_content").notNull(),
  note_title: text("note_title").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
},(t)=>({
  note_id_idx:index("note_id_idx").on(t.id),
  note_user_id:index("note_user_id").on(t.user_id),
}));

export const tokens = pgTable(
  "tokens",
  {
    id: text("id").primaryKey(),
    created_by: text("created_by")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    created_at: timestamp("created_at").defaultNow().notNull(),
    expires_at: timestamp("expires_at").notNull(),
    revoked_at: timestamp("revoked_at"),
  },
  (t) => ({
    expires_idx: index("tokens_expires_idx").on(t.expires_at),
    user_idx: index("tokens_user_idx").on(t.created_by),
  })
);

export const note_tags = pgTable(
  "note_tags",
  {
    note_id: text("note_id")
      .references(() => note_table.id, { onDelete: "cascade" })
      .notNull(),
    tag_name: text("tag_name").notNull(),
  },
  (t) => [primaryKey({ columns: [t.note_id, t.tag_name] })]
);

export const note_members = pgTable(
  "note_members",
  {
    member_user_id: text("member_user_id")
      .references(() => user.id, { onDelete: "cascade" })
      .notNull(),
    note_id: text("note_id")
      .references(() => note_table.id, { onDelete: "cascade" })
      .notNull(),
    role: text("role").notNull(),
    joined_at: timestamp("joined_at").defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.member_user_id, t.note_id] })]
);

export const note_versions = pgTable("note_versions", {
  version_id: text("version_id").primaryKey().notNull(),
  note_id: text("note_id").references(() => note_table.id, {
    onDelete: "cascade",
  }),
  changed_by: text("changed_by").references(() => user.id, {
    onDelete: "cascade",
  }),
  content: jsonb("content").notNull(),
  title: text("title").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});
export const tokenRelations = relations(tokens, ({ one }) => ({
  user: one(user, {
    fields: [tokens.created_by],
    references: [user.id],
    relationName: "user_tokens", // Same as above
  }),
}));

// Note table relations
export const noteTableRelations = relations(note_table, ({ one, many }) => ({
  user: one(user, {
    fields: [note_table.user_id],
    references: [user.id],
    relationName: "user_notes", // Same as above
  }),
  tags: many(note_tags, { relationName: "note_tags_relation" }), // Added relation name
  members: many(note_members, { relationName: "note_members_relation" }), // Added relation name
  versions: many(note_versions, { relationName: "note_versions_relation" }), // Added relation name
}));

// Note tags relations
export const noteTagsRelations = relations(note_tags, ({ one }) => ({
  note: one(note_table, {
    fields: [note_tags.note_id],
    references: [note_table.id],
    relationName: "note_tags_relation", // Same as above
  }),
}));

// Note members relations
export const noteMembersRelations = relations(note_members, ({ one }) => ({
  note: one(note_table, {
    fields: [note_members.note_id],
    references: [note_table.id],
    relationName: "note_members_relation", // Same as above
  }),
  user: one(user, {
    fields: [note_members.member_user_id],
    references: [user.id],
    relationName: "user_note_memberships", // Same as above
  }),
}));

// Note versions relations
export const noteVersionsRelations = relations(note_versions, ({ one }) => ({
  note: one(note_table, {
    fields: [note_versions.note_id],
    references: [note_table.id],
    relationName: "note_versions_relation", // Same as above
  }),
  user: one(user, {
    fields: [note_versions.changed_by],
    references: [user.id],
    relationName: "user_note_versions", // Same as above
  }),
}));
export const allRelations = [
  userRelations,
  sessionRelations,
  accountRelations,
  tokenRelations,
  noteTableRelations,
  noteTagsRelations,
  noteMembersRelations,
  noteVersionsRelations,
];
