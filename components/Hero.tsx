'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import FlowCanvas from './FlowCanvas'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid pt-[102px]"
    >
      <FlowCanvas />

      {/* Radial glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-flow-blue/5 blur-[100px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-flow-blue/8 blur-[60px]" />
      </div>

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="absolute top-16 left-0 w-24 h-px bg-gradient-to-r from-transparent to-flow-blue" />
        <div className="absolute top-0 left-16 w-px h-24 bg-gradient-to-b from-transparent to-flow-blue" />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30">
        <div className="absolute top-16 right-0 w-24 h-px bg-gradient-to-l from-transparent to-flow-blue" />
        <div className="absolute top-0 right-16 w-px h-24 bg-gradient-to-b from-transparent to-flow-blue" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">

        {/* Status badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-flow-blue/25 bg-flow-blue/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flow-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-flow-blue" />
          </span>
          <span className="font-mono text-xs text-flow-blue tracking-[0.2em] uppercase">
            Autonomous Execution Layer
          </span>
        </motion.div>

        {/* Main hero image */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 relative"
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-72 h-72 rounded-full border border-flow-blue/20"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.14, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="w-80 h-80 rounded-full border border-flow-blue/10"
            />
          </div>
          {/* Glow blob behind image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full bg-flow-blue/15 blur-[50px]" />
          </div>

          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <Image
              src="/image.png"
              alt="FlowAgent"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(0,212,255,0.5)] animate-float"
              priority
            />
          </div>
        </motion.div>

        {/* Logo text */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-3"
        >
          <h1 className="font-display font-bold tracking-[0.1em] leading-none">
            <span className="block text-[clamp(2.5rem,7vw,5.5rem)] text-white text-glow-blue">
              FLOWAGENT
            </span>
          </h1>
        </motion.div>

        {/* Ticker */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 px-4 py-1.5 rounded border border-flow-gold/30 bg-flow-gold/5 inline-block"
        >
          <span className="font-mono text-sm text-flow-gold tracking-[0.3em] gradient-text-gold font-semibold">
            $FLOW
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-[clamp(1.8rem,4.5vw,3.5rem)] tracking-tight leading-[1.1] mb-6 max-w-3xl gradient-text-blue"
        >
          Control the Flow.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/50 text-[clamp(0.95rem,2vw,1.2rem)] max-w-xl leading-relaxed mb-12"
        >
          FlowAgent is the autonomous on-chain execution layer that optimizes transaction
          routing, liquidity flows, and capital efficiency in real time — intelligently.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-4 mb-16"
        >
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#token-utility"
              className="group relative w-48 text-center px-8 py-3.5 font-semibold text-flow-bg bg-flow-blue rounded-full glow-blue hover:scale-105 active:scale-95 transition-all duration-150 text-base overflow-hidden"
            >
              <span className="relative z-10">Activate FLOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-flow-blue to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </a>
            <a
              href="#how-it-works"
              className="w-48 text-center px-8 py-3.5 font-semibold text-white border border-white/20 rounded-full hover:border-flow-blue/50 hover:text-flow-blue hover:bg-flow-blue/5 transition-all duration-200 text-base"
            >
              View Protocol
            </a>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://x.com/flowagent_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-48 text-center px-8 py-3.5 font-semibold text-flow-bg bg-flow-blue rounded-full glow-blue hover:scale-105 active:scale-95 transition-all duration-150 text-base overflow-hidden flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 relative z-10 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="relative z-10">Twitter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-flow-blue to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </a>
            <a
              href="#"
              className="w-48 text-center px-8 py-3.5 font-semibold text-white border border-white/20 rounded-full hover:border-flow-blue/50 hover:text-flow-blue hover:bg-flow-blue/5 transition-all duration-200 text-base flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Chart
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12"
        >
          {[
            { label: 'Total Supply', value: '1,000,000,000' },
            { label: 'Token', value: '$FLOW' },
            { label: 'Network', value: 'Solana' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/30 tracking-widest uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/25 tracking-[0.2em] uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-flow-blue/50 to-transparent"
        />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-flow-bg to-transparent pointer-events-none" />
    </section>
  )
}
