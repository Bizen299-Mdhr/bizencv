"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Trophy, Shirt, Github, MessageCircle, Flag, Linkedin, ArrowLeft, X, Instagram } from "lucide-react"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect"
import { ScrollReveal } from "../../components/ScrollReveal"
import { useDisableInspect } from "../../hooks/useDisableInspect"

export default function LiverpoolFanPage() {
    useDisableInspect();
  return (
    <div 
      className="snap-y snap-mandatory h-screen overflow-y-scroll hide-scrollbar"
     
    >
      {/* Back Button */}
      <Link 
        href="/" 
        className="fixed left-8 top-8 z-50 text-gray-200 hover:text-[#C8102E] transition-colors"
      >
        <ArrowLeft className="w-8 h-8" />
      </Link>
  
      {/* Screen 1: Club Heritage */}
      <motion.section
        className="snap-always snap-start min-h-screen relative flex items-center pt-20 lfc-theme lfc-bg-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .9 }}
        style={{
          backgroundImage: `url("/New-FC-Liverpool-Backgrounds.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Liver Bird Decoration */}
        <div className="absolute right-20 top-20 opacity-10 pointer-events-none">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            <svg
              viewBox="0 0 512 512"
              className="w-64 h-64 text-[#C8102E]"
            >
              <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM369.1 162.3l-19.9 29.9c-15.3-10.2-32.9-15.3-51.5-15.3c-19.3 0-37.4 5.5-53.7 15.1c-16.3-9.6-34.4-15.1-53.7-15.1c-18.6 0-36.2 5.1-51.5 15.3l-19.9-29.9c21.3-14.2 45.5-21.3 71.4-21.3c25.3 0 49.1 6.7 70.7 18.1c21.6-11.4 45.4-18.1 70.7-18.1C323.6 141 347.8 148.1 369.1 162.3zM256 384c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112S317.9 384 256 384z"/>
              <path fill="currentColor" d="M256 272c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32S273.7 272 256 272z"/>
            </svg>
          </motion.div>
        </div>

        {/* Updated Red overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C8102E]/80 via-[#C8102E]/60 to-[#C8102E]/80" />

        {/* Social Media Links */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-6">
          <Link href="https://www.liverpoolfc.com" className="text-gray-200 hover:text-[#C8102E] transition-colors" target="_blank">
            <div className="w-6 h-6 relative">
              <img
                src="/pngwing.com.png"
                alt="Liverpool FC Logo"
                className="w-full h-full object-contain filter brightness-0 invert-[.65] hover:brightness hover:invert-0 transition-all"
              />
            </div>
          </Link>
          <div className="w-px h-20 bg-gray-200 mx-auto mt-4" />
          <span
            className="vertical-text text-gray-200 text-sm tracking-wider rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            YNWA
          </span>
        </div>

        <div className="container mx-auto px-8 relative z-10 ml-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h2
              className="text-white mb-4 text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              You'll Never Walk Alone
              <TypewriterComponent
                options={{
                  strings: ["Kopite Since 1892", "6× European Champions", "19× League Champions", "Anfield Faithful"],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 50,
                  deleteSpeed: 50,
                }}
              />
            </motion.h2>
            <div className="text-white space-y-4">
              <h3 className="text-4xl font-bold mb-6">Liverpool FC Legacy</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-black/30 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">🏆 Honours</h4>
                  <ul className="space-y-1">
                    <li>6 European Cups</li>
                    <li>3 UEFA Cups</li>
                    <li>4 UEFA Super Cup</li>
                    <li>16 Charity/Community Shields</li>
                    <li>20 League Titles</li>
                    <li>8 FA Cups</li>
                    <li>10 League Cups</li>
                    <li>1 FIFA Club World Cup</li>
                  </ul>
                </div>
                <div className="p-4 bg-black/30 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">🌟 Legends</h4>
                  <ul className="space-y-1">
                    <li>Kenny Dalglish</li>
                    <li>Steven Gerrard</li>
                    <li>Ian Rush</li>
                    <li>John Barnes</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <TypewriterComponent
                  options={{
                    strings: [
                      "This is Anfield",
                      "The Kop Stands Strong",
                      "Allez Allez Allez",
                      "We Are Liverpool"
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    delay: 100,
                  }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-black/30 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-[#C8102E]" />
                    Ultimate XI
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li> Virgil van Dijk (C)</li>
                    <li>⚡ Mohamed Salah</li>
                    <li>🥅 Alisson Becker</li>
                    <li>🔒 Andy Robertson</li>
                    <li>🎯 Steven Gerrard</li>
                    <li>🔥 Kenny Dalglish</li>
                  </ul>
                </div>

                <div className="p-6 bg-black/30 rounded-xl">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <div className="w-5 h-5 text-[#C8102E]" />
                    Matchday Rituals
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>🎵 YNWA </li>
                  </ul>
                </div>
              </div>

              <motion.div
                className="mt-8 p-6 bg-[#C8102E]/10 rounded-xl border border-[#C8102E]/30"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-4">Connect with a Kopite</h3>
                <div className="flex gap-4">
                  <Link href="https://x.com/lfc" className="text-gray-200 hover:text-[#C8102E] transition-colors">
                    <X className="w-6 h-6" />
                  </Link>
                  <Link href="https://www.instagram.com/liverpoolfc" className="text-gray-200 hover:text-[#C8102E] transition-colors">
                    <Instagram  className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Screen 2: My LFC Journey */}
      <motion.section
        className="snap-always snap-start min-h-screen relative flex items-center pt-20 lfc-theme lfc-bg-pattern"
      >
        {/* Add background image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Add gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#C8102E]/30 via-[#C8102E]/10 to-transparent z-0" />

        <div className="container mx-auto px-8 py-20 max-w-4xl text-center relative z-10">
          <ScrollReveal>
            <div className="space-y-8 relative">
              <h2 className="text-5xl font-bold mb-8">
                My LFC Journey
              
              </h2>
              
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                className="text-2xl leading-relaxed text-gray-300 space-y-6"
              >
                <p>
                  As BIZEN Mdhr, I've been bleeding red! 💪
                </p>
                <div className="flex flex-col items-center gap-3 text-[#C8102E]">
                  <div className="w-24 h-1 bg-[#C8102E] mb-6" />
                  <p>• 18+ years supporting Liverpool FC</p>
                  <div className="w-24 h-1 bg-[#C8102E] mt-6" />
                </div>
                <p className="text-lg text-gray-400 mt-8">
                  "When you start supporting a football club,<br />
                  you don't support it because of the trophies<br />
                  or a player or history,<br />
                  you support it because you found yourself somewhere there..."
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </motion.section>

    </div>
  )
}