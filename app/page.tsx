import Link from "next/link";

import { RiRobot2Fill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900 p-4">
      <div className="h-full w-full space-y-20">
        <div className="space-y-4">
          <h2 className="break-words text-center text-7xl font-semibold tracking-wider text-white">
            &lt;EigenReader/&gt;
          </h2>
          <h2 className="text-center text-3xl tracking-wider text-white">
            Effortless text-to-speech <mark>highlighting</mark>
          </h2>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col space-y-4 pb-48">
          <h2 className="text-left text-3xl font-semibold text-white">
            Demo Pages
          </h2>

          <Link
            className="flex items-center justify-between rounded-xl bg-neutral-200 px-6 py-4 transition-colors hover:bg-blue-100"
            href={"/usecases"}
          >
            <h2 className="text-xl font-bold">AI Use Cases</h2>
            <div className="flex h-full items-center justify-center">
              <RiRobot2Fill size={28} />
            </div>
          </Link>
          <Link
            className="flex items-center justify-between rounded-xl bg-neutral-200 px-6 py-4 transition-colors hover:bg-yellow-100"
            href={"/customersupport"}
          >
            <h2 className="text-xl font-bold">Customer Support</h2>
            <div className="flex h-full items-center justify-center">
              <RiCustomerService2Fill size={28} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
