import EigenReader from "@/components/EigenReader";

import DocumentNav from "@/components/DocumentNav";
import DocumentSection from "@/components/DocumentSection";

import Image from "next/image";
import slideImage from "@/public/images/slideImage.png";

export default async function UseCases() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-50">
      <EigenReader
        divId="use-cases"
        audioSrc="/audio/use-cases.mp3"
        timeStamps={JSON.stringify({
          text: " Sequential task automation. AI can now execute sequences of connected tasks across web and SaaS tools that require reasoning. How it works, why it matters. AI now has a sense of vision plus reasoning. Prior tech, like RPA, was based on hard-coded workflows and processes that took lots of money to set up, limiting utility and reliability. Why this matters. Many processes are based on interacting with websites, plus SaaS apps, sample industries, use cases, order management and procurement, logistics transport management, KYC, KYB, insurance claims processing, web scraping and data extraction.",
          segments: [
            {
              id: 0,
              seek: 0,
              start: 0.0,
              end: 1.4,
              text: " Sequential task automation.",
              tokens: [50365, 46859, 2549, 5633, 17769, 13, 50450],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 0.908,
              words: [
                {
                  text: "Sequential",
                  start: 0.0,
                  end: 0.48,
                  confidence: 0.89,
                },
                {
                  text: "task",
                  start: 0.48,
                  end: 0.92,
                  confidence: 0.86,
                },
                {
                  text: "automation.",
                  start: 0.92,
                  end: 1.4,
                  confidence: 0.998,
                },
              ],
            },
            {
              id: 1,
              seek: 0,
              start: 2.48,
              end: 5.48,
              text: " AI can now execute sequences of connected tasks",
              tokens: [
                50490, 7318, 393, 586, 14483, 22978, 295, 4582, 9608, 50654,
              ],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 0.997,
              words: [
                {
                  text: "AI",
                  start: 2.48,
                  end: 2.68,
                  confidence: 1.0,
                },
                {
                  text: "can",
                  start: 2.68,
                  end: 3.06,
                  confidence: 1.0,
                },
                {
                  text: "now",
                  start: 3.06,
                  end: 3.36,
                  confidence: 1.0,
                },
                {
                  text: "execute",
                  start: 3.36,
                  end: 3.76,
                  confidence: 1.0,
                },
                {
                  text: "sequences",
                  start: 3.76,
                  end: 4.34,
                  confidence: 0.991,
                },
                {
                  text: "of",
                  start: 4.34,
                  end: 4.72,
                  confidence: 0.989,
                },
                {
                  text: "connected",
                  start: 4.72,
                  end: 5.04,
                  confidence: 1.0,
                },
                {
                  text: "tasks",
                  start: 5.04,
                  end: 5.48,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 2,
              seek: 0,
              start: 5.5,
              end: 8.76,
              text: " across web and SaaS tools that require reasoning.",
              tokens: [
                50654, 2108, 3670, 293, 49733, 3873, 300, 3651, 21577, 13,
                50814,
              ],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 0.99,
              words: [
                {
                  text: "across",
                  start: 5.5,
                  end: 6.2,
                  confidence: 1.0,
                },
                {
                  text: "web",
                  start: 6.2,
                  end: 6.54,
                  confidence: 0.987,
                },
                {
                  text: "and",
                  start: 6.54,
                  end: 6.78,
                  confidence: 1.0,
                },
                {
                  text: "SaaS",
                  start: 6.78,
                  end: 7.14,
                  confidence: 0.949,
                },
                {
                  text: "tools",
                  start: 7.14,
                  end: 7.48,
                  confidence: 1.0,
                },
                {
                  text: "that",
                  start: 7.48,
                  end: 7.96,
                  confidence: 0.982,
                },
                {
                  text: "require",
                  start: 7.96,
                  end: 8.3,
                  confidence: 1.0,
                },
                {
                  text: "reasoning.",
                  start: 8.3,
                  end: 8.76,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 3,
              seek: 0,
              start: 9.86,
              end: 12.08,
              text: " How it works, why it matters.",
              tokens: [50859, 1012, 309, 1985, 11, 983, 309, 7001, 13, 50977],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 0.997,
              words: [
                {
                  text: "How",
                  start: 9.86,
                  end: 10.0,
                  confidence: 1.0,
                },
                {
                  text: "it",
                  start: 10.0,
                  end: 10.14,
                  confidence: 1.0,
                },
                {
                  text: "works,",
                  start: 10.14,
                  end: 10.5,
                  confidence: 1.0,
                },
                {
                  text: "why",
                  start: 10.64,
                  end: 11.38,
                  confidence: 0.982,
                },
                {
                  text: "it",
                  start: 11.38,
                  end: 11.62,
                  confidence: 1.0,
                },
                {
                  text: "matters.",
                  start: 11.62,
                  end: 12.08,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 4,
              seek: 0,
              start: 12.9,
              end: 16.0,
              text: " AI now has a sense of vision plus reasoning.",
              tokens: [
                51024, 7318, 586, 575, 257, 2020, 295, 5201, 1804, 21577, 13,
                51172,
              ],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 1.0,
              words: [
                {
                  text: "AI",
                  start: 12.9,
                  end: 13.38,
                  confidence: 1.0,
                },
                {
                  text: "now",
                  start: 13.38,
                  end: 13.68,
                  confidence: 1.0,
                },
                {
                  text: "has",
                  start: 13.68,
                  end: 13.94,
                  confidence: 1.0,
                },
                {
                  text: "a",
                  start: 13.94,
                  end: 14.08,
                  confidence: 1.0,
                },
                {
                  text: "sense",
                  start: 14.08,
                  end: 14.34,
                  confidence: 1.0,
                },
                {
                  text: "of",
                  start: 14.34,
                  end: 14.54,
                  confidence: 1.0,
                },
                {
                  text: "vision",
                  start: 14.54,
                  end: 14.88,
                  confidence: 1.0,
                },
                {
                  text: "plus",
                  start: 14.88,
                  end: 15.56,
                  confidence: 0.996,
                },
                {
                  text: "reasoning.",
                  start: 15.56,
                  end: 16.0,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 5,
              seek: 0,
              start: 16.92,
              end: 20.89,
              text: " Prior tech, like RPA, was based on hard-coded workflows",
              tokens: [
                51229, 24032, 7553, 11, 411, 497, 10297, 11, 390, 2361, 322,
                1152, 12, 66, 12340, 43461, 51421,
              ],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 0.966,
              words: [
                {
                  text: "Prior",
                  start: 16.92,
                  end: 17.4,
                  confidence: 0.956,
                },
                {
                  text: "tech,",
                  start: 17.4,
                  end: 17.68,
                  confidence: 0.796,
                },
                {
                  text: "like",
                  start: 17.82,
                  end: 18.12,
                  confidence: 1.0,
                },
                {
                  text: "RPA,",
                  start: 18.12,
                  end: 18.62,
                  confidence: 1.0,
                },
                {
                  text: "was",
                  start: 18.86,
                  end: 19.36,
                  confidence: 0.845,
                },
                {
                  text: "based",
                  start: 19.36,
                  end: 19.6,
                  confidence: 1.0,
                },
                {
                  text: "on",
                  start: 19.6,
                  end: 19.84,
                  confidence: 1.0,
                },
                {
                  text: "hard-coded",
                  start: 19.84,
                  end: 20.5,
                  confidence: 1.0,
                },
                {
                  text: "workflows",
                  start: 20.5,
                  end: 20.89,
                  confidence: 0.998,
                },
              ],
            },
            {
              id: 6,
              seek: 0,
              start: 20.89,
              end: 24.23,
              text: " and processes that took lots of money to set up,",
              tokens: [
                51421, 293, 7555, 300, 1890, 3195, 295, 1460, 281, 992, 493, 11,
                51583,
              ],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 1.0,
              words: [
                {
                  text: "and",
                  start: 20.89,
                  end: 21.6,
                  confidence: 1.0,
                },
                {
                  text: "processes",
                  start: 21.6,
                  end: 22.06,
                  confidence: 1.0,
                },
                {
                  text: "that",
                  start: 22.06,
                  end: 22.56,
                  confidence: 1.0,
                },
                {
                  text: "took",
                  start: 22.56,
                  end: 22.76,
                  confidence: 1.0,
                },
                {
                  text: "lots",
                  start: 22.76,
                  end: 23.14,
                  confidence: 1.0,
                },
                {
                  text: "of",
                  start: 23.14,
                  end: 23.42,
                  confidence: 1.0,
                },
                {
                  text: "money",
                  start: 23.42,
                  end: 23.64,
                  confidence: 1.0,
                },
                {
                  text: "to",
                  start: 23.64,
                  end: 23.82,
                  confidence: 1.0,
                },
                {
                  text: "set",
                  start: 23.82,
                  end: 24.02,
                  confidence: 0.999,
                },
                {
                  text: "up,",
                  start: 24.02,
                  end: 24.23,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 7,
              seek: 0,
              start: 24.23,
              end: 26.86,
              text: " limiting utility and reliability.",
              tokens: [51599, 22083, 14877, 293, 24550, 13, 51715],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 1.0,
              words: [
                {
                  text: "limiting",
                  start: 24.23,
                  end: 24.88,
                  confidence: 1.0,
                },
                {
                  text: "utility",
                  start: 24.88,
                  end: 25.44,
                  confidence: 1.0,
                },
                {
                  text: "and",
                  start: 25.44,
                  end: 26.26,
                  confidence: 1.0,
                },
                {
                  text: "reliability.",
                  start: 26.26,
                  end: 26.86,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 8,
              seek: 0,
              start: 28.8,
              end: 29.74,
              text: " Why this matters.",
              tokens: [51786, 1545, 341, 7001, 13, 51860],
              temperature: 0.0,
              avg_logprob: -0.19042633949442112,
              compression_ratio: 1.5589519650655022,
              no_speech_prob: 0.0022358756978064775,
              confidence: 0.925,
              words: [
                {
                  text: "Why",
                  start: 28.8,
                  end: 29.0,
                  confidence: 0.794,
                },
                {
                  text: "this",
                  start: 29.0,
                  end: 29.36,
                  confidence: 0.998,
                },
                {
                  text: "matters.",
                  start: 29.36,
                  end: 29.74,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 9,
              seek: 3000,
              start: 30.26,
              end: 33.68,
              text: " Many processes are based on interacting with websites,",
              tokens: [
                50403, 5126, 7555, 366, 2361, 322, 18017, 365, 12891, 11, 50563,
              ],
              temperature: 0.0,
              avg_logprob: -0.1928102593672903,
              compression_ratio: 1.4484848484848485,
              no_speech_prob: 0.00046432315139099956,
              confidence: 1.0,
              words: [
                {
                  text: "Many",
                  start: 30.26,
                  end: 30.84,
                  confidence: 1.0,
                },
                {
                  text: "processes",
                  start: 30.84,
                  end: 31.32,
                  confidence: 1.0,
                },
                {
                  text: "are",
                  start: 31.32,
                  end: 31.82,
                  confidence: 1.0,
                },
                {
                  text: "based",
                  start: 31.82,
                  end: 32.12,
                  confidence: 1.0,
                },
                {
                  text: "on",
                  start: 32.12,
                  end: 32.36,
                  confidence: 1.0,
                },
                {
                  text: "interacting",
                  start: 32.36,
                  end: 32.86,
                  confidence: 1.0,
                },
                {
                  text: "with",
                  start: 32.86,
                  end: 33.34,
                  confidence: 1.0,
                },
                {
                  text: "websites,",
                  start: 33.34,
                  end: 33.68,
                  confidence: 0.999,
                },
              ],
            },
            {
              id: 10,
              seek: 3000,
              start: 34.56,
              end: 38.42,
              text: " plus SaaS apps, sample industries, use cases,",
              tokens: [
                50596, 1804, 49733, 7733, 11, 6889, 13284, 11, 764, 3331, 11,
                50798,
              ],
              temperature: 0.0,
              avg_logprob: -0.1928102593672903,
              compression_ratio: 1.4484848484848485,
              no_speech_prob: 0.00046432315139099956,
              confidence: 0.998,
              words: [
                {
                  text: "plus",
                  start: 34.56,
                  end: 34.8,
                  confidence: 1.0,
                },
                {
                  text: "SaaS",
                  start: 34.8,
                  end: 35.52,
                  confidence: 0.999,
                },
                {
                  text: "apps,",
                  start: 35.52,
                  end: 36.08,
                  confidence: 0.999,
                },
                {
                  text: "sample",
                  start: 36.2,
                  end: 36.74,
                  confidence: 1.0,
                },
                {
                  text: "industries,",
                  start: 36.74,
                  end: 37.14,
                  confidence: 1.0,
                },
                {
                  text: "use",
                  start: 37.52,
                  end: 38.08,
                  confidence: 0.987,
                },
                {
                  text: "cases,",
                  start: 38.08,
                  end: 38.42,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 11,
              seek: 3000,
              start: 39.14,
              end: 40.6,
              text: " order management and procurement,",
              tokens: [50826, 1668, 4592, 293, 35183, 11, 50906],
              temperature: 0.0,
              avg_logprob: -0.1928102593672903,
              compression_ratio: 1.4484848484848485,
              no_speech_prob: 0.00046432315139099956,
              confidence: 1.0,
              words: [
                {
                  text: "order",
                  start: 39.14,
                  end: 39.38,
                  confidence: 1.0,
                },
                {
                  text: "management",
                  start: 39.38,
                  end: 39.82,
                  confidence: 1.0,
                },
                {
                  text: "and",
                  start: 39.82,
                  end: 40.16,
                  confidence: 1.0,
                },
                {
                  text: "procurement,",
                  start: 40.16,
                  end: 40.6,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 12,
              seek: 3000,
              start: 41.96,
              end: 43.22,
              text: " logistics transport management,",
              tokens: [50943, 27420, 5495, 4592, 11, 51037],
              temperature: 0.0,
              avg_logprob: -0.1928102593672903,
              compression_ratio: 1.4484848484848485,
              no_speech_prob: 0.00046432315139099956,
              confidence: 1.0,
              words: [
                {
                  text: "logistics",
                  start: 41.96,
                  end: 41.98,
                  confidence: 1.0,
                },
                {
                  text: "transport",
                  start: 41.98,
                  end: 42.54,
                  confidence: 1.0,
                },
                {
                  text: "management,",
                  start: 42.54,
                  end: 43.22,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 13,
              seek: 3000,
              start: 44.02,
              end: 48.28,
              text: " KYC, KYB, insurance claims processing,",
              tokens: [
                51071, 41150, 34, 11, 41150, 33, 11, 7214, 9441, 9007, 11,
                51296,
              ],
              temperature: 0.0,
              avg_logprob: -0.1928102593672903,
              compression_ratio: 1.4484848484848485,
              no_speech_prob: 0.00046432315139099956,
              confidence: 0.991,
              words: [
                {
                  text: "KYC,",
                  start: 44.02,
                  end: 44.76,
                  confidence: 1.0,
                },
                {
                  text: "KYB,",
                  start: 44.88,
                  end: 46.18,
                  confidence: 0.994,
                },
                {
                  text: "insurance",
                  start: 46.36,
                  end: 46.98,
                  confidence: 0.954,
                },
                {
                  text: "claims",
                  start: 46.98,
                  end: 47.78,
                  confidence: 1.0,
                },
                {
                  text: "processing,",
                  start: 47.78,
                  end: 48.28,
                  confidence: 1.0,
                },
              ],
            },
            {
              id: 14,
              seek: 3000,
              start: 48.3,
              end: 51.36,
              text: " web scraping and data extraction.",
              tokens: [51296, 3670, 43738, 293, 1412, 30197, 13, 51443],
              temperature: 0.0,
              avg_logprob: -0.1928102593672903,
              compression_ratio: 1.4484848484848485,
              no_speech_prob: 0.00046432315139099956,
              confidence: 0.995,
              words: [
                {
                  text: "web",
                  start: 48.3,
                  end: 49.36,
                  confidence: 0.999,
                },
                {
                  text: "scraping",
                  start: 49.36,
                  end: 49.94,
                  confidence: 0.997,
                },
                {
                  text: "and",
                  start: 49.94,
                  end: 50.44,
                  confidence: 0.978,
                },
                {
                  text: "data",
                  start: 50.44,
                  end: 50.72,
                  confidence: 1.0,
                },
                {
                  text: "extraction.",
                  start: 50.72,
                  end: 51.36,
                  confidence: 1.0,
                },
              ],
            },
          ],
          language: "en",
          language_probs: {
            en: 0.9995344877243042,
            zh: 1.0414541975478642e-5,
            de: 3.758684761123732e-5,
            es: 0.00012552271073218435,
            ru: 5.309765128913568e-6,
            ko: 6.172819212224567e-6,
            fr: 7.31703985366039e-5,
            ja: 2.2294290829449892e-5,
            pt: 2.8478712920332327e-5,
            tr: 1.170520863524871e-5,
            pl: 3.575505388653255e-6,
            ca: 2.5142995241367316e-7,
            nl: 1.1153594641655218e-5,
            ar: 2.6084894670930225e-6,
            sv: 4.61878371424973e-5,
            it: 1.9203233023290522e-5,
            id: 2.34542176258401e-6,
            hi: 1.5608701460223529e-6,
            fi: 3.442976321821334e-6,
            vi: 3.87872887586127e-6,
            he: 2.3634889600998576e-7,
            uk: 9.862556993311955e-8,
            el: 9.269234624298406e-7,
            ms: 7.794550924700161e-7,
            cs: 6.080576326894516e-7,
            ro: 4.1929754956981924e-7,
            da: 2.0747304461110616e-6,
            hu: 1.0930027656286256e-6,
            ta: 4.0350343510908715e-7,
            no: 1.2210642807986005e-6,
            th: 4.222858478897251e-6,
            ur: 3.6736531683345675e-7,
            hr: 2.491326256404136e-7,
            bg: 2.4264986464572758e-8,
            lt: 2.728024561804432e-8,
            la: 3.646950972324703e-6,
            mi: 1.6657483001836226e-6,
            ml: 2.8234083515599195e-7,
            cy: 2.0002473320346326e-5,
            sk: 8.653024252680552e-8,
            te: 1.1723787451956014e-7,
            fa: 4.4282089106673084e-7,
            lv: 1.711957935413011e-7,
            bn: 3.772938725887798e-7,
            sr: 8.476418678071695e-9,
            az: 3.821446625806857e-8,
            sl: 2.407697081707738e-7,
            kn: 3.6073424247717867e-9,
            et: 1.4314061935749578e-8,
            mk: 2.4265296438841233e-9,
            br: 1.4952283322600124e-7,
            eu: 2.0426037750098658e-8,
            is: 1.7169874411138153e-7,
            hy: 6.64701786945443e-8,
            ne: 1.613614841744493e-8,
            mn: 4.456776281358543e-9,
            bs: 3.6074613518621845e-8,
            kk: 7.898359299929325e-9,
            sq: 3.573991591565573e-8,
            sw: 7.217599886644166e-7,
            gl: 4.1083069390879245e-8,
            mr: 7.736614016096155e-9,
            pa: 5.614394282815738e-8,
            si: 5.834842795593431e-7,
            km: 1.335620368081436e-6,
            sn: 8.579355608162587e-7,
            yo: 7.1350868324771e-8,
            so: 3.315006255610875e-11,
            af: 3.4049904229505046e-8,
            oc: 4.140234821647937e-9,
            ka: 8.411397134366894e-10,
            be: 2.0448167603603906e-9,
            tg: 7.492900744310305e-11,
            sd: 6.721956324895473e-9,
            gu: 2.3254975722863946e-9,
            am: 7.63197893771661e-10,
            yi: 1.1185160353477386e-8,
            lo: 3.704804019122321e-9,
            uz: 8.33136164224424e-12,
            fo: 8.084600544577825e-9,
            ht: 3.71140487231969e-8,
            ps: 3.517701241406712e-9,
            tk: 2.6580590159475115e-11,
            nn: 5.10666313857655e-6,
            mt: 3.1301945480066706e-9,
            sa: 8.577109156249207e-8,
            lb: 1.4179864227248373e-10,
            my: 1.6763713972522964e-8,
            bo: 1.0679491069254254e-8,
            tl: 5.333355943548668e-7,
            mg: 4.0843693011050064e-11,
            as: 3.105977253170522e-9,
            tt: 5.343772299659655e-11,
            haw: 3.772711920646543e-7,
            ln: 3.238691537177374e-10,
            ha: 1.5162138211621823e-10,
            ba: 3.671225823342894e-11,
            jw: 4.125261909848632e-7,
            su: 2.3094158529968212e-10,
            yue: 1.0070321820876416e-7,
          },
        })}
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
