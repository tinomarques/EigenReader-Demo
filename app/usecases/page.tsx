import path from "path";
import { promises as fs } from "fs";
import EigenReader from "@/components/EigenReader";

import DocumentNav from "@/components/DocumentNav";
import DocumentSection from "@/components/DocumentSection";

import Image from "next/image";
import slideImage from "@/public/images/slideImage.png";

export default async function UseCases() {
  const jsonPath = path.join(
    process.cwd(),
    "public",
    "/timeStamps/use-cases.json",
  );
  const file = await fs.readFile(jsonPath, "utf8");
  const timeStamps = JSON.stringify(JSON.parse(file));

  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50">
      <EigenReader
        divId="use-cases"
        audioSrc="/audio/use-cases.mp3"
        timeStamps={timeStamps}
        timingOffset={-0.55}
      />

      <DocumentNav title="AI Use Cases" />
      <div id="use-cases">
        <div className="flex flex-col"></div>

        <DocumentSection section="Sequential Task Automation" />
        <div className="flex max-lg:flex-wrap">
          <div className="flex w-full items-center justify-center">
            <div className="flex max-w-5xl flex-col space-y-4 p-7 pt-4">
              <h1 className="mb-8 text-4xl font-bold">
                AI Can Now execute sequences of connected tasks across web and
                SaaS tools that require reasoning
              </h1>

              <h2 className="text-2xl font-bold">
                How It Works / Why It Matters
              </h2>
              <div className="space-y-2 text-lg">
                <h3>• AI now has a sense of “vision” plus reasoning</h3>
                <h3>
                  • Prior tech like RPA was based on hard-coded workflows and
                  processes that took lots of money to setup, limiting utility
                  and reliability
                </h3>
                <h3>
                  • <span className="font-bold">Why this matters:</span> Many
                  processes are based on interacting with websites + SaaS apps
                </h3>
              </div>

              <h2 className="pt-8 text-2xl font-bold">
                Sample Industries / Use Cases
              </h2>
              <div className="space-y-2 text-lg">
                <h3>• Order Management & Procurement </h3>
                <h3>• Logistics Transport Management</h3>
                <h3>• KYC / KYB </h3>
                <h3>• Insurance Claims Processing</h3>
                <h3>• Web Scraping & Data Extraction </h3>
              </div>
            </div>
          </div>
          <div className="select-none bg-black pt-28 max-lg:py-4">
            <Image src={slideImage} width={1000} priority alt="slide"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
