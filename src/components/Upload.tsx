"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { UploadIcon } from "lucide-react";
import { IKUpload } from "imagekitio-next";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";

const Upload = () => {
  const ikUploadRefTest = useRef<HTMLInputElement>(null);
//   const [filePath, setFilePath] = React.useState<string>("");
  const [fileName, setFileName] = React.useState<string>("");

  const onError = (err: UploadError) => {
    console.log("Error", err);
  };

  const onSuccess = (res: IKUploadResponse) => {
    console.log("Success", res);
    // setFilePath(res.filePath);
    setFileName(res.name);
  };

  return (
    <>
      <IKUpload
        fileName={fileName}
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
        ref={ikUploadRefTest}
      />
      {ikUploadRefTest && 
        <Button className="flex" onClick={() => ikUploadRefTest.current && ikUploadRefTest.current.click()}>
          <UploadIcon />
          <p className="text-sm">Upload</p>
        </Button>
      }
    </>
  );
};

export default Upload;
