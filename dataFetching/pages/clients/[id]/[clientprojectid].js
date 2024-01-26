import { useRouter } from "next/router";
export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Selected Client Project Page</h1>
    </div>
  );
}
