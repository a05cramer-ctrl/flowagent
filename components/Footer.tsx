'use client'

import { motion } from 'framer-motion'

const links = {
  Protocol: [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Token Utility', href: '#token-utility' },
    { label: 'Tokenomics', href: '#tokenomics' },
  ],
  Resources: [
    { label: 'Whitepaper', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Audit Reports', href: '#' },
  ],
  Community: [
    { label: 'Twitter / X', href: 'https://x.com/flowagent_dev' },
    { label: 'Telegram', href: '#' },
    { label: 'Discord', href: '#' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-flow-border bg-flow-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid lg:grid-cols-[1fr_auto_auto_auto] gap-12 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full bg-flow-blue/20" />
                <div className="absolute inset-1 rounded-full bg-flow-blue/40" />
                <div className="absolute inset-2 rounded-full bg-flow-blue" />
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                FLOW<span className="text-flow-blue">AGENT</span>
              </span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-5">
              Autonomous on-chain execution layer. Intelligent routing. Real-time optimization.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-emerald-400/70">Protocol Live on Mainnet</span>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/40 hover:text-flow-blue transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-flow-blue/15 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/20 text-center md:text-left">
            © 2025 FlowAgent Protocol. All rights reserved.
          </div>
          <div className="font-mono text-xs text-white/15 text-center">
            $FLOW is not a security. For entertainment and protocol participation only. DYOR.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
