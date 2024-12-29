import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";

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
        <Input
          name="search"
          type="search"
          placeholder="Search memes..."
          className="md:w-[100px] lg:w-[300px]"
        />
      </form>
    </div>
  );
}
