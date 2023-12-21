import { promises as fs } from "fs";
import EigenReader from "@/components/EigenReader";

import DocumentNav from "@/components/DocumentNav";
import DocumentSection from "@/components/DocumentSection";

export default async function CustomerSupport() {
  const timeStamps = await fs.readFile(
    process.cwd() + "/public/timeStamps/customer-support.json",
    "utf8",
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50">
      <EigenReader
        divId="customer-support"
        audioSrc="/audio/customer-support.mp3"
        timeStamps={timeStamps}
      />

      <DocumentNav title="Customer Support" />

      <div id="customer-support">
        <div className="mb-8 flex flex-col space-y-8">
          <div>
            <DocumentSection section="// Goal" />
            <div className="flex justify-center">
              <h2 className="max-w-5xl p-4 text-lg">
                Describe the current path to cost-effective, scalable, reliable,
                and high-quality end-to-end automation of L1 Voice-Based
                Customer Support (L1 VBCS).
              </h2>
            </div>
          </div>

          <div>
            <DocumentSection section="// Summary" />
            <div className="flex justify-center">
              <h2 className="max-w-5xl p-4 text-lg">
                On the surface, a fully automated L1 VBCS agent seems like a
                simple problem of latency minimization and basic knowledge
                retrieval. However, building a true production-grade system that
                meets consumers' and brands' expectations is a much more complex
                problem requiring several pieces of significant technical
                infrastructure. With the right approach, it's possible to deploy
                an initial reliable, low-latency, FAQ-focused voice agent in
                approximately 2.5 months. By leveraging Foundever's unique
                access to transcripts and action-taking data, a more advanced
                agent capable of taking actions in client business systems could
                be operational in 4 months.
              </h2>
            </div>
          </div>

          <div>
            <DocumentSection section="// Scope" />
            <div className="flex justify-center">
              <h2 className="max-w-5xl p-4 text-lg">
                We define L1 VBCS tasks as those involving information answering
                requests and / or tasks taken on behalf of a customer requiring
                less than 3 turns of back and forth. These information answer
                requests can either be based on non-customer-specific knowledge
                base lookups or simple customer database lookups (requiring &lt;
                2 hops to get to). A few example tasks are below.*
              </h2>
            </div>
          </div>

          <div className="flex w-full justify-center">
            <div className="flex max-w-5xl ">
              <div className="flex w-1/2 flex-col border-[1px] border-black">
                <div className="border-r-[1px] border-white bg-black p-4">
                  <h1 className="text-2xl text-white">
                    Example Information Requests
                  </h1>
                </div>
                <div className="flex flex-col p-4">
                  <h2 className="text-lg">• Resolving FAQs</h2>
                  <h2 className="text-lg">
                    • Guiding through common processes with few steps, like
                    returns or exchanges
                  </h2>
                  <h2 className="text-lg">
                    • Providing status updates on orders or scheduled
                    appointments
                  </h2>
                </div>
              </div>

              <div className="flex w-1/2 flex-col border-[1px] border-black">
                <div className="border-l-[1px] border-white bg-black p-4">
                  <h1 className="text-2xl text-white">Example Actions</h1>
                </div>
                <div className="flex flex-col p-4">
                  <h2 className="text-lg">
                    • Updating customer information in a CRM
                  </h2>
                  <h2 className="text-lg">
                    • Handling changes to an account, like resetting a password
                  </h2>
                  <h2 className="text-lg">• Scheduling an appointment</h2>
                  <h2 className="text-lg">• Modifying an order</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
