import Image from "next/image";

export default function page() {
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
        {/* Tus datos principales */}
          <div className="mt-4 md:mt-0 flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold text-white mb-2 text-center md:text-left">
              Marlon Gabriel Ortega Barrientos
            </h1>
            <h2 className="text-xl text-gray-400 mb-4 text-center md:text-left">
              Estudiante / Desarrollador
            </h2>

           
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
          <span className="text-blue-400">LOGROS</span>
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
        
            {/* ========================= */}
            {/* BOTÓN DE WHATSAPP AQUÍ    */}
            {/* ========================= */}
            <a
              href="https://wa.me/50254994836" /* Reemplaza las X con tu número real */
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              
            </a>
      </div>
    </main>
  );
}
