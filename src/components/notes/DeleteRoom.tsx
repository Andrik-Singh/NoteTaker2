"use client"
import{ useState } from 'react'
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Loader2,  Unlock } from 'lucide-react';
import { deleteRoom } from '@/server/deleteRoom';
import { useRouter } from 'next/navigation';

const DeleteRoom = ({id}:{id:string}) => {
  const [creating, setCreating] = useState(false);
  const router=useRouter()
  return (
    <Button
      size="sm"
      variant="default"
      disabled={creating}
      onClick={async () => {
        try {
          setCreating(true);
          await deleteRoom(id);
          toast.success("Room deleted successfully");
          router.refresh()
        } catch (error) {
          console.error(error);
          toast.error("Unable to delete the room");
        } finally {
          setCreating(false);
        }
      }}
      className="group relative inline-flex items-center gap-2 rounded-full bg-primary-foreground px-4 py-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 disabled:opacity-70"
    >
      {creating ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <Unlock className="h-3 w-3 transition-transform" />
      )}
      
      <span className="tracking-wide">
        {creating ? "Deleting..." : "Public room"}
      </span>
    </Button>
  );
};

export default DeleteRoom