import { getServerSession } from "next-auth";
import { User } from "./components/test";
import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
        <User />
      </div>
    </main>
  );
}
