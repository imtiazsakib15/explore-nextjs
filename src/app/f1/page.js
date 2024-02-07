import Link from "next/link";

const F1Main = () => {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold">F1 Page</h1>
      <Link href="/f1/f2" className="text-blue-700 underline font-medium">
        F2 page link
      </Link>
    </div>
  );
};

export default F1Main;
