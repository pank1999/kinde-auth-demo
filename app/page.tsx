import Image from "next/image";
import logo from "./../public/pankaj-pandey.jpeg";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <Image
        src={logo}
        alt="Logo"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-4xl font-bold">Welcome to Kinde OSS Demo</h1>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded"
        href={"/signin"}
      >
        Get Started
      </Link>
    </main>
  );
}
