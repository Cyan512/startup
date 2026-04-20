import Image from "next/image";

const services = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web y aplicaciones web personalizadas, optimizadas para rendimiento y experiencia de usuario.",
    features: ["Sitios web responsive", "E-commerce", "Dashboards", "APIs RESTful"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
  },
  {
    title: "Diseño UX/UI",
    description: "Diseñamos interfaces intuitivas y atractivas que mejoran la experiencia de tus usuarios.",
    features: ["Diseño UI", "Prototipado", "UX Research", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },
  {
    title: "Desarrollo Mobile",
    description: "Desarrollamos aplicaciones móviles nativas y cross-platform para iOS y Android.",
    features: ["iOS", "Android", "React Native", "Flutter"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
  },
  {
    title: "Consultoría Tech",
    description: "Asesoramos a empresas en su transformación digital y arquitectura de software.",
    features: ["Arquitectura", "Code Review", "Tech Audit", "Mentoría"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
  },
];

const process = [
  {
    step: "01",
    title: "Análisis",
    description: "Entendemos tus objetivos y requisitos técnicos."
  },
  {
    step: "02",
    title: "Diseño",
    description: "Creamos prototipos y mockups visualmente atractivos."
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Implementamos con código limpio y escalable."
  },
  {
    step: "04",
    title: "Entrega",
    description: "Publicamos y damos soporte continuo."
  },
];

export default function Service() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <section className="relative h-[60vh] min-h-100 w-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
          alt=""
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Servicios
          </h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-2xl font-bold text-white">¿Qué Hacemos?</h2>
          <p className="mb-12 max-w-2xl text-gray-400">
            Ofrecemos servicios de desarrollo y diseño digital adaptados a tus necesidades específicas.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="group overflow-hidden rounded-lg bg-[#151515] transition-colors hover:bg-[#1a1a1a]">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mb-4 text-sm text-gray-400">{service.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="rounded-full bg-[#252525] px-3 py-1 text-xs text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0f0f0f] px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-2xl font-bold text-white">Nuestro Proceso</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-4 text-5xl font-bold text-white/10">{item.step}</div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">¿Listo para empezar?</h2>
          <p className="mb-8 text-gray-400">
            Hablemos sobre tu proyecto y encontremos la mejor solución juntos.
          </p>
          <a href="mailto:contacto@ejemplo.com" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200">
            Contáctanos
          </a>
        </div>
      </section>
    </main>
  );
}
