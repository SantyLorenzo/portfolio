import { MobileModel } from "@/models/Mobile/Mobile";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between gap-10">
      <Marquee speed={80} pauseOnHover direction='right'>
        <div className="py-6 bg-slate-950 text-white text-3xl">
          <p>
            A music streaming analysis and discovery tool built on Spotify's Web API. On Spotify's Web API. On Spotify's Web API. On Spotify's Web API. On Spotify's Web API.
          </p>
        </div>
      </Marquee>

      <div className="flex px-4 items-center justify-between gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-[200px] leading-[8rem] font-bold uppercase tracking-tighter">
            Santiago <br /> Lorenzo
          </h1>
          <p className="text-6xl leading-[3rem] tracking-tighter">
            Through scalable <span className="text-green-500">system design </span> and <br />
            web development I help companies around <br />
            the world grow their business.
          </p>
        </div>
      </div>

      <Marquee speed={80} pauseOnHover>
        <div className="py-6 bg-slate-950 text-white text-3xl">
          <p>
            A music streaming analysis and discovery tool built on Spotify's Web API. On Spotify's Web API. On Spotify's Web API. On Spotify's Web API. On Spotify's Web API.
          </p>
        </div>
      </Marquee>
    </main>
  );
}
