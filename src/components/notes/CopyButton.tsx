"use client";

import { useEffect, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { notFound, useParams, usePathname } from "next/navigation";
import { toast } from "sonner";
import { error } from "console";

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
          const token=crypto.randomUUID()
          const res = await fetch(`/api/token-generation/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ role,token }),
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
          const shareLink = `${window.location.origin}/note/authorization/${id}?token=${token}&role=${role}`;
          setLink(shareLink);
          await navigator.clipboard.writeText(shareLink);

          toast.success("Successfully copied");
          setLoading(false)
        } catch (error){
          console.log(error)
          toast.error("Something went wrong");
          setLoading(false)
        }
      }}
      variant={"outline"}
    >
      Collab with other users
    </Button>
  );
};

export default CopyButton;
