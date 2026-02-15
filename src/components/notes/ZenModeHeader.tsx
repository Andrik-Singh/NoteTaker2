"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { defaultSettings, key } from "@/lib/utils";
import { settingsSchema } from "@/zod/settings";

const ZenModeHeader = ({
  data,
}: {
  data: {
    id: string;
    user_id: string;
    note_content: unknown;
    note_title: string;
    created_at: Date;
    updated_at: Date;
    note_category: string;
    shareable: boolean;
  };
}) => {
  const [value, setValue] = useLocalStorage(
    key,
    defaultSettings,
    settingsSchema,
  );
  if (!value.zenMode) {
    return (
      <header className="mb-8 px-3 md:px-10 max-w-3xl">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
              {data.note_title}
            </h1>
            <h2>{data.note_category}</h2>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {new Date(data.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </header>
    );
  }
  return null
};

export default ZenModeHeader;
