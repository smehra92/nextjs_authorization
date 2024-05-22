import Image from "next/image";
import Dashboard from "../../components/Dashboard";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center h-screen max-w-7xl mx-auto my-12">
      <Dashboard />
    </main>
  );
}
