// app/api/posts/route.js

import { posts } from "../../../data/data";

export async function GET() {
  return Response.json(posts);
}

export async function POST(req) {
  const body = await req.json();
  const { title, content, category } = body;

  const newPost = {
    id: Date.now().toString(),
    title,
    content,
    category,
  };

  posts.push(newPost);

  return Response.json(newPost, { status: 201 });
}
