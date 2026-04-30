import React, { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Heart, BookOpen, Star, Sparkles, Book, Lock, ShieldCheck, ArrowRight, Play, BookMarked, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

// Smooth scroll utility
const scrollToOffer = () => {
  const offerSection = document.getElementById("oferta");
  if (offerSection) {
    const yOffset = -80; // offset for sticky header
    const y = offerSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

function Home() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    setCurrentDate(formattedDate);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-background font-sans overflow-x-hidden text-slate-800">
      
      {/* 1. URGENCY BAR */}
      <div className="fixed top-0 left-0 right-0 w-full bg-red-600 text-white py-3 px-4 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-center text-center">
          <p className="font-bold text-sm md:text-base animate-pulse">
            OFERTA VÁLIDA APENAS HOJE - {currentDate.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="pt-14"> {/* Offset for urgency bar */}
        
        {/* 2. HERO */}
        <section className="relative px-6 py-12 md:py-20 max-w-5xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/3 -translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--color-decola-yellow)" d="M45,-75.4C58.3,-68.8,69,-55.5,76.5,-40.7C84,-25.9,88.3,-9.6,86.6,5.9C84.9,21.5,77.3,36.2,66.6,48.2C55.9,60.2,42.1,69.5,26.9,76C11.7,82.5,-4.4,86.2,-19.7,82.7C-35,79.2,-49.6,68.5,-60.3,55.1C-71,41.7,-77.8,25.6,-80.6,9.1C-83.4,-7.5,-82.2,-24.5,-74.6,-38.7C-67,-52.9,-53,-64.3,-38.4,-70.5C-23.8,-76.7,-8.6,-77.7,6.8,-78.9C22.1,-80,31.7,-82,45,-75.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div 
              className="flex-1 text-center md:text-left z-10"
              initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6 border border-blue-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-decola-yellow" />
                <span>Método Decola Kids™</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                Seu filho começando a ler com confiança — <span className="text-decola-blue">mesmo que hoje tenha dificuldade</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium max-w-2xl mx-auto md:mx-0">
                Com apenas 15 minutos por dia usando o Método Decola Kids™.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  onClick={scrollToOffer}
                  className="bg-decola-green hover:bg-green-600 text-white border-green-700 text-lg py-7 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  Quero ajudar meu filho agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden"><img src="/avatar-1.png" alt="" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-green-100 flex items-center justify-center overflow-hidden"><img src="/avatar-2.png" alt="" className="w-full h-full object-cover" /></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-100 flex items-center justify-center overflow-hidden"><img src="/avatar-3.png" alt="" className="w-full h-full object-cover" /></div>
                </div>
                <span>Junte-se a centenas de mães</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 w-full max-w-md mx-auto relative z-10"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                <img 
                  src="/hero-illustration.png" 
                  alt="Criança lendo um livro feliz" 
                  className="w-full h-auto object-cover aspect-[4/3] md:aspect-square"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. DOR EMOCIONAL */}
        <section className="bg-slate-50 py-16 md:py-24 px-6 relative">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A hora da lição de casa virou um pesadelo?</h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "Seu filho chora, se frustra e diz que não consegue.",
                "Você perde a paciência (e depois se sente a pior mãe do mundo por ter gritado).",
                "O medo do atraso escolar tira o seu sono à noite.",
                "Você sente que, não importa o quanto tente ajudar, ele não evolui."
              ].map((text, i) => (
                <motion.div key={i} variants={fadeIn} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                  <div className="bg-red-50 p-1.5 rounded-full mt-1 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <p className="text-lg text-slate-700 font-medium">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. QUEBRA DE CRENÇA */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-decola-blue"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full -z-10 bg-blue-600 rounded-l-[100px] opacity-50"></div>
          
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                Não é falta de inteligência do seu filho.<br />
                <span className="text-decola-yellow">E também não é culpa sua.</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-medium">
                O verdadeiro problema é a <span className="font-bold text-white underline decoration-blue-400 underline-offset-4">falta de método</span>. As escolas exigem resultados, mas raramente ensinam os pais a ajudarem em casa de forma que não gere estresse. Vocês dois só precisam do passo a passo certo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. MÉTODO DECOLA KIDS */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-orange-50 text-orange-700 border-orange-200">Como funciona</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Método Decola Kids™</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Um caminho claro e previsível em 4 etapas para a fluência.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

              {[
                { step: 1, title: "Sons e letras", desc: "A base firme: conectando o desenho da letra ao som que ela faz de forma lúdica.", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
                { step: 2, title: "Sílabas", desc: "Os primeiros blocos: juntando sons sem decorar, mas entendendo a lógica.", color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
                { step: 3, title: "Leitura guiada", desc: "As primeiras palavras reais: lendo junto com você e sentindo o gosto da vitória.", color: "text-yellow-500", bg: "bg-yellow-50", border: "border-yellow-200" },
                { step: 4, title: "Autonomia", desc: "O grande salto: confiança para ler sozinho e pedir novos livros.", color: "text-green-500", bg: "bg-green-50", border: "border-green-200" }
              ].map((item, i) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center font-bold text-xl mb-4 ${item.bg} ${item.color} ${item.border} border-2`}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. COMO FUNCIONA & 7. BENEFÍCIOS (Combined for better flow) */}
        <section className="py-20 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Por que é tão fácil de aplicar?</h2>
                
                <div className="space-y-6">
                  {[
                    { icon: <Play className="w-5 h-5 text-blue-500" />, title: "15 minutos por dia", desc: "Direto ao ponto, antes que a criança perca o foco." },
                    { icon: <BookMarked className="w-5 h-5 text-orange-500" />, title: "Passo a passo simples", desc: "Você sabe exatamente o que fazer cada dia da semana." },
                    { icon: <ShieldCheck className="w-5 h-5 text-green-500" />, title: "Sem precisar ser professora", desc: "Linguagem feita para mães, não para pedagogos." },
                    { icon: <CheckCircle2 className="w-5 h-5 text-yellow-500" />, title: "Atividades prontas", desc: "É só abrir, olhar e aplicar com a criança." }
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeIn} className="flex gap-4">
                      <div className="mt-1 shrink-0 p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative"
              >
                <div className="absolute -top-5 -right-5 bg-decola-yellow text-slate-900 font-bold py-2 px-4 rounded-xl rotate-3 shadow-lg">
                  O resultado real:
                </div>
                
                <div className="space-y-5 mt-4">
                  {[
                    { title: "Mais confiança", desc: "Seu filho descobrindo que é capaz." },
                    { title: "Menos estresse", desc: "A casa volta a ser um ambiente de paz." },
                    { title: "Evolução visível", desc: "Pequenas vitórias celebradas todos os dias." },
                    { title: "Criança motivada", desc: "Ele vai pedir para ler os letreiros na rua." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <Star className="w-5 h-5 text-decola-yellow fill-decola-yellow shrink-0" />
                      <div>
                        <span className="font-bold text-slate-800 block">{item.title}</span>
                        <span className="text-sm text-slate-500">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 8. CONTEÚDO */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você vai receber</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                { title: "Plano de 4 semanas", icon: <BookOpen className="w-6 h-6 text-decola-blue" /> },
                { title: "Rotina diária", icon: <CheckCircle2 className="w-6 h-6 text-decola-green" /> },
                { title: "Atividades organizadas", icon: <Lock className="w-6 h-6 text-decola-yellow" /> },
                { title: "+2.000 atividades", icon: <Book className="w-6 h-6 text-decola-orange" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-bold text-lg text-slate-800">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center relative">
              <MessageCircle className="w-12 h-12 text-blue-200 absolute top-4 left-4" />
              <p className="text-xl md:text-2xl font-medium text-blue-900 italic relative z-10">
                "Você não precisa de milhares de atividades soltas pela internet. Você precisa da <span className="font-bold">atividade certa na hora certa</span>."
              </p>
            </div>
          </div>
        </section>

        {/* 10. DEPOIMENTOS */}
        <section className="py-20 px-6 bg-slate-50 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mães como você que já viram o resultado</h2>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { name: "Carla Mendes", avatar: "/avatar-1.png", text: "Eu tava ficando desesperada já… meu filho não conseguia juntar as letras 😔 comecei fazendo 15 min por dia e em menos de 2 semanas ele já tava lendo 😳" },
                  { name: "Juliana Rocha", avatar: "/avatar-2.png", text: "Eu não sou professora… mas esse passo a passo ajuda demais! minha filha pede pra estudar kkk ❤️" },
                  { name: "Patrícia Alves", avatar: "/avatar-3.png", text: "Meu filho tava atrasado e eu me sentia péssima 😞 agora ele tá muito mais confiante" },
                  { name: "Fernanda Souza", avatar: "/avatar-4.png", text: "Comprei sem expectativa… mas me surpreendi! muito organizado" },
                  { name: "Renata Oliveira", avatar: "/avatar-5.png", text: "Antes era briga todo dia 😩 agora virou rotina tranquila" },
                  { name: "Aline Costa", avatar: "/avatar-6.png", text: "Agora sei exatamente o que fazer, não fico mais perdida" }
                ].map((depoimento, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                          <img src={depoimento.avatar} alt={depoimento.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{depoimento.name}</p>
                          <div className="flex text-yellow-400">
                            {[1,2,3,4,5].map(star => <Star key={star} className="w-3 h-3 fill-current" />)}
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#E1F5FE] p-4 rounded-xl rounded-tl-sm relative flex-1">
                        <p className="text-slate-800 text-sm leading-relaxed font-medium">
                          {depoimento.text}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4 hidden md:flex">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* 9. BÔNUS + 12. OFERTA */}
        <section id="oferta" className="py-20 px-6 bg-white relative">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden text-white relative">
              {/* Background accents */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-decola-blue via-decola-yellow to-decola-green"></div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-decola-blue rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-decola-green rounded-full blur-3xl opacity-20 pointer-events-none"></div>
              
              <div className="p-5 sm:p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 relative z-10">
                
                {/* Left: Bonuses */}
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold mb-6 text-white">Comprando hoje, você leva:</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-decola-green shrink-0" />
                      <span className="text-lg font-medium">Acesso Completo Decola Kids</span>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-700/50">
                      <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Bônus Exclusivos:</p>
                      
                      {[
                        { title: "Rotina de 15 minutos", value: "R$ 19,90" },
                        { title: "Guia para mães", value: "R$ 29,90" },
                        { title: "Atividades extras", value: "R$ 17,90" },
                      ].map((bonus, i) => (
                        <div key={i} className="flex justify-between items-center py-2">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-decola-yellow" />
                            <span className="text-slate-200">{bonus.title}</span>
                          </div>
                          <span className="text-slate-500 line-through text-sm">{bonus.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex flex-wrap gap-2 justify-between items-center">
                    <span className="text-slate-300 text-sm sm:text-base">Valor Total (Bônus + Método):</span>
                    <span className="text-red-400 font-bold line-through text-sm sm:text-base">R$ 164,70</span>
                  </div>
                </div>

                {/* Right: Checkout */}
                <div className="bg-white text-slate-900 rounded-3xl p-5 sm:p-8 text-center flex flex-col justify-center items-center shadow-2xl relative min-w-0">
                  <div className="absolute -top-4 bg-red-500 text-white font-bold px-6 py-1.5 rounded-full text-sm animate-pulse">
                    OFERTA ENCERRANDO
                  </div>
                  
                  <p className="text-slate-500 font-medium mb-2">Acesso completo com todos os bônus:</p>
                  
                  <div className="mb-2">
                    <span className="text-lg text-slate-400 font-medium line-through decoration-red-500">De: R$ 97,00</span>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-1 md:gap-2 mb-6 w-full">
                    <span className="text-xl md:text-2xl font-bold text-slate-700 md:mt-2">Por apenas</span>
                    <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-none">R$10,90</span>
                  </div>
                  
                  <p className="text-sm font-medium text-slate-500 mb-8 bg-slate-50 py-2 px-4 rounded-lg w-full">
                    Hoje você tem acesso completo por um valor simbólico.
                  </p>
                  
                  <Button className="w-full bg-decola-green hover:bg-green-600 text-white border-green-700 h-20 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center justify-center gap-0">
                    <span>QUERO COMEÇAR AGORA</span>
                    <span className="text-xs font-normal opacity-90">Acesso imediato • Pagamento seguro</span>
                  </Button>

                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    Compra 100% segura e protegida
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* 11. GARANTIA */}
        <section className="py-12 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-32 h-32 shrink-0">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="var(--color-decola-yellow)" opacity="0.2" />
                <path d="M50 15L61.0289 23.4733L74.8874 21.0557L80.6015 33.7226L93.1852 40.5L88.9485 54.0253L96.223 66.1669L83.8443 73.9167L84.148 88.3582L70.5843 91.5647L63.5355 103.882L50 97.433L36.4645 103.882L29.4157 91.5647L15.852 88.3582L16.1557 73.9167L3.77703 66.1669L11.0515 54.0253L6.8148 40.5L19.3985 33.7226L25.1126 21.0557L38.9711 23.4733L50 15Z" fill="var(--color-decola-yellow)" />
                <path d="M35 50L45 60L65 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">7 dias de garantia incondicional</h3>
              <p className="text-slate-600">
                Se você acessar o material e achar que não é para o seu filho, basta nos enviar um único e-mail e devolveremos 100% do seu dinheiro. Sem perguntas. O risco é todo nosso.
              </p>
            </div>
          </div>
        </section>

        {/* 14. FAQ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Dúvidas Frequentes</h2>
            
            <Accordion type="single" collapsible className="w-full">
              {[
                { q: "Preciso imprimir?", a: "Sim, o material é em PDF. Você pode imprimir aos poucos, conforme for utilizando." },
                { q: "Funciona se meu filho não sabe nada?", a: "Sim, começa do básico. Desde as primeiras letras até a leitura fluente." },
                { q: "Quanto tempo por dia?", a: "Apenas 15 minutos são suficientes para manter a criança focada e aprendendo." },
                { q: "Como recebo o acesso?", a: "Por e-mail, imediatamente após a aprovação do pagamento." },
                { q: "Preciso ter experiência como professora?", a: "Não, o método é feito especificamente para mães e pais, com passo a passo fácil de seguir." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-slate-200">
                  <AccordionTrigger className="text-left font-semibold text-slate-800 text-lg hover:text-decola-blue">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 15. RODAPÉ */}
        <footer className="py-12 bg-slate-900 text-slate-400 text-sm text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="font-bold text-white text-xl mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-decola-yellow" />
              Decola Kids
            </div>
            <p className="mb-4">contato@decolakids.com.br</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="hover:text-white transition-colors">Termos de uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de privacidade</a>
            </div>
            <p className="text-xs opacity-60">
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
              Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;