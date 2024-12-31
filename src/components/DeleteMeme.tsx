"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2Icon } from "lucide-react";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { Button } from "./ui/button";
// import ImageKit from "imagekit";

  // const imagekit = new ImageKit({
  //    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  //    privateKey: process.env.PRIVATE_KEY!,
  //    urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
  //  });

const DeleteMeme =  ({ file }: { file: FileObject }) => {
  
  const handleDelete =  () => {

    console.log("Delete succesfull!!");
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Trash2Icon size={20} color="brown" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-2 line-clamp-1">
            <span className="text-red-500">Delete</span>{" "}
            {file.customMetadata?.displayName ?? file.name} ?
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            This action cannot be undone. This will permanently delete your file
            and remove it from our servers.
            <Button variant="destructive" onClick={async() =>  handleDelete}>
              <p>Delete</p>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteMeme;
