import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { UploadIcon } from "lucide-react";


const Upload = () => {
  return (

        <Link href="/upload">

            <Button className="flex">
                <UploadIcon/>
                <p className="text-sm">Upload</p>
            </Button>
        </Link>

  );
};

export default Upload;
