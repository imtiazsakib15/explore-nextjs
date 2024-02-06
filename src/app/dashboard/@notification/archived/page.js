import Link from "next/link";

const ArchivedNotification = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-8">Archived Notification</h1>
      <button className="py-12">
        <Link
          className="text-blue-700 underline font-semibold"
          href={"/dashboard"}
        >
          Default
        </Link>
      </button>
    </div>
  );
};

export default ArchivedNotification;
