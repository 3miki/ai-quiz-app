"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
// https://www.npmjs.com/package/qrcode.react

interface QuizLevelProps {
  setPageNumber: (pageNumber: number) => void;
  setLevel: (level: string) => void;
}

// update the level state and set the page number
const QuizLevel: React.FC<QuizLevelProps> = ({ setPageNumber, setLevel }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 max-w-[700px] mx-auto">
      <h2 className="text-xl text-center">
        Select the difficulty level of the quiz!
      </h2>
      <select
        className="w-36 rounded-md bg-white p-2 text-orange-500 hover:bg-orange-100 border-2  border-orange-500 focus:outline-none"
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button
        onClick={() => {
          console.log("clicked");
          setPageNumber(2);
        }}
        type="submit"
        className="w-36 rounded-md bg-orange-500 p-2 text-white hover:bg-orange-600 border-2  border-orange-500 focus:outline-none"
      >
        Send
      </button>
    </div>
  );
};

interface StartGameProps {
  level: string;
}

// display the QR code and the button to start the game
const StartGame: React.FC<StartGameProps> = ({ level }) => {
  const url_path = process.env.NEXT_PUBLIC_SERVER_URL;
  const qrCodeUrl = `${url_path}/upload?level=${level}`;

  return (
    <div className="flex justify-center items-center flex-col gap-4 max-w-[700px] mx-auto">
      <h2 className="text-xl text-center">
        Scan the QR code to upload your own photos!
      </h2>
      <QRCodeSVG value={qrCodeUrl} />
      <button
        onClick={() => {
          console.log("clicked");
          window.location.href = `/upload?level=${level}`;
        }}
        type="submit"
        className="w-36 rounded-md bg-white p-2 text-orange-500 hover:bg-orange-100 border-2  border-orange-500 focus:outline-none"
      >
        Uploader
      </button>
      <h2 className="text-xl text-center">
        Click the button below to start the quiz when everyone is ready!
      </h2>
      <button
        onClick={() => {
          console.log("clicked");
          window.location.href = "/game";
        }}
        type="submit"
        className="w-36 rounded-md bg-orange-500 p-2 text-white hover:bg-orange-600 border-2  border-orange-500 focus:outline-none"
      >
        Let's Go!
      </button>
    </div>
  );
};

export default function Home() {
  const [level, setLevel] = useState("easy");
  const initialPage =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("page")
      : null;
  const [pageNumber, setPageNumber] = useState(
    initialPage ? parseInt(initialPage) : 1
  );

  return (
    <div className="flex justify-center items-center flex-col gap-4 max-w-[700px] mx-auto">
      <h1 className="text-center text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent mt-4">
        PhoTrivia
      </h1>
      {pageNumber === 1 ? (
        <QuizLevel setPageNumber={setPageNumber} setLevel={setLevel} />
      ) : undefined}
      {pageNumber === 2 ? <StartGame level={level} /> : undefined}
    </div>
  );
}
