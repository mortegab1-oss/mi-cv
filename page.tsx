import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-grey text-green-500 font-mono p-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Simulación del prompt de la terminal */}
        <p className="mb-4">
          <span className="text-green-400">MI PORTAFOLIO</span>
          <span className="text-yellow-400">:</span>
        </p>
        
        {/* Contenedor flexible para poner la foto junto al texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          
          {/* Contenedor de la foto de perfil con borde estilo terminal */}
          <div className="relative w-32 h-32 border-2 border-purple-500 p-1 shrink-0">
            <div className="relative w-full h-full">
              <Image
                src="/perfil.jpeg" /* Cambia esto si tu foto tiene otro nombre o extensión */
                alt="Foto de perfil de Marlon"
                fill
                className="object-cover transition-all duration-300"
                priority
              />
            </div>
          </div>

        
          {/* Tus datos principales */}
          <div className="mt-4 md:mt-0">
            <h1 className="text-4xl font-bold text-white mb-2">
              Marlon Gabriel Ortega Barrientos
            </h1>
            <h2 className="text-xl text-gray-400">
              Estudiante / Desarrollador
            </h2>
          </div>
          
        </div>
{/* Sección de Aptitudes */}
        <div className="mt-6 mb-8">
          <p className="mb-4">
            <span className="text-green-400">ACERCA DE MI</span>
            <span className="text-yellow-400">:</span>
          </p>
          <div className="text-gray-300 pl-4 border-l-2 border-green-500 ml-2">
            <p className="leading-relaxed">
              Estudiante universitario y desarrollador en constante aprendizaje. 
              Disfruto resolviendo problemas complejos, aplicando conocimientos lógicos y matemáticos. 
              Tengo experiencia práctica en la gestión y digitalización de bases de datos, 
              y me gusta explorar tecnologías diversas, desde el desarrollo con lenguajes como 
              Python, Java , hasta la administración de entornos Linux. 
              Siempre buscando optimizar procesos y crear nuevas soluciones.
            </p>
          </div>
        </div>
        {/* Siguiente comando simulado */}
        <p className="mb-4">
          <span className="text-blue-400">LOGROS ACADEMICOS</span>
          <span className="text-purple-400">:</span>
        </p>
        {/* Sección de Logros Académicos */}
        <div className="mt-6 mb-8">
          <p className="mb-4">
           
            <span className="text-purple-400"></span>
          </p>
          
          <div className="text-gray-300 pl-4 border-l-2 border-yellow-500 ml-2">
            <ul className="space-y-4">
              
              {/* Logro 1 */}
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-white font-bold">Universidad Mariano Gálvez de Guatemala,Guastatoya El Progreso</span>
                </div>
                <p className="ml-6 text-sm text-gray-400">
                  Estudiante activo. Cursos destacados en ciencias exactas como Física 2 y Álgebra.
                </p>
              </li>

              {/* Logro 2 */}
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-white font-bold">Formación Técnica</span>
                </div>
                <p className="ml-6 text-sm text-gray-400">
                  Tecnico en Reparacion y Mantenimiento de Hardware y Software (Cisco)-(Intecap)
                </p>
              </li>

              {/* Logro 3 */}
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">➜</span>
                  <span className="text-white font-bold">Aplicación Práctica</span>
                </div>
                <p className="ml-6 text-sm text-gray-400">
                  Experiencia en gestión y digitalización de bases de datos para plataformas administrativas en el sector de salud pública.
                </p>
              </li>

            </ul>
          </div>
        </div>
        
      </div>
    </main>
  );
}
