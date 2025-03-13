import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const Footer = () => {
  return (
    <footer className={cn("flex justify-between w-full text-center py-4 bg-primary text-white text-lg px-6")}>
      <p>Made by <span className="font-semibold"><Link href="https://www.linkedin.com/in/kishanhere/" target="_blank">Kishan</Link></span> 🚀</p>
      <p>
        ⭐ Give a star on{" "}
        <Link
          href="https://github.com/KishanInnovates/magic-textbox"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </Link>
      </p>
    </footer>
  )
}

export { Footer }
