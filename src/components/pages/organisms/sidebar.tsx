'use client'

import { Navigation } from "@/src/data/navigation";
import { cn } from "@/src/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="relative hidden h-screen w-64 shrink-0 flex-col justify-between overflow-hidden p-10 lg:flex">
      <div className="relative z-10">
        <p className="mb-1 text-xs uppercase tracking-[0.3em] text-gray-400">
          Erick
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold uppercase leading-tight tracking-wide wrap-break-word text-white">
          Uscachi
        </h1>
      </div>
      <nav className="relative z-10 mt-16 flex flex-col">
        {Navigation.map((data) => {
          const isActive = pathname === data.href
          return (  
            <Link key={data.id} href={data.href} className={cn("border-b border-gray-800 py-2.5 text-xs uppercase tracking-widest text-gray-300 transition-colors hover:text-white",
              isActive
                ? "font-bold"
                : "font-normal"
            )}>
              {data.label}
            </Link>
          )
        })}
      </nav>
      <div></div>
    </aside >
  )
}
