import Link from "next/link";

export default function Home() {
  return (
    <main>
      Going to about page
      <p><Link href="/about" >About us</Link></p>
    </main>
  );
}
