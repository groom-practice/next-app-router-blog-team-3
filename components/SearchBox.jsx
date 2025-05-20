"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react"

export default function SearchBox() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (text) {
      params.set("q", text);
    } else {
      params.delete("q");
    }
    router.push("?" + params.toString());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="검색어 입력"
      />
      <button type="submit">검색</button>
    </form>
  )
}