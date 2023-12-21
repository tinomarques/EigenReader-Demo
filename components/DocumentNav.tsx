import Link from "next/link";

import { IoChevronBack } from "react-icons/io5";

interface DocumentNavProps {
  title: string;
}

export default function DocumentNav(props: DocumentNavProps) {
  return (
    <div className="h-56 bg-neutral-900">
      <Link
        className="fixed left-4 top-4 text-xl font-bold text-white"
        href={"/"}
      >
        <div className=" flex cursor-pointer select-none items-center gap-3 rounded-2xl border-[1px] border-gray-400 border-opacity-50 bg-gray-800 bg-opacity-10 bg-clip-padding px-6 py-3 shadow-xl backdrop-blur-lg backdrop-filter hover:scale-105">
          <IoChevronBack size={32} />
        </div>
      </Link>

      <div
        className="flex h-full w-full flex-col items-center justify-center"
        style={{
          backgroundImage: "url(/images/waves.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom 20px right",
        }}
      >
        <div className="space-y-4 max-lg:space-y-2"></div>
        <h1 className="text-5xl font-bold tracking-widest text-white max-lg:text-3xl">
          Eigen Partners
        </h1>
        <h2 className="text-2xl tracking-widest text-neutral-50 max-lg:text-xl">
          {props.title}
        </h2>
      </div>
    </div>
  );
}
