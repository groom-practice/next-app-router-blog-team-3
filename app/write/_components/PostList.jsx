"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import SearchBox from "./SearchBox";

export default function PostList({ posts }) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  const filteredPosts = posts.filter((post) => {
    const matchesKeyword =
      !keyword || post.title.toLowerCase().includes(keyword.toLowerCase());
    const matchesCategory = !category || post.category === category;
    return matchesKeyword && matchesCategory;
  });

  return (
    <>
      <SearchBox />
      <div className="flex gap-3 mt-5">
        {["All", "React", "Next.js", "JavaScript"].map((cat) => (
          <Link
            key={cat}
            href={cat === "All" ? "/" : `/?category=${cat}`}
            className="px-3 py-1 rounded-[10px] border bg-blue-100 text-blue-600 text-sm font-medium hover:bg-blue-300 transition"
          >
            {cat}
          </Link>
        ))}
      </div>

      <ul className="flex flex-col items-start space-y-3 my-5">
        {filteredPosts.map((post) => (
          <li
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl  mb-2 shadow-sm flex items-center transition hover:shadow-md hover:bg-gray-300"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-base font-semibold text-blue-700 px-4 py-3"
            >
              {post.title}

              <span className="ml-3 text-xs text-gray-500">{`[${post.category}]`}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
