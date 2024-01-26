import { useRouter } from "next/router";
export default function BlogPostPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>THe Blog Post</h1>
    </div>
  );
}
