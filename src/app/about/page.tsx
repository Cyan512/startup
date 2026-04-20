import { cn } from "@/src/lib/cn";
import Image from "next/image";

const team = [
  {
    name: "Carlos Mendoza",
    role: "Fundador & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
  },
  {
    name: "Sofia Ramirez",
    role: "Directora de Diseño",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
  },
  {
    name: "Miguel Torres",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
  },
  {
    name: "Ana García",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80"
  },
];

const values = [
  {
    title: "Innovación",
    description: " siempre buscando las mejores soluciones tecnológicas para cada desafío.",
    icon: "💡"
  },
  {
    title: "Calidad",
    description: "entregamos código limpio, escalable y bien documentado.",
    icon: "⚙️"
  },
  {
    title: "Colaboración",
    description: "trabajamos como equipo con nuestros clientes para lograr resultados extraordinarios.",
    icon: "🤝"
  },
];

export default function About() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
          alt=""
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Sobre Nosotros
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Somos un equipo apasionado por la tecnología, creando soluciones digitales que impulsan el crecimiento de nuestros clientes.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">Nuestra Historia</h2>
              <p className="mb-4 leading-relaxed text-gray-400">
                Fundados en 2018, comenzamos como un pequeño equipo de desarrolladores con una visión clara: hacer que la tecnología复杂问题变得简单。
              </p>
              <p className="leading-relaxed text-gray-400">
                Hoy hemos crecido para convertirnos en un socio tecnológico de confianza para empresas de todos los tamaños, desde startups hasta corporaciones.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="rounded-lg bg-[#151515] p-6">
                  <div className="mb-2 text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Proyectos</div>
                </div>
                <div className="rounded-lg bg-[#151515] p-6">
                  <div className="mb-2 text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-gray-400">Clientes</div>
                </div>
                <div className="rounded-lg bg-[#151515] p-6">
                  <div className="mb-2 text-3xl font-bold text-white">6</div>
                  <div className="text-sm text-gray-400">Años</div>
                </div>
                <div className="rounded-lg bg-[#151515] p-6">
                  <div className="mb-2 text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0f0f0f] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-white">Nuestros Valores</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="rounded-lg bg-[#151515] p-6 transition-colors hover:bg-[#1a1a1a]">
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold text-white">Nuestro Equipo</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
