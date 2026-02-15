import * as z from "zod";

export const settingsSchema = z.object({
  textSize: z.enum(["sm", "md", "lg"]),
  lineWidth: z.enum(["narrow", "normal", "wide"]),
  spellcheck: z.boolean(),
  zenMode: z.boolean(),
});
export type TsettingsSchema = z.infer<typeof settingsSchema>;
