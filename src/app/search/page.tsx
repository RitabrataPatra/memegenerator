import { unstable_noStore } from "next/cache";
import ImageKit from "imagekit";;
import ResultList from "./results-list";
import Upload from "@/components/Upload";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  unstable_noStore();
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q || "";

  const files = await imagekit.listFiles({
    searchQuery: `name:${query}`,
  });
  // console.log(files);
  return (
    <div className="p-4 space-y-8 py-8">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Search Results</h1>
        <Upload/>
      </div>
      <ResultList files={files}/>
    </div>
  );
}
