"use client";
import React from "react";
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

export default function Home() {
  const [filePath, setFilePath] = React.useState<string>("");
  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth");
      console.log(response);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log(data);
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error}`);
    }
  };

  const onError = (err: UploadError) => {
    console.log("Error", err);
  };

  const onSuccess = (res: IKUploadResponse) => {
    console.log("Success", res);
    setFilePath(res.filePath);
  };

  return (
    <div className="App">
      <ImageKitProvider
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
        publicKey={publicKey}
      >
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
      </ImageKitProvider>
    </div>
  );
}
