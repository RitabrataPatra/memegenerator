"use client";
import { ImageKitProvider } from "imagekitio-next";
import React from "react";



const authenticator = async () => {
    try {
      const response = await fetch("/api/auth");
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
export const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

const Providers = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <ImageKitProvider
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
      publicKey={publicKey}
    >
      {children}
    </ImageKitProvider>
  );
};

export default Providers;
