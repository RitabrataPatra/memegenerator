
import { redirect } from "next/navigation";
import SearchInput from "./SearchInput";

export function Search() {
  return (
    <div>
      <form action={
        async(formData)=>{
          "use server";
          const search = formData.get("search");
          redirect(`/search?q=${search}`);
        }
      }>
        <SearchInput/>
      </form>
    </div>
  );
}
