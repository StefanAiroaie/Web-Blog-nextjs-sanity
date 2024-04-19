import Link from "next/link"
import { ModeToggle } from "./ModeToggle"



export default function Navbar() {
    return (

        <nav className="w-full flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
        <Link href={"/"} className="font-bold text-3xl">
          WebDev<span className="text-primary">Blog</span>
        </Link>
        <div className="flex gap-3">
      
        </div>
        <ModeToggle />
      </nav>

    )
}