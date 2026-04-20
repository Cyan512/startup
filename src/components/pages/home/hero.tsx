import { cn } from "@/src/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const data = [
  {
    title: "Desarrollo",
    subtitle: "Creamos sistemas web y aplicaciones a medida para impulsar tu negocio.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    href: "service"
  },
  {
    title: "Diseño",
    subtitle: "Interfaces modernas y experiencias digitales pensadas para el usuario.",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    href: "services"
  },
  {
    title: "Soporte",
    subtitle: "Mantenimiento, optimización y soporte continuo para tus sistemas.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    href: "services"
  },
];

export default function Hero() {
  return (
    <section className="flex-1">
      <div className="relative hidden h-screen flex-1 overflow-hidden lg:block">
        <div className="absolute inset-0">
          {data.map((item, index) => {
            return (
              <Link key={index} href={item.href} className="group absolute bottom-0 top-0 w-[calc(38%+60px)] cursor-pointer" style={{
                left: `calc(${index * 32}% - ${index * 30}px)`,
                zIndex: index + 1,
              }}>
                <div className="absolute inset-0 overflow-hidden transform-[skewX(-12deg)] origin-[bottom_left]">
                  <div className="absolute -left-[10%] -right-[10%] inset-y-0 transform-[skewX(12deg)] origin-[bottom_left]">
                    <Image src={item.image} alt="" fill className="h-full w-full object-cover brightness-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-75 group-hover:saturate-[1.2]" />
                  </div>
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/70 group-hover:via-black/15"
                  />
                </div>
                <div className={cn("absolute bottom-0 left-0 right-0 z-10 pb-8 transition-transform duration-300 group-hover:-translate-y-1.5",
                  index === 0 ? "lg:pl-8 pl-6 pr-6" : "lg:pl-12 pl-6 pr-6"
                )}>
                  <div className="mb-1 flex items-center gap-2">
                    <h2 className="text-base font-bold uppercase tracking-[0.15em] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                      {item.title}
                    </h2>
                    <span className="text-xs text-white transition-transform duration-300 group-hover:translate-x-1">
                      <FaAngleRight />
                    </span>
                  </div>
                  <p className="max-w-40 text-xs leading-relaxed text-gray-400 opacity-75 transition-opacity duration-300 group-hover:opacity-100">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
