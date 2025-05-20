"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  return (
    <main>
      <h1 className="text-xl font-bold mb-4">글 수정</h1>
      <input
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full h-40 mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        수정 완료
      </button>
    </main>
  );
}
