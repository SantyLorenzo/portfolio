"use client"

import { ReactLenis } from "@/lib/lenis"

export default function Home() {
  return (
    <main className="h-full px-10 flex gap-[30rem] items-center">
      <ReactLenis root options={{ orientation: "horizontal", smoothWheel: true }}>
        <div className="flex flex-col gap-10" >
          <h1 className="text-[200px] leading-[8rem] font-bold uppercase tracking-tighter">
            Santiago <br /> Lorenzo
          </h1>
          <p className="text-5xl leading-[3rem] tracking-tighter">
            Through scalable <span className="text-green-500">system design </span> and <br />
            web development I help companies around <br />
            the world grow their business.
          </p>
        </div >
      </ReactLenis>
    </main>
  );
}