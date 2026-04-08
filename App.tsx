
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  ChevronRight,
  Cpu,
  Gem,
  AlertCircle
} from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const paymentLink = "https://fcofrancis.pay.clickbank.net/?cbitems=1&template=plr1";

  const scrollToPrice = () => {
    document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d4af37] selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af3715] via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:text-left text-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af3730] bg-[#d4af3705] mb-8 animate-fade-in">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-xs md:text-sm font-semibold text-gold uppercase tracking-[0.2em]">Guía Estratégica 2026</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                EXPERTO EN <span className="gold-text-gradient italic">PLR</span>
              </h1>
              <p className="max-w-4xl lg:mx-0 mx-auto text-lg md:text-2xl text-gray-400 font-light leading-relaxed mb-6">
                El Sistema Paso a Paso para Crear <span className="text-white font-medium">Infoproductos Rentables</span> que Venden. Con Herramientas Digitales Actuales 2026.
              </p>
              <p className="text-xl md:text-2xl italic text-gold mb-10">
                "El problema no es el PLR. Es que nadie te enseñó a transformarlo."
              </p>
              <div className="flex flex-col md:flex-row items-center lg:justify-start justify-center gap-6">
                <button 
                  onClick={scrollToPrice}
                  className="gold-gradient text-black px-10 py-5 rounded-sm font-bold text-lg hover:scale-105 transition-transform gold-glow flex items-center gap-2 group cursor-pointer"
                >
                  ACCEDER POR 47$ <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-left">
                  <p className="text-sm text-gray-400 font-medium">Un solo pago. Garantía de 30 días.</p>
                  <p className="text-xs text-gray-500 italic">Acceso inmediato.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
               <img 
                src="https://i.ibb.co/qLrjGRC4/experto-en-plr-premium.png" 
                alt="Experto en PLR Premium" 
                width="480"
                height="480"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="max-w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: LA TRAMPA */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 italic text-gold uppercase">SECCIÓN 1: LA TRAMPA QUE TE TIENE ATRAPADO</h2>
            <p className="text-2xl font-light italic text-gray-300">¿Alguna vez has sentido esto?</p>
          </div>
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              Has descargado ese producto PLR prometedor. Leíste la descripción emocionante sobre cómo podría cambiarlo todo. Tenías planes: ibas a personalizarlo, a darle tu toque, a lanzarlo y finalmente empezar a ver esos ingresos pasivos de los que todos hablan.
            </p>
            <p className="text-white font-semibold text-2xl border-l-4 border-gold pl-6 py-2 bg-gold/5">
              Pero luego abriste el archivo. Y la realidad te golpeó en la cara.
            </p>
            <p>
              Contenido genérico. Frases vacías. Diseños que parecían sacados del año 2010. Información que, si eres honesto contigo mismo, ni siquiera tú comprarías. Te sentaste frente a la pantalla con esa pregunta que quema: <span className="text-white font-medium">"¿Y ahora qué hago con esto?"</span>
            </p>
            <div className="bg-white/5 p-8 border border-white/10 space-y-6">
              <p className="font-bold text-white uppercase tracking-widest text-sm">Has intentado las soluciones obvias:</p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span><strong className="text-white">Cambiar algunas palabras aquí y allá</strong> – Pero sonaba forzado, artificial. Y además, ¿cuánto tiempo ibas a perder reescribiendo 10.000 palabras?</span>
                </li>
                <li className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span><strong className="text-white">Contratar a un redactor freelance</strong> – Gastaste 200$, 300$, tal vez 500$. Esperaste una semana. Y lo que recibiste fue... más de lo mismo, pero con diferente redacción.</span>
                </li>
                <li className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span><strong className="text-white">Subirlo tal cual</strong> – Lo publicaste en una plataforma. Revisaste las estadísticas cada hora durante días. Cero ventas. Solo el silencio ensordecedor del fracaso digital.</span>
                </li>
              </ul>
            </div>
            <p>
              Cada intento te ha costado algo más valioso que el dinero: <span className="text-gold font-bold">te ha costado confianza.</span>
            </p>
            <ul className="space-y-2 text-gray-400 italic">
              <li>• Confianza en que este camino del marketing digital tiene espacio para ti.</li>
              <li>• Confianza en que puedes crear algo que alguien esté dispuesto a pagar.</li>
              <li>• Confianza en que toda esta inversión de tiempo, energía y esperanza vale la pena.</li>
            </ul>
            <div className="py-12 text-center">
              <p className="text-3xl font-serif italic text-white mb-6">Permíteme que te haga una pregunta directa:</p>
              <p className="text-2xl text-gold font-medium mb-4">¿Qué pasaría si el problema NUNCA fueron los productos PLR?</p>
              <p className="text-xl text-gray-400">¿Qué pasaría si el problema siempre fue el SISTEMA para transformarlos?</p>
            </div>
            <p>
              Porque piénsalo: cuando compras un bloque de mármol, no esperas que ya sea una escultura. Esperas que sea materia prima. La diferencia entre un bloque de mármol y la estatua de David no es la calidad del mármol. Es la mano del escultor.
            </p>
            <p>
              Los productos PLR son ese bloque de mármol digital. Y hasta ahora, nadie te había dado las herramientas, el plan y el proceso para esculpir tu propia obra maestra.
            </p>
            <p className="text-white font-bold text-center text-2xl mt-12">
              Mientras sigas tratando el PLR como un producto terminado, seguirás atrapado en esta trampa.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: EL DESCUBRIMIENTO */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 italic text-center gold-text-gradient uppercase leading-tight">
            SECCIÓN 2: EL DESCUBRIMIENTO QUE CAMBIÓ TODO (INCLUYENDO MI CUENTA BANCARIA)
          </h2>
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
              <img 
                src="https://i.ibb.co/XkxVB4VJ/6-300x300.jpg" 
                alt="Francisco González" 
                width="96"
                height="96"
                loading="lazy"
                className="w-24 h-24 rounded-full border-2 border-gold/30 object-cover shadow-[0_0_20px_rgba(212,175,55,0.2)] shrink-0"
                referrerPolicy="no-referrer"
              />
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Me llamo <span className="text-white font-bold">Francisco González</span>, y he estado exactamente donde tú estás ahora.
              </p>
            </div>
            <p>
              Durante años, operé bajo el mismo paradigma roto. Pensaba que el "secreto" estaba en encontrar el PLR "perfecto", la joya oculta que nadie más hubiera descubierto. Descargaba, subía, cruzaba los dedos. Resultados: inconsistentes, frustrantes, insostenibles.
            </p>
            <p>
              Mi punto de ruptura llegó un martes por la tarde, mirando una hoja de cálculo con 47 productos lanzados y un ingreso mensual que no llegaba a cubrir mi factura de internet.
            </p>
            <p className="text-xl text-white font-medium italic border-l-4 border-gold pl-6 py-2">
              En ese momento, dejé de preguntarme "¿qué PLR debo comprar?" y empecé a preguntar: "¿qué SISTEMA puedo construir?"
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-gold shrink-0" /> Un sistema que tomara cualquier PLR, sin importar su calidad inicial, y lo transformara en algo único y valioso.</li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-gold shrink-0" /> Un sistema que automatizara el 80% del trabajo pesado.</li>
              <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-gold shrink-0" /> Un sistema que no dependiera de mi "inspiración" o de mis horas limitadas.</li>
            </ul>
            <p>
              Lo que descubrí en los siguientes 18 meses no fue un truco, ni una plantilla mágica. Fue una metodología completa de transformación digital. Empecé a aplicar principios de ingeniería de procesos al contenido. A usar herramientas de IA no como curiosidades, sino como motores de producción.
            </p>
            <p className="text-2xl font-serif italic text-white text-center py-8">
              Los resultados no fueron incrementales. Fueron exponenciales.
            </p>

            {/* Tabla Antes/Después */}
            <div className="overflow-x-auto my-12 border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 text-gold uppercase tracking-widest text-sm">Antes</th>
                    <th className="p-4 border-b border-white/10 text-gold uppercase tracking-widest text-sm">Después</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr>
                    <td className="p-4 border-b border-white/10 text-gray-400 italic">Curso PLR básico sobre "Facebook Ads" (17$)</td>
                    <td className="p-4 border-b border-white/10 text-white font-medium">Programa certificado de 8 módulos con videos, plantillas y comunidad privada (297$)</td>
                  </tr>
                  <tr className="bg-white/5">
                    <td className="p-4 border-b border-white/10 text-gray-400 italic">Ebook genérico sobre "hábitos matutinos"</td>
                    <td className="p-4 border-b border-white/10 text-white font-medium">Club de suscripción mensual con protocolos, entrevistas en audio y desafíos grupales</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/10 text-gray-400 italic">Tiempo de producción: 3-4 semanas de trabajo agotador</td>
                    <td className="p-4 border-b border-white/10 text-white font-medium">72 horas de trabajo estratégico y supervisado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center py-12">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Pero el número que más me importa no es ese.</p>
              <div className="text-7xl md:text-9xl font-serif font-black gold-text-gradient mb-6">27.843$</div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Esa fue mi facturación en un solo mes, trabajando menos de 20 horas a la semana, después de implementar completamente este sistema.
              </p>
            </div>

            <p>
              No era un "golpe de suerte". Era el resultado predecible de un método que había refinado, probado y documentado.
            </p>
            <p>
              Y entonces comprendí mi verdadera responsabilidad. No era seguir acumulando ingresos para mí solo. Era sistematizar este conocimiento de tal forma que cualquier persona, con disciplina y siguiendo los pasos, pudiera replicar estos resultados.
            </p>
            <p className="text-xl italic text-white text-center py-8">
              "No quería crear otro 'gurú' con un curso carísimo. Quería crear arquitectos de sistemas digitales."
            </p>
            <p>
              Durante los últimos 14 meses, he volcado cada detalle, cada flujo de trabajo, cada herramienta, cada fórmula de análisis en un mapa paso a paso. No es un "curso" más. Es un manual de operaciones para un taller digital de alta eficiencia.
            </p>
            <p className="text-2xl font-serif font-bold text-center text-gold mt-8">
              Lo llamé: "EXPERTO EN PLR: De Cero a Ingresos con Herramientas Digitales Actuales".
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA LÍNEA DE PRODUCCIÓN */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 italic text-gold uppercase leading-tight">
              SECCIÓN 3: ESTO NO ES UN CURSO. ES UNA LÍNEA DE PRODUCCIÓN PARA TUS INFOPRODUCTOS
            </h2>
            <p className="text-xl text-gray-400">
              Olvídate de los cursos con 50 módulos de teoría y cero aplicación. Este libro de más de 640 páginas está estructurado como una línea de montaje industrial.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-black font-bold">1</div>
                  <h3 className="font-serif text-xl font-bold text-gold uppercase tracking-widest">FASE 1: LOS CIMIENTOS ACTUALIZADOS</h3>
                </div>
                <p className="text-sm text-gray-500 italic mb-4">Dejas atrás los mitos de 2010</p>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>El nuevo ecosistema PLR para 2026:</strong> Dónde encontrar materia prima de calidad HOY. Cómo evaluar un PLR en 5 minutos.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Tu mapa de ruta digital personalizado:</strong> Define EXACTAMENTE en qué nicho te conviertes en autoridad.</li>
                </ul>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-black font-bold">2</div>
                  <h3 className="font-serif text-xl font-bold text-gold uppercase tracking-widest">FASE 2: EL TALLER DE TRANSFORMACIÓN CON IA</h3>
                </div>
                <p className="text-sm text-gray-500 italic mb-4">Tu ventaja competitiva radical</p>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>IA para Transformar PLR Básico en Premium:</strong> ChatGPT para expandir y profundizar. Técnicas de "Prompt de los 5 Ángulos".</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Contenido Multiformato Automatizado:</strong> Un núcleo de ideas se convierte en ebook, vídeo, podcast e hilos.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Diseño y Portadas con IA:</strong> Genera diseños profesionales sin tocar Photoshop.</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-black font-bold">3</div>
                  <h3 className="font-serif text-xl font-bold text-gold uppercase tracking-widest">FASE 3: LA ESTRATEGIA DE MONETIZACIÓN 2026</h3>
                </div>
                <p className="text-sm text-gray-500 italic mb-4">Vendes donde importa</p>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Amazon KDP Estratégico:</strong> Cómo usar KDP como imán de audiencia y generador de autoridad.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Plataformas de Afiliados Revisadas:</strong> Cuáles valen la pena hoy y cuáles son puro ruido.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Creación de Tu Propia Plataforma:</strong> WordPress, Carrd o Kajabi. Márgenes del 100%.</li>
                </ul>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-black font-bold">4</div>
                  <h3 className="font-serif text-xl font-bold text-gold uppercase tracking-widest">FASE 4: EL MOTOR DE MARKETING AUTOMATIZADO</h3>
                </div>
                <p className="text-sm text-gray-500 italic mb-4">Tu negocio funciona sin ti</p>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Tráfico y SEO 2026:</strong> Técnicas de "SEO de nicho profundo" con poco presupuesto.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Automatización de Marketing:</strong> Nutrición de leads y recuperación de carritos mientras duermes.</li>
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Comunidades y Ventas Recurrentes:</strong> Transforma compradores en miembros por suscripción.</li>
                </ul>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-black font-bold">5</div>
                  <h3 className="font-serif text-xl font-bold text-gold uppercase tracking-widest">FASE 5: ESCALABILIDAD Y ANÁLISIS</h3>
                </div>
                <p className="text-sm text-gray-500 italic mb-4">De creador a CEO digital</p>
                <ul className="space-y-4 text-gray-400 text-sm">
                  <li className="flex gap-3"><CheckCircle className="w-4 h-4 text-gold shrink-0 mt-1" /> <strong>Sistema de Escalabilidad:</strong> Dashboards en tiempo real y contratación de tu primer equipo virtual.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: OBJECIONES */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 italic text-center uppercase leading-tight">
            SECCIÓN 4: "¿PERO YO PUEDO HACER ESTO? MI SITUACIÓN ES..."
          </h2>
          <div className="space-y-12">
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-gold font-bold italic text-xl mb-4">"No soy técnico/a. La IA, las automatizaciones... me da miedo."</h3>
              <p className="text-gray-400 leading-relaxed">
                Este sistema está diseñado precisamente para la persona NO técnica. Te guío con instrucciones literales de "haz clic aquí, copia esto, pega allá". Los flujos de automatización los construyes con herramientas visuales (Zapier/Make), arrastrando bloques. Tu trabajo no es programar; es seguir un plano.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-gold font-bold italic text-xl mb-4">"No tengo tiempo. Trabajo a tiempo completo/tengo familia."</h3>
              <p className="text-gray-400 leading-relaxed">
                El sistema completo está pensado para implementarse en "tandas" de 90 minutos, 2-3 veces por semana. Además, la FASE 2 (IA) te ahorra cientos de horas de trabajo manual. Muchos de mis estudiantes implementan el núcleo del sistema dedicando las tardes de los fines de semana.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-gold font-bold italic text-xl mb-4">"No tengo un nicho definido. No sé de qué hacer productos."</h3>
              <p className="text-gray-400 leading-relaxed">
                Los Capítulos 1 y 2 están dedicados EXCLUSIVAMENTE a esto. Te llevo por un proceso de autoevaluación y análisis de mercado para encontrar tu "intersección de autoridad". No necesitas ser un gurú mundial; necesitas saber un 20% más que alguien que está empezando.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-gold font-bold italic text-xl mb-4">"He comprado otros cursos antes y no funcionaron."</h3>
              <p className="text-gray-400 leading-relaxed">
                Lo entiendo perfectamente. Por eso esto no es un curso. Es un libro de taller. La diferencia es abismal. Un curso te da teoría; un manual de taller te dice qué herramienta coger, en qué ángulo aplicarla y qué resultado esperar. Además, ofrezco una garantía de 30 días sin preguntas.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-gold font-bold italic text-xl mb-4">"¿Y si el mercado está saturado?"</h3>
              <p className="text-gray-400 leading-relaxed">
                El mercado siempre está saturado de productos mediocres y genéricos. Nunca está saturado de autoridad específica, contenido profundamente útil y experiencias bien diseñadas. Este sistema no te enseña a competir en el mercado de los 7$. Te enseña a crear un nuevo mercado donde TÚ estableces las reglas y el precio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: INVERSIÓN */}
      <section className="py-24 bg-gold/5 border-y border-gold/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 italic uppercase">SECCIÓN 5: TU INVERSIÓN VS. EL VALOR REAL</h2>
          <p className="text-xl text-gray-300 mb-12 italic">Las matemáticas de la libertad</p>
          
          <div className="text-left space-y-8 text-gray-400 mb-16">
            <h3 className="font-bold text-white uppercase tracking-widest text-sm">El costo de NO actuar (seguir como estás):</h3>
            <ul className="space-y-4">
              <li className="flex gap-3"><AlertCircle className="w-5 h-5 text-gold shrink-0" /> Más meses, quizás años, de frustración probando métodos a medias.</li>
              <li className="flex gap-3"><AlertCircle className="w-5 h-5 text-gold shrink-0" /> Dinero perdido en PLR que no usas, cursos que no aplicas, herramientas que no dominas.</li>
              <li className="flex gap-3"><AlertCircle className="w-5 h-5 text-gold shrink-0" /> <strong>El costo de oportunidad:</strong> Cada mes que pasa es un mes en que NO estás construyendo un activo digital.</li>
              <li className="flex gap-3"><AlertCircle className="w-5 h-5 text-gold shrink-0" /> <strong>Desgaste emocional:</strong> La duda constante de "¿servirá para algo todo este esfuerzo?"</li>
            </ul>
          </div>

          <div className="bg-black/60 p-10 border border-gold/30 mb-12">
            <p className="text-gray-400 mb-4 uppercase tracking-widest">El precio de este sistema completo es de:</p>
            <p className="text-7xl md:text-9xl font-serif font-black gold-text-gradient mb-4">47$</p>
            <p className="text-gold uppercase tracking-widest font-bold text-xl">Piénsalo: 47$</p>
            <p className="text-gray-500 mt-2 italic">Un solo pago. Acceso vitalicio. No es un error tipográfico.</p>
          </div>

          <div className="text-left space-y-8 text-gray-400 mb-16">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">¿Por qué un precio tan bajo?</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-gold font-bold mb-2">1. Cero Barreras</p>
                <p className="text-xs">Quiero eliminar TODA barrera de entrada. Que la decisión sea un "sí" automático.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-gold font-bold mb-2">2. Efecto Red</p>
                <p className="text-xs">Cuando miles tengan éxito, cambiará la percepción de toda la industria.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10">
                <p className="text-gold font-bold mb-2">3. Modelo Futuro</p>
                <p className="text-xs">Mi éxito depende de que tú tengas tanto éxito que quieras profundizar conmigo después.</p>
              </div>
            </div>
          </div>

          <div className="text-left bg-white/5 p-8 border border-white/10">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Analicemos el ROI más conservador posible:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="p-4 border-b border-white/10 text-gold uppercase tracking-widest text-xs">Concepto</th>
                    <th className="p-4 border-b border-white/10 text-gold uppercase tracking-widest text-xs">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-white/10">Tu inversión</td>
                    <td className="p-4 border-b border-white/10 text-white font-bold">47$</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/10">Aplicas solo el Capítulo 3 (Transformación con IA)</td>
                    <td className="p-4 border-b border-white/10">—</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/10">Creas UN producto de calidad (ebook, curso corto)</td>
                    <td className="p-4 border-b border-white/10">—</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-white/10">Lo vendes por un precio conservador de 37$</td>
                    <td className="p-4 border-b border-white/10">—</td>
                  </tr>
                  <tr className="bg-gold/10">
                    <td className="p-4 border-b border-white/10 font-bold text-gold">Con 2 ventas</td>
                    <td className="p-4 border-b border-white/10 text-white font-bold">Recuperas tu inversión y generas beneficios (74$)</td>
                  </tr>
                  <tr className="bg-gold/20">
                    <td className="p-4 border-b border-white/10 font-bold text-gold">Con 4 ventas</td>
                    <td className="p-4 border-b border-white/10 text-white font-bold">Has triplicado tu inversión (148$)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm italic text-gray-500 text-center">Y eso es lo MÍNIMO.</p>
          </div>

          <p className="text-2xl font-serif italic text-white mt-12">
            "De un PLR de 17$ a un producto de 297$: esa es la transformación que enseñamos."
          </p>
          <p className="text-gold font-bold mt-4">Estás invirtiendo 47$ por el plano detallado de una máquina que puede generar miles.</p>
        </div>
      </section>

      {/* SECCIÓN 6: LO QUE RECIBES */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 italic text-center text-gold uppercase leading-tight">
            SECCIÓN 6: LO QUE RECIBES HOY
          </h2>
          <p className="text-center text-gray-400 mb-12 italic">Más allá de las 640 páginas</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-20 h-20 text-gold" />
              </div>
              <h3 className="font-bold mb-4 uppercase tracking-widest text-gold">1. EL LIBRO PRINCIPAL "EXPERTO EN PLR"</h3>
              <p className="text-xs text-gray-500 italic mb-4">*(Valor: 197$+)*</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Formato PDF, EPUB y MOBI.</li>
                <li>• 640 páginas de contenido denso.</li>
                <li>• 12 Capítulos estructurados.</li>
                <li>• Diagramas de flujo y ejemplos.</li>
              </ul>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-20 h-20 text-gold" />
              </div>
              <h3 className="font-bold mb-4 uppercase tracking-widest text-gold">2. LA BIBLIOTECA DE PLANTILLAS Y PROMPTS</h3>
              <p className="text-xs text-gray-500 italic mb-4">(Valor: 97$)</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Plantilla de Evaluación Rápida.</li>
                <li>• Colección de Prompts de IA.</li>
                <li>• Templates de Automatización.</li>
                <li>• Checklist de Lanzamiento.</li>
              </ul>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="w-20 h-20 text-gold" />
              </div>
              <h3 className="font-bold mb-4 uppercase tracking-widest text-gold">3. ACCESO A ACTUALIZACIONES ESTRATÉGICAS</h3>
              <p className="text-xs text-gray-500 italic mb-4">(Valor: incalculable)</p>
              <p className="text-sm text-gray-400">
                Mantendré este libro vivo. Recibirás actualizaciones de secciones clave sin costo adicional.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-20 h-20 text-gold" />
              </div>
              <h3 className="font-bold mb-4 uppercase tracking-widest text-gold">4. CORREO DE CONSULTA DIRECTA</h3>
              <p className="text-xs text-gray-500 italic mb-4">(Valor: 47$)</p>
              <p className="text-sm text-gray-400">
                ¿Tienes una duda específica? Puedes escribirme un correo. Soporte prioritario para desatascarte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: GARANTÍA */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl border border-gold/20 p-8 md:p-16 bg-gradient-to-b from-gold/5 to-transparent rounded-sm text-center">
          <h2 className="font-serif text-3xl font-bold italic mb-8 uppercase leading-tight">
            SECCIÓN 7: GARANTÍA DE "RENDIMIENTO O REEMBOLSO"
          </h2>
          <p className="text-2xl text-white font-bold mb-8 italic">Garantía de 30 Días de Transformación o Dinero de Vuelta</p>
          <div className="text-left space-y-6 text-gray-400 mb-10">
            <p className="font-bold text-white uppercase tracking-widest text-xs">Condiciones:</p>
            <ol className="space-y-4 list-decimal list-inside">
              <li>Descargas el libro.</li>
              <li>Lees y aplicas los Capítulos 1, 2 y 3.</li>
              <li>Sigues el proceso: evalúas un PLR, defines tu enfoque y aplicas las técnicas de transformación con IA.</li>
            </ol>
            <p className="italic">
              Si, tras hacer esto de buena fe, no ves con total claridad cómo puedes tomar CUALQUIER contenido genérico y convertirlo en algo 10 veces más valioso y único... me envías un email antes del día 30.
            </p>
            <p className="text-white font-bold text-center text-xl">
              Te devuelvo el 100% de tu dinero, sin preguntas, sin dramas.
            </p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            ¿Por qué puedo ofrecer esto? Porque sé lo que sucede cuando alguien aplica esos primeros capítulos. Es un clic mental. Tu riesgo es literalmente cero. Mi riesgo es alto, y lo asumo porque confío en el sistema que he construido.
          </p>
        </div>
      </section>

      {/* SECCIÓN 8: EL FUTURO */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-10 italic uppercase leading-tight">
            SECCIÓN 8: ELIGE TU PROPIO FUTURO
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Este es el momento. Ahora mismo, tienes dos caminos frente a ti:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20 text-left">
            <div className="p-8 bg-white/5 border border-white/10">
              <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">CAMINO A) Volver a lo de siempre</h3>
              <p className="text-sm text-gray-500">
                Seguir navegando en la superficie, gastando dinero en soluciones parciales. Dentro de un año, probablemente estarás en el mismo lugar, preguntándote "¿y si lo hubiera probado?".
              </p>
            </div>
            <div className="p-8 bg-gold/5 border border-gold/20">
              <h3 className="text-gold font-bold mb-4 uppercase tracking-widest text-xs">CAMINO B) Dar el paso decisivo</h3>
              <p className="text-sm text-gray-300">
                Invertir 47$. Descargar el sistema. Aplicar el método. Experimentar por ti mismo la potencia de tener un plan claro y un proceso probado.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <p className="text-2xl font-serif italic text-white mb-6">"No te convierte en un 'vendedor de PLR'. Te convierte en un Arquitecto de Sistemas Digitales."</p>
            <p className="text-gray-400">Dejas de competir en el mercado de los commodities. Empiezas a operar en el mercado de la autoridad.</p>
          </div>
          
          <div id="precio" className="max-w-3xl mx-auto border-2 border-gold p-12 bg-black/80 rounded-sm shadow-[0_0_60px_rgba(212,175,55,0.1)]">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">EXPERTO EN <span className="gold-text-gradient">PLR</span></h2>
            <p className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-6">Oferta Especial de Lanzamiento</p>
            <div className="text-7xl md:text-9xl font-serif font-black gold-text-gradient mb-6">47$</div>
            <p className="text-gray-400 uppercase tracking-widest text-xs mb-10">ACCESO INMEDIATO · ACTUALIZACIONES VITALICIAS · GARANTÍA 30 DÍAS</p>
            
            <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="w-full gold-gradient text-black py-6 rounded-sm font-black text-2xl hover:scale-[1.03] transition-transform gold-glow uppercase tracking-widest flex items-center justify-center gap-4 mb-8">
              → QUIERO SER ARQUITECTO DIGITAL ←
            </a>
            
            <p className="text-sm text-gold font-bold mb-4">¡ATENCIÓN! Precio de lanzamiento por tiempo limitado.</p>
            <p className="text-xs text-gray-500 italic mb-4">Este precio de 47$ es una oferta para los primeros lectores. Después subirá.</p>
            <p className="text-xs text-gray-600">Pago 100% seguro. Acceso instantáneo tras la compra.</p>
          </div>

          <div className="mt-20 space-y-12 text-gray-400 text-left max-w-3xl mx-auto">
            <p>
              <strong>P.D.</strong> Recuerda la garantía: 30 días para aplicar los primeros capítulos. Si aplicas los Capítulos 1, 2 y 3 de buena fe y no ves cómo transformar CUALQUIER PLR en algo 10 veces más valioso, te devuelvo cada céntimo. Sin preguntas. El único riesgo es no empezar.
            </p>
            <p>
              <strong>P.P.D.</strong> Dentro de un mes, podrías estar lanzando tu primer producto transformado, con una página de ventas profesional y un sistema de automatización básico funcionando. O podrías estar exactamente donde estás hoy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <p className="text-xs text-gray-700 leading-relaxed">
            © 2026 Experto en PLR – Francisco González
          </p>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${scrolled ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        <button 
          onClick={scrollToPrice}
          className="flex items-center gap-3 px-6 py-4 gold-gradient text-black rounded-full font-black shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:scale-105 transition-all gold-glow uppercase text-xs md:text-sm tracking-widest cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-black" /> ACCEDER AHORA 47$
        </button>
      </div>
    </div>
  );
};

export default App;
