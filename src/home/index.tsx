import Header from "@/components/custom/Header";
import { UserButton } from "@clerk/clerk-react";

function Home() {
  return (
    <>
      <Header />
      <h1>AI Resume Builder</h1>
      <UserButton />
    </>
  );
}

export default Home;
