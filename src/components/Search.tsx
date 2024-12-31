
import { redirect } from "next/navigation";
import SearchInput from "./SearchInput";
import { Suspense } from "react";

export function Search() {
  return (
      <Suspense>
    <div>
      <form
        action={async (formData) => {
          "use server";
          const search = formData.get("search");
          redirect(`/search?q=${search}`);
        }}
      >
          <SearchInput />
      </form>
    </div>
        </Suspense>
  );
}
