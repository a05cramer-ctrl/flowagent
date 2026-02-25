'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Intelligent Routing',
    description:
      'FlowAgent continuously scans liquidity pools, AMMs, and order books across the entire DeFi ecosystem. Every route is evaluated in real time to identify the optimal path for capital movement.',
    tags: ['Multi-DEX Scanning', 'Path Analysis', 'Slippage Modeling'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16 L12 8 L20 16 L28 8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 24 L12 16 L20 24 L28 16" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
        <circle cx="20" cy="16" r="2" fill="currentColor" stroke="none" />
        <circle cx="28" cy="8" r="2" fill="currentColor" stroke="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Automated Execution',
    description:
      'Once the optimal route is identified, FlowAgent executes atomically — bundling, batching, and sequencing transactions with precision. No manual input. No delays. No missed opportunities.',
    tags: ['Atomic Batching', 'Gas Optimization', 'Instant Settlement'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="4" width="20" height="24" rx="2" />
        <path d="M12 10 L20 10 M12 16 L18 16 M12 22 L16 22" strokeLinecap="round" />
        <motion.path
          d="M22 20 L26 24 L30 16"
          stroke="#00d4ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Real-Time Optimization',
    description:
      'Post-execution, FlowAgent continuously monitors positions and re-routes capital as market conditions shift. The protocol never sleeps — always seeking greater efficiency, always refining.',
    tags: ['Live Monitoring', 'Adaptive Rebalancing', 'MEV Protection'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <path d="M16 6 L16 16 L22 22" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
        <path d="M8 4 L6 2 M24 4 L26 2 M28 16 L30 16" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-[#050520] to-flow-bg pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-flow-blue/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-flow-blue/20 bg-flow-blue/5"
          >
            <span className="w-1 h-1 rounded-full bg-flow-blue" />
            <span className="font-mono text-xs text-flow-blue/80 tracking-[0.2em] uppercase">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-4"
          >
            Three Layers of Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-base leading-relaxed"
          >
            FlowAgent&apos;s execution stack operates in a continuous loop — scanning, executing,
            and optimizing in real time across every supported chain.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[16%] right-[16%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-flow-blue/20 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-flow-blue to-transparent opacity-40"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl border border-flow-border bg-flow-card/60 backdrop-blur-sm hover:border-flow-blue/30 hover:bg-flow-card transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-flow-blue/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="px-3 py-1 rounded-full bg-flow-bg border border-flow-blue/30 font-mono text-xs text-flow-blue font-bold tracking-wider">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4 text-flow-blue/70 group-hover:text-flow-blue transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl mb-3 text-white group-hover:text-flow-blue transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-full bg-flow-blue/8 border border-flow-blue/15 text-flow-blue/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-flow-blue/15 bg-flow-card/40 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="font-mono text-xs text-flow-blue/60 tracking-widest uppercase mb-1">
              Execution Layer
            </div>
            <p className="font-display font-semibold text-xl">
              The protocol operates 24/7 — autonomous by design.
            </p>
          </div>
          <a
            href="#tokenomics"
            className="shrink-0 px-6 py-3 rounded-full border border-flow-blue/30 text-flow-blue text-sm font-semibold hover:bg-flow-blue hover:text-flow-bg hover:glow-blue transition-all duration-200"
          >
            See Tokenomics →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
