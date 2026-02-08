
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  ChevronRight,
  ArrowRight,
  Award,
  Cpu,
  Eye,
  Target,
  Gem
} from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#d4af37] selection:text-black">
      {/* Header Eliminado */}

      {/* Hero Section - Espacio superior reducido a la mitad */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af3715] via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:text-left text-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af3730] bg-[#d4af3705] mb-8 animate-fade-in">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-xs md:text-sm font-semibold text-gold uppercase tracking-[0.2em]">Guía Estratégica 2026</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                Experto en <span className="gold-text-gradient italic">PLR</span>
              </h1>
              <p className="max-w-4xl lg:mx-0 mx-auto text-lg md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
                El Sistema Paso a Paso para Crear <span className="text-white font-medium">Infoproductos Rentables</span> que venden. Con Herramientas Digitales Actuales.
              </p>
              <div className="flex flex-col md:flex-row items-center lg:justify-start justify-center gap-6">
                <a href="#precio" className="gold-gradient text-black px-10 py-5 rounded-sm font-bold text-lg hover:scale-105 transition-transform gold-glow flex items-center gap-2 group">
                  ACCEDER POR $97 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-gray-500 italic">Un solo pago. Garantía de 30 días.</p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
               <img 
                src="https://i.ibb.co/qLrjGRC4/experto-en-plr-premium.png" 
                alt="Experto en PLR Premium" 
                className="max-w-full h-auto drop-shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Hook - The 2:17 AM Scenario */}
      <section className="py-24 bg-[#080808] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16 text-center">
            <Clock className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 italic">Son las 2:17 de la madrugada.</h2>
          </div>
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              Tu espalda duele por horas frente a la pantalla. Los ojos arden. Pero no puedes dormir porque acabas de publicar tu ebook—tu bebé digital—tras tres meses de trabajo exhaustivo.
            </p>
            <p>
              Lo revisaste mil veces. Las palabras fluyen con elegancia. Los ejemplos son claros. Hasta la portada, aunque hecha en Canva con tutoriales de YouTube, tiene cierto encanto amateur que te conmueve. Publicaste en Amazon KDP hace exactamente siete horas. Refrescas el panel de control por trigésima vez. 
            </p>
            <p className="text-white font-semibold text-2xl border-l-4 border-gold pl-6 py-2 bg-gold/5">
              Cero ventas. Cero páginas leídas.
            </p>
            <p>
              Solo el eco silencioso de un universo digital indiferente que acaba de engullir tu creación sin siquiera parpadear. Sientes ese nudo familiar en el estómago: ¿fue todo en vano? ¿Acaso el mercado está realmente saturado? ¿O algo más sutil, más insidioso, está ocurriendo bajo la superficie de algoritmos invisibles y expectativas cambiantes?
            </p>
          </div>
        </div>
      </section>

      {/* Reality Check Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              Este no es un escenario hipotético. Es el ritual de iniciación no escrito que millones de creadores digitales han vivido desde 2020 hasta hoy. Es el momento en que la pasión choca contra la realidad del ecosistema digital moderno—un ecosistema que ya no recompensa el simple acto de crear, sino la capacidad de diseñar sistemas que transformen materia prima en experiencias memorables. 
            </p>
            <p>
              Durante años, creímos que la solución residía en trabajar más duro: escribir más páginas, publicar más libros, invertir más horas en diseño. Pero mientras la producción digital global se multiplicaba por diez entre 2020 y 2026, un fenómeno contraintuitivo emergía: los creadores que publicaban menos—pero con una arquitectura estratégica impecable—generaban ingresos recurrentes superiores a quienes lanzaban productos semanales como si fueran confeti en una celebración desesperada.
            </p>
            <div className="bg-white/5 border border-gold/20 p-8 rounded-sm my-12">
              <h3 className="font-serif text-2xl font-bold text-gold mb-4 italic">La verdad incómoda:</h3>
              <p className="text-white font-medium">
                En 2026, crear contenido excelente ya no es suficiente. Nunca lo fue, en realidad. Lo que siempre importó—y hoy es más crítico que nunca—es construir puentes entre tu conocimiento y la transformación tangible de otra persona.
              </p>
            </div>
            <p>
              No vendes páginas. Vendes el viaje desde la confusión hasta la claridad. Desde la frustración hasta el control. Desde la soledad creativa hasta la pertenencia a una comunidad que valora tu perspectiva única. Y aquí reside la paradoxa que define nuestra era: mientras las herramientas de creación se democratizan hasta el punto de que cualquiera puede generar un ebook profesional en doce horas, la verdadera escasez—el recurso más valioso del planeta digital—ya no es el contenido. Es la atención cualificada. Es la confianza. Es la capacidad de diseñar una experiencia que invite a alguien a entregarte no solo su dinero, sino su tiempo precioso y su esperanza de cambio.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 bg-gold/5 border-y border-gold/10 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 italic text-center">Del sótano en Barcelona al Sistema Probado</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-400">
              <p>
                Permíteme contarte cómo descubrí esto no en un seminario de lujo, sino en el sótano de mi apartamento en Barcelona, rodeado de libros digitales que nadie leía. Hace siete años, yo era como tú: un creador apasionado que creía que la calidad intrínseca del contenido era su propia recompensa. 
              </p>
              <p>
                Escribí mi primer ebook sobre productividad con la meticulosidad de un monje copista medieval. Cada párrafo pulido. Vendió treinta y siete copias en seis meses. <span className="text-gold">Treinta y siete.</span>
              </p>
            </div>
            <div className="bg-black/40 border border-white/10 p-8 rounded-sm shadow-2xl">
              <p className="text-lg italic leading-relaxed">
                "No porque el contenido fuera malo, sino porque había cometido el error fundamental de mi generación: confundir la creación con la conexión. Había construido una catedral en el desierto y esperaba que los peregrinos aparecieran por arte de magia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery of PLR Alchemy */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            <p>
              Fue entonces cuando descubrí el mundo del PLR—Private Label Rights—y casi abandono para siempre la creación digital. Lo que encontré fue desolador: ebooks genéricos escritos con la frialdad de un manual de instrucciones para tostadoras. Era el lado oscuro de la democratización: la producción masiva de contenido sin alma.
            </p>
            <p>
              Pero en lugar de abandonar, decidí investigar con la obsesión de un detective forense. Durante dieciocho meses, analicé más de dos mil productos digitales buscando patrones invisibles. Descubrí que la diferencia entre un producto que se hunde y otro que navega no reside en su origen, sino en la <span className="text-gold font-bold underline underline-offset-4">profundidad de su transformación.</span>
            </p>
            <p>
              Un ebook PLR sobre "gestión financiera" podía ser un fracaso rotundo si simplemente se cambiaban palabras clave... o un éxito silencioso de $3.200 mensuales si se reimaginaba como "El Método Balcón Verde: De Cero a Tu Primera Cosecha en 42 Días". El material de partida era idéntico. La alquimia residía en el proceso.
            </p>
          </div>
        </div>
      </section>

      {/* The System Definition */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 italic">El Taller de <span className="gold-text-gradient">Transformación</span></h2>
            <p className="text-xl text-gray-400">
              No estás adquiriendo un manual de instrucciones. Estás recibiendo las llaves de un taller donde la materia prima se transforma en productos que resuenan con autenticidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target className="text-gold" />}
              title="Mapa Personalizado"
              desc="Un sistema de fases con hitos realistas que reemplaza la ansiedad con la claridad del 'hoy ejecuto este paso específico'."
            />
            <FeatureCard 
              icon={<Cpu className="text-gold" />}
              title="Alquimia con IA"
              desc="Usa la inteligencia artificial como cincel para tallar tu perspectiva única en múltiples formatos: ebook, audio y video."
            />
            <FeatureCard 
              icon={<Eye className="text-gold" />}
              title="Diseño Psicológico"
              desc="Aprende a diseñar portadas que funcionan como dispositivos de conversión, analizando el clic y la coherencia del nicho."
            />
          </div>
        </div>
      </section>

      {/* Specific Deep Dives (Kindle, Multi-modal) */}
      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold italic">Secretos de Kindle Unlimited 2026</h3>
                <p className="text-gray-400 leading-relaxed">
                  Descubre por qué el algoritmo ya no premia los libros largos, sino aquellos con tasas de finalización superiores al 70%. Aprende a estructurar capítulos de 1.500-2.500 palabras con puntos de intriga que invitan al "solo un capítulo más".
                </p>
              </div>
              <div className="md:w-1/2 bg-white/5 p-6 border border-white/10 rounded-sm">
                <div className="flex items-center gap-3 mb-2 text-gold">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-widest">Atención Retenida</span>
                </div>
                <div className="text-4xl font-black font-serif">+85%</div>
                <div className="text-xs text-gray-500 mt-1 uppercase">Probabilidad de continuar la lectura con nuestra técnica.</div>
              </div>
            </div>

            <div className="bg-gold/5 p-8 md:p-12 border border-gold/20 rounded-sm">
              <h3 className="font-serif text-2xl md:text-4xl font-bold mb-6 italic text-center">Soberanía Digital y Membresías</h3>
              <p className="text-gray-300 text-lg leading-relaxed text-center italic">
                "Aprende a diseñar membresías donde cada miembro siente que pertenece a algo exclusivo gracias a rituales que crean adicción positiva, multiplicando por ocho el valor de tu empresa."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Elena */}
      <section className="py-24 relative bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <div className="inline-block bg-black border border-gold/50 p-8 shadow-2xl rounded-sm">
              <p className="text-gold font-bold text-sm mb-2 uppercase tracking-tighter">Resultados de Elena:</p>
              <p className="text-5xl md:text-6xl font-black font-serif gold-text-gradient">$18.400</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Ingresos Recurrentes en 12 Meses</p>
            </div>
            
            <div className="space-y-6 text-left">
              <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-center">El Caso de Elena</h2>
              <p className="text-gray-300 leading-relaxed font-light text-lg">
                Elena, una diseñadora de México, aplicó el sistema a un paquete PLR sobre criptomonedas. En lugar de publicarlo tal cual, redefinió el nicho: adultos mayores que temen quedarse atrás.
              </p>
              <ul className="grid md:grid-cols-3 gap-6 text-gray-400">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span>Añadió estudios de caso reales e interfaces anotadas.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span>Creó una experiencia multimodal (ebook + audio + video).</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <span>Construyó una comunidad activa de 347 miembros.</span>
                </li>
              </ul>
              <div className="flex justify-center pt-6">
                <blockquote className="border-l-2 border-gold pl-6 py-2 italic text-gray-500 text-sm max-w-2xl">
                  "Esto no es marketing. Es humanidad aplicada a la creación digital. Y es exactamente el tipo de transformación que este sistema está diseñado para generar."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical & FAQ Context */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold italic mb-8 italic">¿Es esto "maquillar" contenido?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Permíteme ser absolutamente claro: la ética no reside en el origen del material, sino en la profundidad y transparencia de la transformación. Cuando aplicas este sistema, estás celebrando tu capacidad para convertir materia prima en algo que no existía antes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
              <h4 className="font-serif text-xl font-bold mb-4 italic text-gold">¿Y la saturación?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Cuanto más saturado está un nicho, más oportunidades existen para la especialización extrema. No compites con cuatro millones de ebooks; compites con la percepción de que "ya lo vio antes". Rompemos esa percepción con una voz auténtica.
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
              <h4 className="font-serif text-xl font-bold mb-4 italic text-gold">¿Por qué no desde cero?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                El sistema PLR actúa como andamiaje. Te proporciona la estructura base sobre la cual inyectar tu experiencia, acelerando el tiempo hasta tu primer ingreso real mientras construyes la maestría necesaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mindset Shift */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-10 italic">Un Cambio de Mentalidad Profundo</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            De medir el valor por páginas a medirlo por <span className="text-gold font-bold">transformación tangible.</span> Tu cliente no pregunta cuántas páginas tiene, sino qué logrará al terminarlo. Un manual de treinta páginas que resuelve un dolor agudo vale más que una enciclopedia que abruma sin guiar.
          </p>
          <div className="gold-gradient h-1 w-32 mx-auto mb-12 opacity-50"></div>
          <p className="text-lg text-gray-500 italic">
            Imagina despertar no con ansiedad, sino con la calma de saber que tu sistema está funcionando mientras duermes. Que tu ebook es el núcleo de un ecosistema que ayuda de verdad.
          </p>
        </div>
      </section>

      {/* Final Offer / Pricing */}
      <section id="precio" className="py-32 relative bg-[#030303]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto border-2 border-gold p-12 md:p-20 bg-black/80 rounded-sm shadow-[0_0_60px_rgba(212,175,55,0.1)]">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Experto en <span className="gold-text-gradient">PLR</span></h2>
            <p className="text-gold uppercase tracking-[0.3em] font-bold text-sm mb-12">Oferta Especial de Lanzamiento</p>
            
            <div className="flex flex-col items-center justify-center gap-2 mb-12">
              <span className="text-gray-500 line-through text-2xl font-light italic">$297 USD</span>
              <span className="text-8xl md:text-9xl font-serif font-black gold-text-gradient leading-none">$97</span>
              <span className="text-gray-400 mt-2 font-light">PAGO ÚNICO • ACCESO VITALICIO</span>
            </div>

            <div className="space-y-6 text-left max-w-md mx-auto mb-12 text-gray-300">
              <div className="flex gap-4">
                <Gem className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p>Sistema Paso a Paso (Mapa Estratégico 2026)</p>
              </div>
              <div className="flex gap-4">
                <Gem className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p>Workshop de Transformación Multimodal con IA</p>
              </div>
              <div className="flex gap-4">
                <Gem className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p>Guía de Diseño Psicológico de Portadas</p>
              </div>
              <div className="flex gap-4">
                <Gem className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p>Plantillas de Declaración Ética y Ética de Nicho</p>
              </div>
            </div>

            <button className="w-full gold-gradient text-black py-6 rounded-sm font-black text-2xl hover:scale-[1.03] transition-transform gold-glow uppercase tracking-widest flex items-center justify-center gap-4 mb-8">
              CRUZAR EL UMBRAL <ArrowRight className="w-7 h-7" />
            </button>
            
            <p className="text-xs text-gray-500 leading-relaxed max-sm mx-auto">
              Al hacer clic, inicias una transformación que cambiará no solo tus ingresos, sino tu relación con la creación digital para siempre.
            </p>
          </div>
        </div>
      </section>

      {/* The Unusual Guarantee */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl border border-gold/20 p-8 md:p-16 bg-gradient-to-b from-gold/5 to-transparent rounded-sm text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <div className="w-40 h-40 border-4 border-gold rounded-full flex items-center justify-center p-2 relative">
                <div className="absolute inset-0 border border-gold/20 rounded-full animate-pulse"></div>
                <div className="w-full h-full border-2 border-gold/40 rounded-full flex flex-col items-center justify-center text-gold text-center">
                   <span className="text-4xl font-serif font-bold leading-none">30</span>
                   <span className="text-[10px] uppercase font-bold tracking-tighter leading-none mt-1">DÍAS DE<br/>GARANTÍA</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold italic">Garantía Inusual de Integridad</h3>
              <p className="text-gray-400 leading-relaxed italic text-lg">
                "Si aplicas los principios descritos en los primeros cuatro capítulos—tu mapa de ruta digital, la transformación con IA, la producción multimodal y el diseño psicológico de portadas—y no logras publicar al menos un producto transformado en 30 días, te devolveré cada centavo sin preguntas."
              </p>
              <p className="text-sm text-gray-500">
                Esta garantía no es un escape; es un puente que elimina la última excusa para no comenzar. El verdadero riesgo no está en el sistema, sino en la inacción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Final Sign-off */}
      <footer className="py-24 bg-black border-t border-white/5 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="flex items-center justify-center gap-2 mb-10 opacity-60">
            <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center">
              <BookOpen className="text-black w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-2xl uppercase tracking-tighter gold-text-gradient">EXPERTO EN PLR PREMIUM</span>
          </div>
          <p className="font-serif text-2xl italic mb-12 text-gray-400">
            "Bienvenido al lado estratégico de la creación digital. Tu taller de transformación está listo. Solo falta que cruces el umbral y comiences a construir."
          </p>
          
          <div className="h-px bg-white/10 w-full mb-10"></div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-600 text-sm uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Términos</a>
            <a href="#" className="hover:text-gold transition-colors">Soporte</a>
            <a href="#" className="hover:text-gold transition-colors">Afiliados</a>
          </div>
          
          <p className="text-xs text-gray-700 leading-relaxed">
            © 2026 Experto en PLR. El Sistema Paso a Paso para Crear Infoproductos Rentables. <br/>
            Este sitio no es parte de Facebook ni de Amazon Inc. Los resultados varían según el esfuerzo y dedicación de cada alumno.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a href="#precio" className="block w-full gold-gradient text-black py-4 rounded-full font-black shadow-[0_10px_30px_rgba(212,175,55,0.4)] text-center text-lg uppercase tracking-wider">
          ACCEDER AHORA $97
        </a>
      </div>
    </div>
  );
};

// Helper Sub-component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <div className="p-10 bg-white/5 border border-white/10 rounded-sm hover:border-gold/40 transition-all group hover:bg-gold/5">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-12 h-12' })}
    </div>
    <h4 className="font-serif text-2xl font-bold mb-4 italic">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default App;
