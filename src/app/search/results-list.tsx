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
import { Button } from "@/components/ui/button";

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
            <CardFooter className="flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-xs">
                  Created at {toDateFunction((file as FileObject).createdAt)}
                </p>
                <p className="text-xs">
                  Size is {toFileSize((file as FileObject).size)}
                </p>
              </div>
              <div>
                <Button asChild size={"sm"}>
                  <Link href={`/customize/${(file as FileObject).fileId}`} className="font-semibold">
                    Customize
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default ResultList;
