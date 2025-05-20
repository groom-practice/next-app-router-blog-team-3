import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <h1 className="font-bold text-xl mb-3">
        글 목록
      </h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-blue-500 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}