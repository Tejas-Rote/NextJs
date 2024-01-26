import { useRouter } from "next/router";
export default function ClientsProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadPorjectHandler() {
    //load data...
    // now to navigate awway

    // router.push("/clients/rote/projectA");

    // router.replace can also be used
    // instead of string , object can also be used just like used in client's page to setup links

    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "rote", clientprojectid: "projectA" },
    });
  }
  return (
    <div>
      <h1>Client's Project Page</h1>
      <button onClick={loadPorjectHandler}>Load Project A</button>
    </div>
  );
}
