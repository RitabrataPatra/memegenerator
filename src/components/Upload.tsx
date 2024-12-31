"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { UploadIcon } from "lucide-react";
import { IKUpload } from "imagekitio-next";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const Upload = () => {
  const router = useRouter();
  const ikUploadRefTest = useRef<HTMLInputElement>(null);
  //   const [filePath, setFilePath] = React.useState<string>("");
  const [fileName, setFileName] = React.useState<string>("");
  const [isUploading, setIsUploading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onError = (err: UploadError) => {
    setIsUploading(true);
    console.log("Error", err);
    setIsUploading(false);
  };

  const onSuccess = (res: IKUploadResponse) => {
    console.log("Success", res);
    // setFilePath(res.filePath);
    setFileName(res.name);

    router.push(`/customize/${res.fileId}`);
    setIsUploading(false);
  };

  return (
    <div>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button>Upload</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">
              Upload Files Here and give it a name
            </DialogTitle>
            <DialogDescription className="flex flex-col">
              <Input
                name="displayName"
                type="text"
                placeholder="What is your meme called?"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                required
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex gap-4 ">
              <Button
                onClick={() => {
                  setIsUploading(false);
                  setModalOpen(false);
                }}
                variant={"destructive"}
              >
                <p>Cancel</p>
              </Button>

              {ikUploadRefTest && (
                <Button
                  onClick={() => {
                    if (ikUploadRefTest.current) {
                      ikUploadRefTest.current.click();
                    }
                    
                  }}
                >
                  {isUploading ? (
                    "Uploading..."
                  ) : (
                    <>
                      <UploadIcon />
                      <p className="text-sm">Select and Upload Files </p>
                    </>
                  )}
                </Button>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <IKUpload
        customMetadata={{ displayName: fileName }}
        fileName={fileName}
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
        ref={ikUploadRefTest}
      />
    </div>
  );
};

export default Upload;
