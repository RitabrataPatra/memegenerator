"use client";
import React from "react";
import { IKImage, ImageKitProvider } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {
  return (
    <div className="App">
      <ImageKitProvider urlEndpoint={urlEndpoint}>
        <h1>ImageKit Next.js quick start</h1>
        <h2>Loading image from an absolute path</h2>
        <IKImage src="https://ik.imagekit.io/demo/default-image.jpg" width="400" height="400" alt="Alt text" />
      </ImageKitProvider>
    </div>
  );
}