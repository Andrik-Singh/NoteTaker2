"use client"

import { useState, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"

const DeleteButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const router=useRouter()
  const handleDelete = () => {
    startTransition(async () => {
        const res=await fetch(`/api/notes/${id}`,{
            method:"DELETE",
        })
        setOpen(false)
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this item and remove all associated data from our
            servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="spce-x-3">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteButton
