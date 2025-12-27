"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { usePathname } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
  const params=usePathname()
  const id=params.split("/")[2]
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblock-auth"}>
      <RoomProvider id={`${id}`}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}