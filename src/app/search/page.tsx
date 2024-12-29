import { unstable_noStore } from "next/cache";
import ImageKit from "imagekit";

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

  return (
    <div>
      {files.map((file) => (
        <div key={file.updatedAt}>
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  );
}
