import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Main = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return <div className="text-center text-4xl">Not logged in</div>;
  }

  return (
    <div>
      <div className="text-center text-xl">
        {session?.user && (
          <>
            <h1 className="text-4xl font-bold text-center">Ready to build !</h1>
            <p>{session.user.name}</p>
            <p>{session.user.email}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
