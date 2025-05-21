import SearchBox from "../components/SearchBox";
import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage({ searchParams }) {
  const posts = await getPosts();
  const searchKeyword = await searchParams?.q || "";

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  return (
    <main>
      <h1 className="text-xl font-bold mb-4">글 목록</h1>
      <SearchBox />
      <ul className="space-y-2">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
