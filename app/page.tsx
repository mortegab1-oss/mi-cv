import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 overflow-hidden">
      
      {/* ================= 1. CABECERA (HERO SECTION) ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-12">
        
        {/* Efecto de brillo de fondo sutil (Ambient Glow) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Columna de la Foto de Perfil (En móvil aparece PRIMERO con order-1, en PC a la derecha con md:order-2) */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative group">
              
              {/* Marco con degradado */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Contenedor de la imagen */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
                <Image 
                  src="/perfil.jpeg" 
                  alt="Foto de perfil de Marlon" 
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>

            </div>
          </div>

          {/* Columna de Texto (En móvil aparece DESPUÉS con order-2, en PC a la izquierda con md:order-1) */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left order-2 md:order-1">
            
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-medium text-emerald-400 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible para nuevos proyectos
            </div>

            {/* Saludo y Nombre */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm sm:text-base">Hola, mi nombre es</p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Marlon Gabriel <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Ortega Barrientos
                </span>
              </h1>
            </div>

            {/* Subtítulo / Roles */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl">
              Estudiante de Ingeniería / Desarrollador & Entusiasta de Linux y Bases de Datos.
            </p>

            {/* Descripción corta */}
            <p className="text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Me apasiona resolver problemas lógicos, optimizar procesos administrativos y explorar tecnologías desde la terminal hasta la web.
            </p>

            {/* Botones de acción */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                href="https://wa.me/50254994836" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center gap-2"
              >
                <span>¡Contáctame!</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>

              <a 
                href="#logros" 
                className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 font-medium backdrop-blur-md transition-all duration-200"
              >
                Ver Trayectoria
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Contenedor principal para las demás secciones */}
      <div className="space-y-24 pb-20">

        {/* ================= 2. SECCIÓN: ACERCA DE MÍ ================= */}
        <section id="sobre-mi" className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-2xl p-8 sm:p-10 bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden group">
            
            {/* Acento lateral */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-cyan-400"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-sm">
                ~/sobre-mi
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Acerca de mí</h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Estudiante universitario en la <span className="text-emerald-400 font-medium">Universidad Mariano Gálvez de Guatemala</span> y desarrollador en constante aprendizaje. Disfruto resolviendo problemas complejos, aplicando conocimientos lógicos y matemáticos. Tengo experiencia práctica en la gestión y digitalización de bases de datos, y me gusta explorar tecnologías diversas, desde programación en Python y Java hasta la administración de entornos Linux. Siempre buscando optimizar procesos y crear nuevas soluciones.
            </p>
          </div>
        </section>

        {/* ================= 3. SECCIÓN: TECH STACK / HABILIDADES ================= */}
        <section id="habilidades" className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono text-sm">
              ~/tech-stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Habilidades & Tecnologías</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { category: "Sistemas & SO", items: ["Linux (CachyOS)", "Ubuntu", "Git / Terminal"] },
              { category: "Lenguajes", items: ["Python", "Java", "C#", "TypeScript"] },
              { category: "Bases de Datos", items: ["MySQL", "MySQL Workbench", "SIGSAWEB"] },
              { category: "Hardware / IoT", items: ["ESP32", "Microcontroladores", "Mantenimiento PC"] },
            ].map((tech, index) => (
              <div key={index} className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all duration-300">
                <h3 className="text-emerald-400 font-semibold text-sm mb-3 font-mono">{tech.category}</h3>
                <ul className="space-y-1.5 text-slate-300 text-sm">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. SECCIÓN: LOGROS Y TRAYECTORIA ================= */}
        <section id="logros" className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-sm">
              ~/experiencia-logros
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Logros & Trayectoria</h2>
          </div>

          <div className="space-y-4">
            
            {/* Tarjeta de Logro 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">Educación Superior</span>
                <h3 className="text-lg font-bold text-white mt-2">Universidad Mariano Gálvez de Guatemala, Guastatoya El Progreso</h3>
                <p className="text-slate-300 text-sm mt-1">Estudiante activo. Cursos destacados en ciencias exactas como Física 2 y Álgebra.</p>
              </div>
            </div>

            {/* Tarjeta de Logro 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">Formación Técnica</span>
                <h3 className="text-lg font-bold text-white mt-2">Técnico en Reparación y Mantenimiento de Hardware y Software (Cisco) — Intecap</h3>
                <p className="text-slate-300 text-sm mt-1">Certificación técnica enfocada en diagnóstico, optimización de equipos y soporte técnico integral.</p>
              </div>
            </div>

            {/* Tarjeta de Logro 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4z"/></svg>
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">Aplicación Práctica</span>
                <h3 className="text-lg font-bold text-white mt-2">Gestión y Digitalización de Bases de Datos</h3>
                <p className="text-slate-300 text-sm mt-1">Experiencia práctica en el manejo de bases de datos para plataformas administrativas en el sector de salud pública.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 5. FOOTER / CONTACTO ================= */}
        <footer className="max-w-4xl mx-auto px-6 pt-10 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400 text-sm">
            © 2026 — Diseñado con Next.js & Tailwind CSS.
          </p>

          <a 
            href="https://wa.me/50254994836" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200"
          >
            <span>Escríbeme por WhatsApp</span>
          </a>
        </footer>

      </div>
    </main>
  );
}