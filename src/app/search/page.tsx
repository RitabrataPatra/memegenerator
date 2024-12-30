import { unstable_noStore } from "next/cache";
import ImageKit from "imagekit";;
import ResultList from "./results-list";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  unstable_noStore();
  const query = await Promise.resolve(searchParams.q);

  const files = await imagekit.listFiles({
    searchQuery: `name:${query}`,
  });
  // console.log(files);
  return (
    <div className="container space-y-8 py-8">
      <h1 className="text-3xl font-bold">Search results for : {query}</h1>
      <ResultList files={files}/>
    </div>
  );
}
