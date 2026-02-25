'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '< 1ms', label: 'Execution latency' },
  { value: '99.9%', label: 'Protocol uptime' },
  { value: '∞', label: 'Routing paths' },
]

const capabilities = [
  'Autonomous transaction routing',
  'Cross-DEX liquidity optimization',
  'Real-time capital rebalancing',
  'MEV-resistant execution paths',
  'Multi-hop route aggregation',
]

function NetworkNode({ cx, cy, r, delay }: { cx: number; cy: number; r: number; delay: number }) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="rgba(0,212,255,0.8)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

export default function About() {
  const nodes = [
    { cx: 220, cy: 120, r: 6, delay: 0 },
    { cx: 340, cy: 80, r: 4, delay: 0.5 },
    { cx: 120, cy: 200, r: 5, delay: 1 },
    { cx: 300, cy: 220, r: 7, delay: 0.3 },
    { cx: 400, cy: 160, r: 4, delay: 1.2 },
    { cx: 160, cy: 300, r: 5, delay: 0.8 },
    { cx: 260, cy: 340, r: 4, delay: 1.5 },
    { cx: 360, cy: 300, r: 6, delay: 0.2 },
    { cx: 80, cy: 140, r: 3, delay: 1.8 },
    { cx: 440, cy: 260, r: 4, delay: 0.7 },
  ]

  const edges = [
    [0, 1], [0, 2], [0, 3], [1, 4], [2, 5], [3, 4], [3, 7], [5, 6], [6, 7], [4, 9], [7, 9],
  ]

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-flow-surface/30 to-flow-bg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-flow-blue/20 bg-flow-blue/5">
            <span className="w-1 h-1 rounded-full bg-flow-blue" />
            <span className="font-mono text-xs text-flow-blue/80 tracking-[0.2em] uppercase">About the Protocol</span>
          </div>

          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-6">
            The Invisible Force{' '}
            <span className="gradient-text-blue">Directing Capital</span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed mb-6 max-w-lg">
            FlowAgent is an autonomous on-chain execution layer that operates below the
            surface of every transaction. By intelligently analyzing routing paths, liquidity
            pools, and market conditions, FlowAgent ensures that capital moves with
            precision — maximizing efficiency, minimizing slippage.
          </p>

          <p className="text-white/40 text-base leading-relaxed mb-10 max-w-lg">
            Unlike traditional aggregators, FlowAgent operates as a persistent execution agent —
            continuously routing, rebalancing, and optimizing on behalf of the entire protocol
            ecosystem. No human intervention required.
          </p>

          {/* Capabilities list */}
          <div className="space-y-2.5 mb-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-flow-blue shrink-0" />
                <span className="text-sm text-white/60">{cap}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
              >
                <div className="font-mono font-bold text-2xl text-flow-blue text-glow-blue">
                  {stat.value}
                </div>
                <div className="text-xs text-white/30 mt-1 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Network visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          {/* Outer glow */}
          <div className="absolute w-72 h-72 rounded-full bg-flow-blue/5 blur-[60px]" />

          <div className="relative w-full max-w-[520px] aspect-square">
            {/* Hex border frame */}
            <div className="absolute inset-4 rounded-2xl border border-flow-blue/10 bg-flow-card/40 backdrop-blur-sm" />
            <div className="absolute inset-8 rounded-xl border border-flow-blue/5" />

            {/* Corner marks */}
            {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-4 h-4`}>
                <div className="absolute top-0 left-0 w-full h-px bg-flow-blue/50" />
                <div className="absolute top-0 left-0 w-px h-full bg-flow-blue/50" />
              </div>
            ))}

            {/* Network SVG */}
            <svg viewBox="0 0 520 520" className="absolute inset-0 w-full h-full" fill="none">
              {/* Edges */}
              {edges.map(([a, b], i) => {
                const nodeA = nodes[a]
                const nodeB = nodes[b]
                return (
                  <motion.line
                    key={i}
                    x1={nodeA.cx}
                    y1={nodeA.cy}
                    x2={nodeB.cx}
                    y2={nodeB.cy}
                    stroke="rgba(0,212,255,0.15)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                )
              })}

              {/* Animated data pulse along edges */}
              {edges.slice(0, 5).map(([a, b], i) => {
                const nodeA = nodes[a]
                const nodeB = nodes[b]
                return (
                  <motion.circle
                    key={`pulse-${i}`}
                    r="2.5"
                    fill={i % 3 === 0 ? '#ffd700' : '#00d4ff'}
                    initial={{ cx: nodeA.cx, cy: nodeA.cy, opacity: 0 }}
                    animate={{
                      cx: [nodeA.cx, nodeB.cx],
                      cy: [nodeA.cy, nodeB.cy],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: 'linear',
                    }}
                  />
                )
              })}

              {/* Nodes */}
              {nodes.map((node, i) => (
                <NetworkNode key={i} {...node} />
              ))}

              {/* Central node */}
              <motion.circle
                cx={260}
                cy={220}
                r={14}
                fill="none"
                stroke="rgba(0,212,255,0.5)"
                strokeWidth="1.5"
                animate={{ r: [14, 20, 14], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <circle cx={260} cy={220} r={6} fill="#00d4ff" className="drop-shadow-lg" />
            </svg>

            {/* Labels */}
            <div className="absolute bottom-8 right-8 text-right">
              <div className="font-mono text-xs text-flow-blue/60">ROUTING ENGINE</div>
              <div className="font-mono text-xs text-white/20">v1.0.0</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
