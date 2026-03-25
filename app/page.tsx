import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center p-4 gap-4">
      <Link href="/dashboard" className="text-blue-500 underline">
        Dashboard
      </Link>
    </div>
  );
};

export default Page;
