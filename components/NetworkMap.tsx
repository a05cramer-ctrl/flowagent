'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const mapStats = [
  { label: 'Active Chains', value: '12+' },
  { label: 'Routing Nodes', value: '340' },
  { label: 'Liquidity Sources', value: '80+' },
  { label: 'Uptime', value: '99.9%' },
]

export default function NetworkMap() {
  return (
    <section id="network-map" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-[#050520] to-flow-bg pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-flow-blue/4 blur-[140px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-flow-gold/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-flow-blue/20 bg-flow-blue/5"
          >
            <span className="w-1 h-1 rounded-full bg-flow-blue" />
            <span className="font-mono text-xs text-flow-blue/80 tracking-[0.2em] uppercase">
              Network Overview
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-4"
          >
            The FlowAgent{' '}
            <span className="gradient-text-blue">Ecosystem Map</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-base leading-relaxed"
          >
            A live topology of the FlowAgent routing network — nodes, liquidity channels,
            and capital pathways operating across every supported chain.
          </motion.p>
        </div>

        {/* Map image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden border border-flow-blue/15 bg-flow-card/30 backdrop-blur-sm mb-12"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-flow-blue/4 via-transparent to-flow-blue/4" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flow-blue/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-flow-blue/40 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-flow-blue/30 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-flow-blue/30 to-transparent" />
          </div>

          {/* HUD corner marks */}
          {[
            'top-4 left-4',
            'top-4 right-4',
            'bottom-4 left-4',
            'bottom-4 right-4',
          ].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-5 h-5 z-20 pointer-events-none`}>
              <div className="absolute top-0 left-0 w-full h-px bg-flow-blue/60" />
              <div className="absolute top-0 left-0 w-px h-full bg-flow-blue/60" />
            </div>
          ))}

          {/* Header bar */}
          <div className="relative z-20 flex items-center justify-between px-6 py-3 border-b border-flow-blue/10 bg-flow-bg/60 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                FlowAgent Network — Live
              </span>
            </div>
            <div className="font-mono text-xs text-white/20">
              v1.0 · Mainnet
            </div>
          </div>

          {/* The actual map image */}
          <div className="relative w-full aspect-[16/9] min-h-[300px]">
            <Image
              src="/image copy.png"
              alt="FlowAgent Network Map"
              fill
              className="object-cover"
              quality={95}
            />
            {/* Subtle dark overlay to blend with the dark theme */}
            <div className="absolute inset-0 bg-flow-bg/10 mix-blend-multiply pointer-events-none" />
          </div>

          {/* Footer bar */}
          <div className="relative z-20 flex items-center justify-between px-6 py-3 border-t border-flow-blue/10 bg-flow-bg/60 backdrop-blur-sm">
            <div className="font-mono text-xs text-white/20">
              FLOW/ROUTING/TOPOLOGY/LIVE
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-flow-blue" />
                <span className="font-mono text-xs text-white/30">Routing Node</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-flow-gold" />
                <span className="font-mono text-xs text-white/30">Liquidity Hub</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats below map */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {mapStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-flow-border bg-flow-card/50 text-center backdrop-blur-sm"
            >
              <div className="font-mono font-bold text-2xl text-flow-blue text-glow-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
