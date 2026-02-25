'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const allocations = [
  { label: 'Ecosystem & Incentives', percent: 40, color: '#00d4ff', description: 'Rewards for operators, stakers, and protocol participants' },
  { label: 'Liquidity Provision', percent: 25, color: '#0099cc', description: 'Deep liquidity across primary trading pairs' },
  { label: 'Team & Advisors', percent: 15, color: '#ffd700', description: '24-month vesting with 6-month cliff' },
  { label: 'Staking Rewards', percent: 15, color: '#ffaa00', description: 'Long-term protocol security and participation' },
  { label: 'Marketing & Growth', percent: 5, color: '#66eeff', description: 'Community expansion and protocol awareness' },
]

const highlights = [
  { label: 'Total Supply', value: '1,000,000,000', unit: 'FLOW' },
  { label: 'Initial Circulating', value: '250,000,000', unit: 'FLOW' },
  { label: 'Token Standard', value: 'SPL', unit: 'Solana' },
  { label: 'Tax', value: '0%', unit: 'Buy / Sell' },
]

const CA = 'BfbVx6Lh66sipeSiGTCNThtuKzz3qC7eezkymbw2pump'

export default function Tokenomics() {
  const [copied, setCopied] = useState(false)
  const circumference = 2 * Math.PI * 60
  let cumulativePercent = 0

  const copyCA = () => {
    navigator.clipboard.writeText(CA)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="tokenomics" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-[#050520] to-flow-bg pointer-events-none" />

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
            <span className="font-mono text-xs text-flow-blue/80 tracking-[0.2em] uppercase">Tokenomics</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-4"
          >
            Designed for Longevity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-base"
          >
            A supply structure built around sustainability, incentive alignment, and
            long-term protocol growth.
          </motion.p>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-flow-border bg-flow-card/60 text-center backdrop-blur-sm"
            >
              <div className="font-mono font-bold text-2xl text-white mb-1">{h.value}</div>
              <div className="font-mono text-xs text-flow-blue/70 mb-2">{h.unit}</div>
              <div className="text-xs text-white/30 tracking-wide">{h.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CA display */}
        <motion.button
          onClick={copyCA}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
          className="group w-full mb-16 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 rounded-2xl border border-flow-blue/20 bg-flow-card/50 hover:border-flow-blue/40 hover:bg-flow-blue/5 transition-all duration-200 cursor-pointer text-left"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-flow-blue/60 tracking-[0.2em] uppercase shrink-0">Contract Address</span>
            <span className="font-mono text-sm text-white/50 group-hover:text-white/80 transition-colors break-all">
              {CA}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-flow-blue/50 group-hover:text-flow-blue transition-colors duration-200">
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-xs">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" />
                </svg>
                <span className="font-mono text-xs">Copy CA</span>
              </>
            )}
          </div>
        </motion.button>

        {/* Allocation section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donut chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72">
              <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
                {/* Background ring */}
                <circle
                  cx="80" cy="80" r="60"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="20"
                />
                {allocations.map((alloc, i) => {
                  const dashLen = (alloc.percent / 100) * circumference
                  const offset = (cumulativePercent / 100) * circumference
                  cumulativePercent += alloc.percent
                  return (
                    <motion.circle
                      key={alloc.label}
                      cx="80" cy="80" r="60"
                      fill="none"
                      stroke={alloc.color}
                      strokeWidth="18"
                      strokeDasharray={`${dashLen} ${circumference - dashLen}`}
                      strokeDashoffset={-offset}
                      strokeLinecap="butt"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                      style={{ filter: `drop-shadow(0 0 6px ${alloc.color}66)` }}
                    />
                  )
                })}
              </svg>

              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="font-mono font-bold text-2xl text-white">1B</div>
                <div className="font-mono text-xs text-flow-blue/70 tracking-widest">FLOW</div>
              </div>
            </div>
          </motion.div>

          {/* Allocation list */}
          <div className="space-y-4">
            {allocations.map((alloc, i) => (
              <motion.div
                key={alloc.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: alloc.color, boxShadow: `0 0 8px ${alloc.color}88` }}
                    />
                    <span className="text-sm font-medium text-white/80">{alloc.label}</span>
                  </div>
                  <span className="font-mono font-bold text-sm" style={{ color: alloc.color }}>
                    {alloc.percent}%
                  </span>
                </div>

                {/* Bar */}
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: alloc.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${alloc.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                  />
                </div>

                <div className="mt-1 text-xs text-white/25">{alloc.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
