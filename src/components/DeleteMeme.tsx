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

const DeleteMeme = ({file} : {file : FileObject}) => {
  return (
    <Dialog>
      <DialogTrigger><Trash2Icon size={20} color="brown"/></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center"><span className="text-red-500">Delete</span> {file.customMetadata?.displayName ?? file.name} ?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            file and remove it from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteMeme;
