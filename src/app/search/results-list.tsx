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

import Link from "next/link";

const ResultList = ({ files }: { files: ListFileResponse }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {files.map((file) => {
        return (
          <Card key={(file as FileObject).fileId} className="">
            <CardHeader>
              <CardTitle>{file.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={(file as FileObject).url}>
                <IKImage
                  key={(file as FileObject).fileId}
                  path={(file as FileObject).filePath}
                  urlEndpoint={urlEndpoint}
                  alt={file.name}
                  width={300}
                  height={200}
                />
              </Link>
            </CardContent>
            <CardFooter className="flex flex-col text-left items-start gap-2">
              <p className="text-xs">
                Created at {toDateFunction((file as FileObject).createdAt)}
              </p>
              <p className="text-xs">
                Size is {toFileSize((file as FileObject).size)}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultList;
