
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
  Globe,
  Award,
  Cpu,
  MessageSquare
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
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center">
              <BookOpen className="text-black w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight uppercase gold-text-gradient">Arquitectos Digitales</span>
          </div>
          <button className="hidden md:block bg-white/5 hover:bg-white/10 border border-white/20 px-6 py-2 rounded-full text-sm font-semibold transition-all">
            Área de Miembros
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d4af3715] via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af3730] bg-[#d4af3705] mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-xs md:text-sm font-semibold text-gold uppercase tracking-[0.2em]">Guía Estratégica 2026</span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Experto en <span className="gold-text-gradient italic">PLR</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
            El Sistema Paso a Paso para Crear <span className="text-white font-medium">Infoproductos Rentables</span> que venden. Con Herramientas Digitales Actuales.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#precio" className="gold-gradient text-black px-10 py-5 rounded-sm font-bold text-lg hover:scale-105 transition-transform gold-glow flex items-center gap-2 group">
              ACCEDER POR $97 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 italic">Un solo pago. Acceso vitalicio.</p>
          </div>
        </div>
      </section>

      {/* The Hook Story */}
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
              Lo revisaste mil veces. Las palabras fluyen con elegancia. Hasta la portada, aunque hecha en Canva con tutoriales de YouTube, tiene cierto encanto amateur que te conmueve. Publicaste en Amazon KDP hace exactamente siete horas. Refrescas el panel de control por trigésima vez...
            </p>
            <p className="text-white font-semibold text-2xl border-l-4 border-gold pl-6 py-2 bg-gold/5">
              Cero ventas. Cero páginas leídas.
            </p>
            <p>
              Solo el eco silencioso de un universo digital indiferente que acaba de engullir tu creación sin siquiera parpadear. Sientes ese nudo familiar en el estómago: ¿fue todo en vano?
            </p>
            <p>
              Este no es un escenario hipotético. Es el ritual de iniciación no escrito que millones de creadores digitales han vivido desde 2020 hasta hoy. Es el momento en que la pasión choca contra la realidad del ecosistema digital moderno—un ecosistema que ya no recompensa el simple acto de crear, sino la <span className="text-gold font-medium">capacidad de diseñar sistemas</span> que transformen materia prima en experiencias memorables.
            </p>
          </div>
        </div>
      </section>

      {/* The Revelation Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-5xl font-bold gold-text-gradient">La verdad incómoda de 2026</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  En 2026, crear contenido excelente ya no es suficiente. Nunca lo fue. Lo que siempre importó es construir puentes entre tu conocimiento y la <span className="text-white">transformación tangible</span> de otra persona.
                </p>
                <p>
                  No vendes páginas. Vendes el viaje desde la confusión hasta la claridad. Desde la frustración hasta el control. Mientras las herramientas se democratizan, la verdadera escasez ya no es el contenido. Es la <span className="text-gold">atención cualificada</span>.
                </p>
              </div>
              <div className="pt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="text-gold text-2xl font-bold mb-1">10x</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Crecimiento de Contenido Global</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="text-gold text-2xl font-bold mb-1">-85%</div>
                  <div className="text-xs uppercase tracking-wider text-gray-500">Atención Promedio del Usuario</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-transparent rounded-full absolute -top-10 -right-10 blur-3xl -z-10"></div>
              <div className="p-8 md:p-12 border border-gold/30 bg-black rounded-sm shadow-2xl relative">
                <blockquote className="font-serif text-2xl md:text-3xl italic text-gray-200 leading-snug">
                  "Había construido una catedral en el desierto y esperaba que los peregrinos aparecieran por arte de magia."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient"></div>
                  <div>
                    <div className="font-bold">Autor del Libro</div>
                    <div className="text-sm text-gold">Arquitecto de Sistemas PLR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery & PLR Alquimia */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">La Alquimia del PLR</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Cómo convertir "contenido genérico" en activos digitales que resuenan con autenticidad y generan ingresos recurrentes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              icon={<Cpu className="text-gold" />}
              title="Sistemas vs. Herramientas"
              text="Deja de consumir herramientas y empieza a diseñar sistemas que multiplican el valor humano. De creador de contenido a arquitecto de experiencias."
            />
            <Card 
              icon={<Zap className="text-gold" />}
              title="Transformación Profunda"
              text="Analicé más de 2,000 productos. El secreto no está en el origen, sino en la profundidad de la transformación y la voz única inyectada."
            />
            <Card 
              icon={<Award className="text-gold" />}
              title="Especialización Extrema"
              text="Cuanto más saturado el nicho, más oportunidad para la especialización. No compites con Amazon, compites con la percepción del lector."
            />
          </div>
        </div>
      </section>

      {/* Content Breakdown - What's Inside */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto border border-white/10 bg-[#0a0a0a] rounded-sm p-8 md:p-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-12 text-center">Qué hay dentro del taller...</h2>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <ModuleItem 
                number="01"
                title="Ecosistema Digital 2026"
                desc="Entiende por qué el mercado exige especialización extrema y atención cualificada sobre producción masiva."
              />
              <ModuleItem 
                number="02"
                title="El Mapa Personalizado"
                desc="Un sistema de fases con hitos realistas que reemplaza la ansiedad del '¿por dónde empiezo?' con claridad absoluta."
              />
              <ModuleItem 
                number="03"
                title="Alquimia con IA"
                desc="Usa la IA como cincel para tallar tu perspectiva única en ebooks, audio, video y presentaciones interactivas."
              />
              <ModuleItem 
                number="04"
                title="Diseño Psicológico"
                desc="Portadas que funcionan como dispositivos de conversión, no como arte decorativo. Secretos de algoritmos actuales."
              />
              <ModuleItem 
                number="05"
                title="Soberanía Digital"
                desc="Cómo migrar de plataformas de terceros a tu propio territorio sin caer en trampas de costos iniciales."
              />
              <ModuleItem 
                number="06"
                title="Comunidades Nucleares"
                desc="Multiplica por ocho el valor de tu empresa diseñando membresías que crean adicción positiva."
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Case Study: Elena */}
      <section className="py-24 bg-gold/5 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/ele/800/800" 
                alt="Caso de éxito" 
                className="rounded-sm shadow-2xl border border-gold/20 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="text-gold font-bold tracking-widest uppercase text-sm">CASO DE ESTUDIO REAL</div>
              <h2 className="font-serif text-4xl font-bold">El "Efecto Elena"</h2>
              <p className="text-lg text-gray-300 italic">
                "En doce meses, Elena generó $18,400 en ingresos recurrentes y construyó una comunidad de 347 miembros activos."
              </p>
              <div className="space-y-4 text-gray-400">
                <p>
                  Elena aplicó el sistema a un PLR genérico de criptomonedas. Lo redefinió para adultos mayores que temen quedarse atrás. Añadió capas de valor humano, guías visuales y una experiencia multimodal.
                </p>
                <p>
                  El resultado no fue un éxito viral efímero, sino un río constante de transformación y humanidad aplicada a la creación digital.
                </p>
              </div>
              <div className="p-6 bg-black border border-gold/30 rounded-sm italic text-sm text-gray-400">
                "Gracias a tu guía, por primera vez en mi vida de 72 años, compré Bitcoin para mis nietos. No entendí todo, pero entendí lo suficiente para no sentirme tonta frente a ellos."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & FAQ Context */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-8 opacity-40" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 italic">Transparencia Radical</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            ¿Es esto simplemente "maquillar" contenido? No. La ética no reside en el origen, sino en la profundidad de la transformación. Incluimos una <span className="text-white">Declaración Ética Ajustable</span> para que construyas confianza con tus lectores desde el primer día.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed italic">
            "Crear desde cero tiene su lugar, pero el PLR transformado es el andamiaje que acelera tu éxito mientras construyes maestría."
          </p>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="precio" className="py-32 relative bg-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">Inicia tu <span className="gold-text-gradient">Transformación</span></h2>
            <p className="text-gray-400 mb-12">No estás adquiriendo un manual, estás adquiriendo el derecho a dejar atrás la ansiedad de la producción ciega.</p>
            
            <div className="bg-[#0f0f0f] border-2 border-gold p-12 rounded-sm shadow-[0_0_50px_rgba(212,175,55,0.15)] mb-12 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-32 h-32 gold-gradient rotate-45 opacity-10"></div>
               
               <div className="text-gold font-bold uppercase tracking-widest mb-4">OFERTA DE LANZAMIENTO</div>
               <div className="flex flex-col items-center justify-center gap-2 mb-8">
                 <span className="text-gray-500 line-through text-2xl font-light">$297</span>
                 <span className="text-8xl font-serif font-black gold-text-gradient">$97</span>
               </div>
               
               <ul className="text-left space-y-4 mb-10 text-gray-300">
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                   <span>Acceso completo a la arquitectura estratégica 2026.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                   <span>Framework de transformación multimodal con IA.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                   <span>Guía de Diseño Psicológico de Portadas.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                   <span>Plantillas de "Declaración Ética Ajustable".</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                   <span>Acceso a la comunidad privada de Arquitectos.</span>
                 </li>
               </ul>
               
               <button className="w-full gold-gradient text-black py-6 rounded-sm font-black text-xl hover:scale-[1.02] transition-transform gold-glow uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3">
                 CRUZAR EL UMBRAL <ArrowRight className="w-6 h-6" />
               </button>
               
               <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 grayscale invert" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 grayscale invert" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-5 grayscale invert" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl border border-gold/20 p-8 md:p-16 bg-gradient-to-b from-gold/5 to-transparent rounded-sm">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="shrink-0">
              <div className="w-40 h-40 border-4 border-gold rounded-full flex items-center justify-center p-2">
                <div className="w-full h-full border-2 border-gold/40 rounded-full flex flex-col items-center justify-center text-gold text-center">
                   <span className="text-3xl font-serif font-bold">30</span>
                   <span className="text-[10px] uppercase font-bold tracking-tighter leading-none">DÍAS DE<br/>GARANTÍA</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-bold">Una Garantía Inusual</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "Si aplicas los principios descritos en los primeros cuatro capítulos y no logras publicar al menos un producto transformado en 90 días, te devolveré cada centavo sin preguntas."
              </p>
              <p className="text-sm text-gray-500">
                Confío profundamente en este sistema. El verdadero riesgo no está en la inversión, sino en la inacción. Esta garantía es tu puente final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#030303] text-gray-600 text-sm border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
            <BookOpen className="w-5 h-5" />
            <span className="font-serif font-bold text-lg uppercase tracking-tight">Arquitectos Digitales</span>
          </div>
          <p className="mb-4">© 2026 Experto en PLR. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="hover:text-gold transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold transition-colors">Términos</a>
            <a href="#" className="hover:text-gold transition-colors">Soporte</a>
          </div>
          <p className="max-w-2xl mx-auto leading-relaxed opacity-50">
            Este producto no garantiza resultados monetarios específicos. El éxito depende de la aplicación disciplinada del sistema, el esfuerzo individual y las condiciones del mercado.
          </p>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full gold-gradient text-black py-4 rounded-full font-bold shadow-2xl gold-glow text-lg uppercase tracking-wider">
          ACCEDER AHORA $97
        </button>
      </div>
    </div>
  );
};

// Helper Components
interface CardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon, title, text }) => (
  <div className="p-8 border border-white/10 bg-white/5 hover:border-gold/30 transition-all group rounded-sm">
    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-10 h-10' })}
    </div>
    <h3 className="font-serif text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light">{text}</p>
  </div>
);

interface ModuleItemProps {
  number: string;
  title: string;
  desc: string;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ number, title, desc }) => (
  <div className="flex gap-6 items-start">
    <div className="font-serif text-4xl font-black text-gold/20 shrink-0 italic">{number}</div>
    <div>
      <h4 className="font-bold text-xl mb-2 text-gray-200">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default App;
