import Counter from "@/components/Counter/Counter";
import NavigateToBlogPage from "@/components/NavigateToBlogPage/NavigateToBlogPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Next App</h1>
      <NavigateToBlogPage />
      <Counter />
    </main>
  );
}
