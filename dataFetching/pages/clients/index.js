import Link from "next/link";
import { useRouter } from "next/router";
export default function ClientsPage() {
  const router = useRouter();
  //   console.log(router.query);
  const clients = [
    { id: "tejas", name: "tejas ravindra rote" },
    { id: "rote", name: "rote family" },
  ];
  return (
    <div>
      <h1>Client's Page</h1>
      <ul>
        {/* <li>
          <Link href="/clients/tejas">Tejas</Link>
        </li>
        <li>
          <Link href="/clients/rote">Rote</Link>
        </li> */}
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: "/clients/[id]", //[id] is the dynamic slug we used
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
