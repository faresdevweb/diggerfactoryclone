import { RegisterForm } from "./(components)";
import { prisma } from "@/db/prisma";

const Home = () => {
  const getUser = async () => {
    "use server";
    const data = await prisma.user.findMany({});
    if (data.length === 0) {
      console.log("No users found");
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Home;
