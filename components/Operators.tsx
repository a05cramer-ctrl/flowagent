'use client'

import { motion } from 'framer-motion'

const socials = [
  {
    name: 'Twitter / X',
    handle: '@flowagent_dev',
    href: 'https://x.com/flowagent_dev',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    handle: 't.me/FlowAgent',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    handle: 'FlowAgent Server',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: 'FlowAgent Protocol',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

const communityStats = [
  { value: '12,400+', label: 'Operators' },
  { value: '$2.4M', label: 'TVL Routed' },
  { value: '340K+', label: 'Transactions' },
  { value: '18', label: 'Nations' },
]

export default function Operators() {
  return (
    <section id="operators" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-[#050520] to-flow-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flow-blue/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-flow-blue/20 to-transparent" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-flow-blue/4 blur-[120px] pointer-events-none" />

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
            <span className="font-mono text-xs text-flow-blue/80 tracking-[0.2em] uppercase">Community</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-4"
          >
            Join the{' '}
            <span className="gradient-text-blue">Operators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-base leading-relaxed"
          >
            The FlowAgent network is powered by its operators — a global collective of
            traders, builders, and capital allocators. Connect, participate, and shape the
            future of autonomous execution.
          </motion.p>
        </div>

        {/* Community stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {communityStats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border border-flow-border bg-flow-card/40 backdrop-blur-sm"
            >
              <div className="font-mono font-bold text-2xl text-flow-blue text-glow-blue mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-3 p-6 rounded-2xl border border-flow-border bg-flow-card/50 hover:border-flow-blue/30 hover:bg-flow-blue/5 transition-all duration-300"
            >
              <div className="text-white/40 group-hover:text-flow-blue transition-colors duration-300">
                {social.icon}
              </div>
              <div>
                <div className="font-semibold text-sm text-white">{social.name}</div>
                <div className="font-mono text-xs text-white/30 mt-0.5">{social.handle}</div>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-xs text-white/20 group-hover:text-flow-blue/60 transition-colors duration-300">
                <span>Join</span>
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor">
                  <path d="M2 6h8M6 2l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-flow-blue/20 p-10 md:p-14 text-center"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-flow-blue/8 via-transparent to-flow-gold/5" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-80 h-40 bg-flow-blue/10 blur-[60px]" />

          <div className="relative z-10">
            <div className="font-mono text-xs text-flow-blue/70 tracking-[0.25em] uppercase mb-4">
              Activation Protocol
            </div>
            <h3 className="font-display font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] tracking-tight mb-4">
              Ready to Route?
            </h3>
            <p className="text-white/40 max-w-md mx-auto mb-8 text-base leading-relaxed">
              The FlowAgent protocol is live. Acquire $FLOW, stake to the network, and
              become an active participant in autonomous capital execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3.5 font-semibold text-flow-bg bg-flow-blue rounded-full glow-blue hover:scale-105 active:scale-95 transition-all duration-150 text-base"
              >
                Activate FLOW
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3.5 font-semibold text-white border border-white/20 rounded-full hover:border-flow-blue/50 hover:text-flow-blue transition-all duration-200 text-base"
              >
                View Protocol
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
