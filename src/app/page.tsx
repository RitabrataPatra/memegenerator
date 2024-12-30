"use client";
import React from "react";
import { IKImage, IKUpload } from "imagekitio-next";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";

export default function Home() {
  const [filePath, setFilePath] = React.useState<string>("");

  const onError = (err: UploadError) => {
    console.log("Error", err);
  };

  const onSuccess = (res: IKUploadResponse) => {
    console.log("Success", res);
    setFilePath(res.filePath);
  };

  return (
    <div className="App">
      <h1>ImageKit Next.js quick start</h1>

      {filePath && (
        <>
          <h2>Loading image from an absolute path</h2>
          <IKImage alt="image" width="400" height="300" path={filePath} />
        </>
      )}

      <div>
        <h1>File Upload</h1>
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
      </div>
    </div>
  );
}
