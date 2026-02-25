'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'Phase 1',
    period: 'Q1 2025',
    title: 'Network Deployment',
    status: 'completed',
    items: [
      'Core smart contract deployment',
      'Security audits & formal verification',
      'Initial liquidity establishment',
      'Token generation event (TGE)',
      'Mainnet launch',
    ],
  },
  {
    phase: 'Phase 2',
    period: 'Q2 2025',
    title: 'Routing Engine Launch',
    status: 'active',
    items: [
      'Intelligent routing algorithm v1',
      'Multi-DEX integration (Uniswap, Curve, Balancer)',
      'Routing API release',
      'Beta operator program',
      'On-chain governance activation',
    ],
  },
  {
    phase: 'Phase 3',
    period: 'Q3 2025',
    title: 'Multi-Chain Expansion',
    status: 'upcoming',
    items: [
      'Cross-chain bridge deployment',
      'Arbitrum & Base integration',
      'Cross-chain liquidity routing',
      'Protocol SDK release',
      'Institutional-grade dashboards',
    ],
  },
  {
    phase: 'Phase 4',
    period: 'Q4 2025',
    title: 'Autonomous Execution Layer',
    status: 'upcoming',
    items: [
      'Full automation suite launch',
      'AI-powered routing optimization',
      'DAO governance full transition',
      'Execution node operator program',
      'V2 protocol architecture',
    ],
  },
]

const statusConfig = {
  completed: { label: 'Completed', color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', dot: 'bg-emerald-400' },
  active: { label: 'In Progress', color: 'text-flow-blue', bg: 'bg-flow-blue/10', border: 'border-flow-blue/30', dot: 'bg-flow-blue animate-pulse' },
  upcoming: { label: 'Upcoming', color: 'text-white/40', bg: 'bg-white/5', border: 'border-white/10', dot: 'bg-white/20' },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-flow-surface/20 to-flow-bg pointer-events-none" />
      <div className="absolute left-1/4 top-1/2 w-[500px] h-[500px] rounded-full bg-flow-blue/3 blur-[150px] pointer-events-none" />

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
            <span className="font-mono text-xs text-flow-blue/80 tracking-[0.2em] uppercase">Roadmap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-4"
          >
            The Path to Full Autonomy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-base"
          >
            A focused, deliberate build toward a fully autonomous on-chain execution system.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine (mobile / tablet) */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-flow-blue/30 via-flow-blue/15 to-transparent" />

          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-[3.6rem] left-[8%] right-[8%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-flow-blue/20 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-flow-blue/50 to-transparent"
              style={{ width: '30%' }}
              animate={{ x: ['-30%', '130%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {phases.map((phase, i) => {
              const config = statusConfig[phase.status as keyof typeof statusConfig]
              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
                  className="relative pl-12 lg:pl-0"
                >
                  {/* Mobile connector dot */}
                  <div className={`lg:hidden absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-flow-bg flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${config.dot}`} />
                  </div>

                  <div className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                    phase.status === 'active'
                      ? 'border-flow-blue/30 bg-flow-blue/5 shadow-lg shadow-flow-blue/5'
                      : phase.status === 'completed'
                      ? 'border-emerald-400/20 bg-flow-card/60'
                      : 'border-flow-border bg-flow-card/40'
                  }`}>
                    {/* Phase badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-white/30 tracking-widest">{phase.phase}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${config.bg} ${config.border} ${config.color}`}>
                        {config.label}
                      </span>
                    </div>

                    {/* Timeline node (desktop) */}
                    <div className="hidden lg:flex absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center bg-flow-bg border border-flow-blue/30">
                      <div className={`w-2.5 h-2.5 rounded-full ${config.dot}`} />
                    </div>

                    {/* Period */}
                    <div className="font-mono text-flow-blue text-sm font-semibold mb-2">{phase.period}</div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg mb-4 text-white leading-tight">
                      {phase.title}
                    </h3>

                    {/* Items */}
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <div className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                            phase.status === 'completed' ? 'bg-emerald-400' :
                            phase.status === 'active' ? 'bg-flow-blue' : 'bg-white/20'
                          }`} />
                          <span className={`text-xs leading-relaxed ${
                            phase.status === 'upcoming' ? 'text-white/30' : 'text-white/50'
                          }`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
