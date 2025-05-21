import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "블로그 실습",
};

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <body className="p-5">
        <header className="mb-5">
          <nav className="space-x-5">
            <Link href="/">홈</Link>
            <Link href="/write">글 작성</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
