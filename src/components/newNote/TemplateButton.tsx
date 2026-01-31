"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

interface TemplateButtonProps {
  value: string;           
}

export default function TemplateButton({ value }: TemplateButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const templateValue = useMemo(() => value.split(" ")[0].trim(), [value]);

  const current = searchParams.get("templates") ?? "All";

  const isActive = templateValue === current;

  const handleClick = useCallback(() => {
    const nextParams = new URLSearchParams(searchParams.toString()); 
    if (templateValue === "All") {
      nextParams.delete("templates");
    } else {
      nextParams.set("templates", templateValue);
    }
    const query = nextParams.toString();
    const newUrl = query ? `${pathname}?${query}` : pathname;
    router.push(newUrl, { scroll: false });
  }, [router, pathname, searchParams, templateValue]);

  return (
    <button
      onClick={handleClick}
      className={`
        px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap
        transition-colors
        ${
          isActive
            ? "bg-[#1e293b] text-white shadow-md scale-105 dark:bg-gray-100 dark:text-gray-900"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        }
      `}
    >
      {value}
    </button>
  );
}