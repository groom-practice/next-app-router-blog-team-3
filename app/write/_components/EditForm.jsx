"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  if (!title && !content) return alert("제목, 내용을 입력해주세요.");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        category,
      }),
    });

    router.push("/");
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <label className="text-xl font-semibold">글 제목</label>
        <input
          className="p-4 w-90 h-11 loading-11 border border-blue-800"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="글 제목을 입력해주세요."
        />
      </div>
      <div>
        <label>카테고리</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="react">React</option>
          <option value="next">Next.JS</option>
          <option value="javascript">Javascript</option>
        </select>
      </div>
      <div className="flex items-start gap-4">
        <label className="text-xl font-semibold">글 내용</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="글 내용을 입력해주세요."
          className="p-4 w-90 h-50 loading-11 border border-blue-800"
        />
      </div>
      <div>
        <button className="w-108 h-12 loading-11 text-white bg-blue-600 text-center cursor-pointer">
          작성 완료
        </button>
      </div>
    </form>
  );
}
