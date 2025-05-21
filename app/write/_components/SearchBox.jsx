"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");

  const onSubmit = (e) => {
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
    <form onSubmit={onSubmit} className="flex mb-4 gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="검색어 입력"
        className="w-60 px-3 py-2 rounded-[10px] border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-400 shadow-sm transition"
      />
      <button
        type="submit"
        className="px-10 py-2 rounded-[10px] bg-blue-500 text-white hover:bg-blue-800 transition"
      >
        검색
      </button>
    </form>
  );
}
