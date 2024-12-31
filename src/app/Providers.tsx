"use client";
import { ImageKitProvider } from "imagekitio-next";
import { Loader } from "lucide-react";
import React, { useState } from "react";



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
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    // Simulate authenticator call to manage loading state
    const initialize = async () => {
      try {
        await authenticator();
      } catch (error) {
        console.error("Error initializing authenticator:", error);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <Loader className="animate-spin" size={50} color="blue" />
      </div>
    );
  }
  
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
