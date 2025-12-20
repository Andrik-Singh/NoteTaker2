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
import { useFieldArray, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldGroup, FieldSet } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Delete, Plus, Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const NewButton = () => {
  const router = useRouter();
  const methods = useForm<z.infer<typeof newNote>>({
    resolver: zodResolver(newNote),
    defaultValues: {
      tags: [],
      content: {
        type: "doc",
        content: [],
      },
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = methods;
  const [tagValue, setTagValue] = useState("");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });
  const addTags = () => {
    if (tagValue.trim().length === 0) {
      toast.error("Atleast write something to append tag");
      return;
    }
    append({ value: tagValue });
    setTagValue("");
  };
  const removeTags = (index: number) => {
    remove(index);
  };
  const getNewNote = async (unsafeData: z.infer<typeof newNote>) => {
    try {
      const { data, error } = newNote.safeParse(unsafeData);
      if (error) {
        toast.error("Invalid input data");
        return;
      }
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        toast.error("Internal server error occured");
        return;
      }
      const responseData = await res.json();
      toast.success("Note added");
      router.push(`/new-note/${responseData.id}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create a new Note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Metadata for your new notes</DialogTitle>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit(getNewNote)}>
            <FieldGroup>
              <Field>
                <Label htmlFor="title">Title</Label>
                <Input
                  {...register("title")}
                  id="title"
                  placeholder="New docs.."
                />
                {errors.title && (
                  <FieldError>{errors.title.message}</FieldError>
                )}
              </Field>
              <Field>
                <Label htmlFor="tag">Tags</Label>
                <div className="flex gap-3">
                  <Input
                    id="tag"
                    onChange={(e) => {
                      setTagValue(e.target.value);
                    }}
                    value={tagValue}
                    placeholder=""
                  />
                  <Button
                    disabled={isSubmitting}
                    type="button"
                    onClick={addTags}
                  >
                    <Plus />
                  </Button>
                </div>
                {errors.tags && <FieldError>{errors.tags.message}</FieldError>}
              </Field>
              <Field className="flex flex-wrap">
                {fields.map((fields, index) => (
                  <div
                    className="bg-secondary flex justify-between max-w-50 items-center px-3 rounded-2xl"
                    key={fields.id}
                  >
                    <span>{fields.value}</span>
                    <Button
                    variant={"destructive"}
                      disabled={isSubmitting}
                      className="my-3"
                      type="button"
                      onClick={() => {
                        removeTags(index);
                      }}
                    >
                      <Trash />
                    </Button>
                  </div>
                ))}
              </Field>
              <div className="flex flex-row gap-5">
                <Button 
                variant={"outline"}
                disabled={isSubmitting} type="submit">
                  Save
                </Button>
                <Button
                  variant={"destructive"}
                  disabled={isSubmitting}
                  onClick={() => {
                    reset();
                  }}
                >
                  Reset
                </Button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
