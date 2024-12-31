"use client"
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams } from 'next/navigation';

const SearchInput = () => {

    // const[search, setSearch] = React.useState("");
    const query = useSearchParams();

  return (
    <Input
          name="search"
          type="search"
          defaultValue={query.get("q") ??  ""}
          placeholder="Search memes..."
          className="md:w-[100px] lg:w-[300px]"
        />
  )
}

export default SearchInput