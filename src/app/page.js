import Counter from "@/components/Counter/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Next App</h1>
      <div className="space-x-4">
        <Link className="px-4 py-2 bg-slate-200" href={"/album"}>Album</Link>
        <Link className="px-4 py-2 bg-slate-200" href={"/about"}>About</Link>
        <Link className="px-4 py-2 bg-slate-200" href={"/products/5"}>Products</Link>
        <Link className="px-4 py-2 bg-slate-200" href={"/blogs"}>Blogs</Link>
        <Link className="px-4 py-2 bg-slate-200" href={"/contact"}>Contact</Link>
        <Link className="px-4 py-2 bg-slate-200" href={"/projects"}>Projects</Link>
        <Link className="px-4 py-2 bg-slate-200" href={"/skills"}>Skills</Link>
      </div>
      <Counter />
    </main>
  );
}
