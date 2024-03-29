import Link from "next/link";

const Notification = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-8">Notification</h1>{" "}
      <button className="py-12">
        <Link
          className="text-blue-700 underline font-semibold"
          href={"/dashboard/archived"}
        >
          Archived Notification
        </Link>
      </button>
    </div>
  );
};

export default Notification;
