import Counter from "@/components/Counter/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Next App</h1>
      <Counter />
    </main>
  );
}
