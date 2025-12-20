"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { notFound, useParams, usePathname } from "next/navigation";
import { toast } from "sonner";

const CopyButton = ({ role }: { role: string }) => {
  const { id } = useParams();
  const path = usePathname();
  if (!id) notFound();
  const [link, setLink] = useState("");
  const [copying, setCopying] = useState(4);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLink(`${window.location.origin}${path}`);
  }, [path]);
  useEffect(() => {
    if (copying <= 0 || copying >= 4) return;
    const interval = setInterval(() => {
      setCopying((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [copying]);
  return (
    <Button
      disabled={loading || !(copying >= 4 || copying <= 0)}
      onClick={async () => {
        try {
          setCopying(3);
          setLoading(true)
          const res = await fetch(`/api/token-generation/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role }),
          });

          if (!res.ok) {
            toast.error(
              res.status === 401
                ? "Unauthorized access"
                : "Internal server error"
            );
            setLoading(false)
            return;
          }

          const data = await res.json();

          const shareLink = `${window.location.origin}/note/authorization/${id}?token=${data.id}&role=${role}`;

          setLink(shareLink);
          await navigator.clipboard.writeText(shareLink);

          toast.success("Successfully copied");
          setLoading(false)
        } catch {
          toast.error("Something went wrong");
          setLoading(false)
        }
      }}
      variant={"outline"}
    >
      Share as {role}
    </Button>
  );
};

export default CopyButton;
