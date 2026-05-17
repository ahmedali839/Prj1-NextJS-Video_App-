import Image from "next/image";
import { apiClient } from "../lib/api-client";

async function getLocalVideos() {
  const dataType = await apiClient.getVideos();
  console.log(typeof dataType);
}

export default function Home() {
  const data = getLocalVideos();
  console.log(data);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>let's build it in short time, Ahmed!!</h2>
        <h3>Video App, is being started, so, let's work on it</h3>
        
      </main>
    </div>
  );
}
