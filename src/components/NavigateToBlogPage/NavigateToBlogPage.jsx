"use client";

import { useRouter } from "next/navigation";

const NavigateToBlogPage = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/blogs");
  };

  return (
    <div className="px-20 py-8">
      <p
        onClick={handleNavigate}
        className="underline text-blue-700 cursor-pointer"
      >
        Navigate to Blog Page
      </p>
    </div>
  );
};

export default NavigateToBlogPage;
