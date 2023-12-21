"use client";
import { useRef, useEffect, useState } from "react";
import { useInterval, useUpdateEffect } from "usehooks-ts";

import Mark from "mark.js";

interface EigenReaderProps {
  divId: string;
  audioSrc: string;
  timeStamps: string;
  timingOffset?: number;
}

export default function EigenReader(props: EigenReaderProps) {
  // On Mount
  const [isPlaying, setIsPlaying] = useState(false);

  const timingOffset = useRef<number>(0);
  if (props.timingOffset) timingOffset.current = props.timingOffset;
  else {
    timingOffset.current = 0;
  }

  const escapedDivTextContent = useRef<string>("");
  const updatedEscapedDivTextContent = useRef<string>("");
  const divElementMark = useRef<Mark | null>(null);

  const wordList = useRef<string[]>([""]);
  const startList = useRef<number[]>([0]);
  const endList = useRef<number[]>([0]);

  const currentIndex = useRef<number>(0);
  const currentWord = useRef<string>("");

  useEffect(() => {
    // Asign escaped div textContent + it's updating default, and new Mark from Id
    let divElement = document.getElementById(props.divId);
    if (divElement && divElement.textContent) {
      escapedDivTextContent.current = divElement.textContent
        .replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&")
        .toLowerCase();
      wordList.current = escapedDivTextContent.current.split(" ");
    }

    updatedEscapedDivTextContent.current = escapedDivTextContent.current;
    if (divElement) divElementMark.current = new Mark(divElement);

    // Get all words(from html content), and their start + ends (from timeStamps) into lists
    let json = JSON.parse(props.timeStamps);

    startList.current = json.segments.flatMap((segment: any) =>
      segment.words.map((word: any) => word.start),
    );
    endList.current = json.segments.flatMap((segment: any) =>
      segment.words.map((word: any) => word.end),
    );

    // console.log(escapedDivTextContent.current);
    // console.log(wordList.current);
    // console.log(startList.current);
    // console.log(endList.current);
  }, []);

  //Audio player
  const audioPlayer = useRef<HTMLAudioElement>(null);

  useUpdateEffect(() => {
    // Start/stop player
    if (isPlaying && audioPlayer.current) {
      audioPlayer.current.play();
    }
    if (!isPlaying && audioPlayer.current && divElementMark.current) {
      audioPlayer.current.pause();
      // Reset currentIndex, updatedEscapedDivTextContent, currentTime, and unmark
      currentIndex.current = 0;
      updatedEscapedDivTextContent.current = escapedDivTextContent.current;
      audioPlayer.current.currentTime = 0;
      divElementMark.current.unmark();
    }
  }, [isPlaying]);

  // Update audio player currentTime much faster than allowed by callback
  useInterval(
    () => {
      if (audioPlayer.current) {
        // Add timingOffset to currentTime
        const currentTime =
          audioPlayer.current.currentTime + timingOffset.current;

        // Check if currentTime is between the start and end of current wordIndex
        if (
          currentTime >= startList.current[currentIndex.current] &&
          currentTime <= endList.current[currentIndex.current]
        ) {
          if (currentWord.current != wordList.current[currentIndex.current]) {
            // Set currentWord from word list
            currentWord.current = wordList.current[currentIndex.current] + " ";

            // Update EscapedDivInnerText to compare lookahead against
            updatedEscapedDivTextContent.current =
              updatedEscapedDivTextContent.current
                .slice(currentWord.current.length)
                .trimStart();

            // Move to next word in word list
            currentIndex.current++;

            // Check for pronouncable search word -> do another pass
            let unpronouncableRegex = /^[^a-zA-Z0-9+&]+$/;
            if (unpronouncableRegex.test(currentWord.current)) {
              // Set currentWord from word list
              currentWord.current =
                wordList.current[currentIndex.current] + " ";
              // Update EscapedDivInnerText to compare lookahead against
              updatedEscapedDivTextContent.current =
                updatedEscapedDivTextContent.current
                  .slice(currentWord.current.length)
                  .trimStart();
              // Move to next word in word list
              currentIndex.current++;
            }

            //Highlight current word
            if (divElementMark.current) {
              //Unmark previous highlight
              divElementMark.current.unmark();

              // Run RegExp search
              const regExp = new RegExp(
                `${currentWord.current}(?=[\s\S]*?${updatedEscapedDivTextContent.current})`,
                "i",
              );

              // Mark match
              divElementMark.current.markRegExp(regExp, {
                acrossElements: true,
              });
              console.log(currentWord.current);
            }
          }
        }
      }
    },
    isPlaying ? 1 : null,
  );

  return (
    <div
      className="fixed right-4 top-4 flex cursor-pointer select-none items-center gap-3 rounded-2xl border-[1px] border-gray-400 border-opacity-50 bg-gray-800 bg-opacity-10 bg-clip-padding px-6 py-3 shadow-xl backdrop-blur-lg backdrop-filter hover:scale-105"
      onClick={isPlaying ? () => setIsPlaying(false) : () => setIsPlaying(true)}
    >
      <audio
        ref={audioPlayer}
        src={props.audioSrc}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="relative h-8 w-8 rounded-full bg-white">
        <div
          className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-indigo-700 opacity-50 transition-transform ${
            isPlaying ? "translate-x-1 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`absolute bottom-1 right-1 h-5 w-5 rounded-full bg-cyan-500 opacity-50 transition-transform ${
            isPlaying ? "-translate-x-1 -translate-y-1" : ""
          }`}
        ></div>
      </div>
      <h1 className="text-xl font-bold text-white">
        {isPlaying ? "Stop Reading" : "Read Aloud"}
      </h1>
    </div>
  );
}
