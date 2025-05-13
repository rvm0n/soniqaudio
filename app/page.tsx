import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShinyText } from "@/components/ui/shiny-text"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-black/80 z-0" />

      <main className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-12">
        {/* Logo/Brand */}
        <div className="space-y-2 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
            soniqaudio
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <span className="h-px w-12 bg-zinc-700" />
            <div className="text-lg md:text-xl text-zinc-400 font-light">
              <ShinyText text="building random music/dev ideas" speed={3} />
            </div>
            <span className="h-px w-12 bg-zinc-700" />
          </div>
        </div>

        {/* Logo image */}
        <div className="flex items-center justify-center w-full">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <Image
              src="/images/soniqaudio-logo.jpg"
              alt="soniqaudio logo"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto">
          <Button
            variant="outline"
            className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-300 h-14 w-full group"
            asChild
          >
            <Link href="https://x.com/rvm0n_" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 group-hover:text-blue-400 transition-colors fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span className="ml-2 flex flex-col items-center w-full">
                <span className="text-sm">follow the journey</span>
                <span className="text-xs text-zinc-500">x.com/rvm0n_</span>
              </span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-300 h-14 w-full group"
            asChild
          >
            <Link href="https://rvmon.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image
                src="/images/music-logo.jpg"
                alt="Music logo"
                width={20}
                height={20}
                className="h-5 w-5 group-hover:brightness-125 transition-all"
              />
              <span className="ml-2 flex flex-col items-center w-full">
                <span className="text-sm">my music</span>
                <span className="text-xs text-zinc-500">rvmon.xyz</span>
              </span>
            </Link>
          </Button>
        </div>
      </main>

      <footer className="relative z-10 mt-auto pt-12 pb-6 text-zinc-600 text-sm">
        <p>
          made by{" "}
          <Link
            href="https://x.com/rvm0n_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            rvmon
          </Link>{" "}
          | launching soon
        </p>
      </footer>
    </div>
  )
}
