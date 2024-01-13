import Image from "next/image";
import NextJS from "@/assets/nextjs-logo.png";

const AlbumPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-4xl font-bold py-8">Album</h1>
      <h2 className="text-2xl font-semibold">Using Image Component</h2>
      <Image
        src={"https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"}
        width={500}
        height={500}
        alt="Next JS logo"
      />
      <Image src={NextJS} alt="Next JS logo" />
      {/* Not Recommended */}
      {/* <img
        src={"https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo.png"}
        width={"500px"}
        height={"500px"}
        alt="Next JS logo"
      /> */}
    </div>
  );
};

export default AlbumPage;
