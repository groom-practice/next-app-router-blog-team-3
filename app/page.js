import PostList from "./write/_components/PostList";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="mx-7 my-10">
      <h1 className="text-xl font-bold mb-4">글 목록</h1>
      <PostList posts={posts} />
    </main>
  );
}
