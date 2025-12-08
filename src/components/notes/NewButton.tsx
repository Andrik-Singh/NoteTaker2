"use client";

import { newNote } from "@/zod/newNote";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldGroup, FieldSet } from "../ui/field";
const NewButton = () => {
  const methods = useForm<z.infer<typeof newNote>>({
    resolver: zodResolver(newNote),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const getNewNote = async () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create a new Note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Metadata for your new notes</DialogTitle>
        </DialogHeader>
        <DialogDescription>
            <form onSubmit={handleSubmit(getNewNote)}>
                <FieldGroup>
                </FieldGroup>
            </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
