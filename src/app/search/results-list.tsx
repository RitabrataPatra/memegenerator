"use client";

import { FileObject, ListFileResponse } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { urlEndpoint } from "../Providers";
import { toDateFunction, toFileSize } from "@/helpers/utils";

import {
  Card,
  CardContent,
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
              <CardTitle>{file.name}</CardTitle>
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
            <CardFooter className="flex flex-col text-left items-start gap-2">
              <p className="text-xs">Created at {toDateFunction( (file as FileObject).createdAt)}</p>
              <p className="text-xs">Size is {toFileSize( (file as FileObject).size)}</p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultList;
