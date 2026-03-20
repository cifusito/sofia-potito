/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Heart, Music, ChevronDown, Play, Pause, BookOpen } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    // Start music when they want to read the whole thing if not playing
    if (!isPlaying && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked, that's fine
      });
      setIsPlaying(true);
    }
  };

  const paragraphs = [
    "Sofia, queria decirte algo y que lo leas tranquilo",
    "perdon por muchas cosas, pero sobre todo por algo que se que te dolio mucho… por las veces que te decia que te amaba y despues actuaba totalmente diferente, por decirte cosas lindas y luego tratarte mal, por no tener coherencia contigo ni con lo que sentia",
    "se que eso confunde, cansa y lastima, y entiendo si en algun momento sentiste que mis palabras no valian o que no eran reales, porque yo mismo hice que se sintiera asi, porque yo mismo fui el que daño algo que era bonito entre nosotros",
    "tambien perdon por las veces que te dije que no me importaba como te sentias, por mandarte a dormir, por decirte que no te soportaba, por cortarte cuando querias hablar, por no escucharte cuando de pronto lo unico que necesitabas era que yo estuviera ahi, se que esas cosas no se dicen y menos a alguien que uno quiere, y me duele saber que fui yo el que te hizo sentir asi",
    "perdon por haber sido frio en momentos donde tu necesitabas cariño, por haber respondido mal cuando podia responder mejor, por haber dejado que el enojo hablara por mi en vez de lo que de verdad sentia, porque muchas veces no fui justo contigo",
    "yo si te ame, y te amo, pero muchas veces no supe demostrarlo bien, o lo mezcle con rabia, con cansancio, con rencor, con todo lo que veniamos cargando, y termine siendo alguien que no queria ser contigo, alguien que tampoco me gusta haber sido",
    "perdon tambien por las veces que te hice sentir menos, por las veces que te hice dudar de ti, por las veces que te hice sentir que no eras suficiente o que no estabas haciendo las cosas bien, cuando la verdad es que yo tampoco supe hacerlas bien",
    "se que en la relacion los dos fallamos, pero hoy estoy hablando por mi, por lo que hice yo, por lo que dije yo, por lo que te hice sentir yo, porque hay cosas que si fueron completamente mi responsabilidad",
    "no te escribo esto para cambiar nada ni para que volvamos, ni para remover cosas, solo porque siento que te debia un perdon sincero, sin excusas, sin darle vueltas, y tú me lo habías pedido antes, y siento que nunca te lo di de la forma correcta",
    "tambien perdon por no haber sabido cuidar lo que teniamos, por no haber sabido manejar mejor las situaciones, por no haber sido mas paciente, por no haber sido mas consciente de como mis palabras podian afectarte",
    "a pesar de todo, de verdad valoro lo que vivimos, valoro los momentos buenos, las risas, las conversaciones, las veces que estuvimos bien, porque si hubo cosas reales, si hubo sentimientos reales, y eso no lo voy a negar nunca",
    "gracias por haber estado, por haber compartido conmigo, por haber sido parte de mi vida en ese tiempo, porque de alguna forma tambien aprendi muchas cosas contigo, incluso de mis errores",
    "y de corazon espero que estes bien, que sanes todo lo que tengas que sanar, que encuentres tranquilidad, y que la vida te de todo lo que quieres y mereces",
    "perdon por todo Sofia, de verdad"
  ];

  const lyrics = `Quise
Mi piel llenarla de tatuajes pa cubrir los besos que dejaste
Puedo ocultar la historia que vivimos, pero no puedo borrarte
Dicen que el tiempo va a curarlo todo y sé que es mentira
Es imposible que pueda olvidar al amor de mi vida
Ni tomando como loco
Ni con otro amor tampoco
Lo que duró varios meses va a dolerme para toda una vida
Cuando dije: "haz lo que quieras, vete si te quieres ir"
No era lo que quería
Duele más saber que mis acciones fueron decepciones
Y no un simple enojo
Las heridas que te hice nunca te abrieron la piel
Pero te abrieron los ojos
Y ahora me toca aceptarlo
Aunque me cueste tanto hacerlo
Que ya no somos ni seremos
Dicen que el tiempo va a curarlo todo y sé que es mentira
Es imposible que pueda olvidar al amor de mi vida
Ni tomando como loco
Ni con otro amor tampoco
Lo que duró varios meses va a dolerme para toda una vida
Cuando dije: "haz lo que quieras, vete si te quieres ir"
No era lo que quería
Duele más saber que mis acciones fueron decepciones
Y no un simple enojo
Las heridas que te hice nunca te abrieron la piel
Pero te abrieron los ojos
Y ahora me toca aceptarlo
Aunque me cueste tanto hacerlo
Que ya no somos ni seremos`;

  return (
    <div className="min-h-screen font-sans selection:bg-stone-200 selection:text-stone-900 pb-20">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src="https://rr4---sn-cvb7lnls.googlevideo.com/videoplayback?expire=1774040798&ei=fmK9adCaD9ysy_sPzbOXwQo&ip=186.28.36.207&id=o-AEnQNf2kX7dLxiGq-3MMxMipRLu3RchUOUoRoXPHpmiS&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=aub%2Caub&gcr=co&bui=AVNa5-y-eig8TMgZP3PW673CoWGUttPhJdU0mEdZ64rEpRUuzJ_mY7ohFODq9maE6N-8qKdFC01TzhcI&spc=6dlaFJUbRYbHV8lO0MiFbcefx3GY4N_fyS8fuqbqK3LQPoLu&vprv=1&svpuc=1&mime=audio%2Fwebm&rqh=1&gir=yes&clen=3292875&dur=184.041&lmt=1732651098638328&keepalive=yes&fexp=51565116,51565681,51791334&c=ANDROID_VR&txp=5532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AHEqNM4wRgIhAPpa1o3bEKvO3r9JmjwD57HN8_FQG3mPWIWVmvFHhTNVAiEAsB9ko5qd4pPb8En3wDdYs8oiRWcsDNS5TH-c2xCbgpk%3D&redirect_counter=1&rm=sn-cvbes7z&rrc=104&req_id=2deffd56a384a3ee&cms_redirect=yes&cmsv=e&cps=855&ipbypass=yes&met=1774034007,&mh=g4&mip=177.253.229.250&mm=18&mn=sn-cvb7lnls&ms=aub&mt=1774033489&mv=m&mvi=4&pl=18&lsparams=cps,ipbypass,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRAIgcA9N3xoKmkFX1F-KF1u1BMcad09az44Js7_FpmDdT7gCICTz6F2InWOZTQaqQUVFB_Y9J4J3iZ0Flm0_SE0unGqQ"
        loop 
      />

      {/* Persistent Header */}
      <div className="fixed top-0 left-0 right-0 z-50 salsa-banner border-b border-stone-200/50 py-4 px-6 text-center shadow-sm">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-stone-600 flex items-center justify-center gap-3"
        >
          <Music size={14} className={`${isPlaying ? 'animate-spin-slow' : ''} text-stone-400`} />
          Acuérdate de mí cuando escuches salsa
        </motion.p>
      </div>

      <main className="pt-28 px-6 max-w-xl mx-auto">
        {/* Enhanced "Ir hasta abajo" Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-20"
        >
          <button 
            onClick={scrollToBottom}
            className="group relative inline-flex items-center gap-4 bg-stone-900 text-stone-50 px-8 py-4 rounded-full shadow-2xl hover:bg-stone-800 transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-stone-400 to-stone-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <span className="relative text-xs uppercase tracking-[0.3em] font-bold">Escuchar canción</span>
            <div className="relative bg-stone-800 p-2 rounded-full">
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </button>
          <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-widest animate-pulse">Pulsa para iniciar la música y bajar</p>
        </motion.div>

        <motion.header 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="font-serif text-5xl font-light italic text-stone-800 mb-4 tracking-tight">
            Perdón Final
          </h1>
          <div className="h-px w-16 bg-stone-300 mx-auto mb-6" />
          <p className="text-stone-500 text-sm font-light uppercase tracking-[0.4em]">
            De: Samuel Cifuentes
          </p>
        </motion.header>

        <div className="space-y-12 paper-card p-8 sm:p-12 rounded-2xl letter-shadow mb-20">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1 }}
              className={`font-serif text-xl sm:text-2xl leading-[1.8] text-stone-800/90 ${
                index === 0 ? "text-2xl sm:text-3xl font-medium text-stone-900" : ""
              } ${index === paragraphs.length - 1 ? "italic font-semibold text-stone-950 pt-8 border-t border-stone-100" : ""}`}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Lyrics Section */}
        <div className="mb-20">
          <button 
            onClick={() => {
              setShowLyrics(!showLyrics);
              if (!isPlaying && audioRef.current) {
                audioRef.current.play().catch(() => {});
                setIsPlaying(true);
              }
            }}
            className="w-full flex items-center justify-between p-6 bg-stone-50 border border-stone-200 rounded-2xl hover:bg-stone-100 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-stone-900 p-2 rounded-lg text-stone-50">
                <BookOpen size={18} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Canción</p>
                <p className="font-serif text-lg text-stone-800 italic">Ya No Somos Ni Seremos — Christian Nodal</p>
              </div>
            </div>
            <ChevronDown size={20} className={`text-stone-400 transition-transform duration-500 ${showLyrics ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showLyrics && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-stone-50/50 border-x border-b border-stone-200 rounded-b-2xl">
                  <pre className="font-serif text-lg leading-relaxed text-stone-600 whitespace-pre-wrap text-center italic">
                    {lyrics}
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.footer 
          ref={bottomRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-20 text-center"
        >
          <Heart size={24} className="mx-auto text-stone-300 mb-8 fill-stone-50" />
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.5em] font-medium">
            acepto mi inmadurez…
          </p>
        </motion.footer>
      </main>

      {/* Floating Controls */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-40">
        <motion.button 
          onClick={togglePlay}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-stone-900 text-stone-50 p-4 rounded-full shadow-2xl pointer-events-auto flex items-center justify-center"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
        </motion.button>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 1 : 0 }}
          className="bg-white/90 backdrop-blur-md border border-stone-200 py-2 px-4 rounded-full shadow-lg pointer-events-none"
        >
          <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Escuchando...</p>
        </motion.div>
      </div>
    </div>
  );
}
