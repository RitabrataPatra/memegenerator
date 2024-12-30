"use client";

import { FileObject, ListFileResponse } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { urlEndpoint } from "../Providers";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ResultList = ({ files }: { files: ListFileResponse }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {files.map((file) => {
        return (
          <Card key={(file as FileObject).fileId} className="">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <IKImage
              key={(file as FileObject).fileId}
                path={(file as FileObject).filePath}
                urlEndpoint={urlEndpoint}
                alt={file.name}
                width={300}
                height={200}
              />
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultList;
