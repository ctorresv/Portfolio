import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Carlos Arturo Torres Varón</h1>
          <nav>
            <ul className="flex">
              <li className="ml-4"><a href="#sobre-mi" className="text-white">Sobre mí</a></li>
              <li className="ml-4"><a href="#proyectos" className="text-white">Proyectos</a></li>
              <li className="ml-4"><a href="#contacto" className="text-white">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="sobre-mi" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
          <p className="text-lg">
            Hola, soy desarrollador Full Stack con amplia experiencia en el entorno MERN, dedicado a crear soluciones tecnológicas
            integrales y altamente funcionales. Poseo sólidos conocimientos en el diseño y desarrollo de aplicaciones web utilizando las últimas
            tecnologías. Me destaco por mi capacidad para trabajar en equipos multidisciplinarios, aplicando metodologías ágiles para alcanzar resultados
            eficientes. Con formación en ingeniería biomédica, aporto una perspectiva complementaria a los proyectos tecnológicos. Estoy comprometido con
            el aprendizaje continuo y la actualización constante de las últimas tendencias y tecnologías.
          </p>
          <p className="text-lg mt-8">Si quieres conocer más sobre mi experiencia y habilidades, puedes descargar mi CV aquí: <a href="https://drive.google.com/file/d/1CVO6bajnLMoN_672K2JutFm_eIyVKMsE/view?usp=sharing" target='blank' className="text-blue-500 hover:underline">Descargar CV</a></p>
        </div>
      </section>

      <section id="proyectos" className="bg-gray-200 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Minga</h3>
              <p className="text-lg mb-4 overflow-y-auto" style={{ maxHeight: "200px" }}> Minga es una plataforma que permite a sus usuarios ver diferentes mangas y acceder a su contenido para
                lectura. Da opciones al usuario para añadir mangas favoritos. Para usuarios administradores, pueden gestionar el contenido de
                nuevos mangas o modificar mangas existentes. La aplicacion se desarrollo con el stack de mern, y usando metodologias agiles SCRUM. </p>
              <a href="https://minga-0ybw.onrender.com" target='blank' className="text-blue-500 hover:underline">Ver proyecto</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Express Buy</h3>
              <p className="text-lg mb-4 overflow-y-auto" style={{ maxHeight: "200px" }}>ExpressBuy es un e-comerse de productos para el hogar, la aplicacion web y movile permite al usuario
                realizar un procesode comprar de productos y el seguimiento del estado de su compra. Tambien cuenta con opciones para usuarios
                administradores para la gention de productos, promociones y ordenes. El proyecto se llevo acabo mediante metodologias agiles y
                usando el stack de MERN</p>
              <a href="https://expressbuy-x0lj.onrender.com" target='blank' className="text-blue-500 hover:underline">Ver proyecto</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Deteccion temprana somnolencia</h3>
              <p className="text-lg mb-4 overflow-y-auto" style={{ maxHeight: "200px" }}>El objetivo general del proyecto fue desarrollar un sistema capaz de detectar y alertar de forma
                temprana el cansancio del conductor mediante el análisis de video en tiempo real. Para lograr esto, se plantearon objetivos
                específicos. En primer lugar, se buscó implementar un algoritmo de detección automática de cansancio utilizando videos capturados
                con dispositivos de bajo costo. Este algoritmo permitió identificar señales de fatiga en los conductores, como el cierre
                frecuente de los ojos o los movimientos lentos. Además, se trabajó en la generación de elementos de retroalimentación visuales y
                auditivos que permitieran alertar a los conductores de manera temprana, brindando así una medida preventiva para evitar posibles
                accidentes debido al cansancio. Estos elementos de retroalimentación se presentaron de forma clara y fácilmente perceptible para
                garantizar una respuesta rápida y efectiva por parte del conductor. El enfoque principal del proyecto fue la detección temprana
                del cansancio del conductor, utilizando herramientas de análisis de video y desarrollando una interfaz de alerta intuitiva y
                eficaz.</p>
              <a href="https://github.com/ctorresv/deteccion-temprana-somnolencia" className="text-blue-500 hover:underline">Ver proyecto</a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">ArtGram</h3>
              <p className="text-lg mb-4 overflow-y-auto" style={{ maxHeight: "200px" }}></p>
              <a href="#" className="text-blue-500 hover:underline">Ver proyecto</a>
            </div>

          </div>
        </div>
      </section>
      <section id="contacto" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="text-lg">Puedes contactarme a través de:</p>
          <ul className="mt-4">
            <li>Email: <a href="mailto:carlosat95@gmail.com" className="text-blue-500 hover:underline">carlosat95@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/carlos-arturo-torres/" target='blank' className="text-blue-500 hover:underline">Perfil de LinkedIn</a></li>
            <li>GitHub: <a href="https://github.com/ctorresv" target='blank' className="text-blue-500 hover:underline">Perfil de GitHub</a></li>
            {/* Agrega más formas de contacto si es necesario */}
          </ul>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Carlos Arturo Torres Varón</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
