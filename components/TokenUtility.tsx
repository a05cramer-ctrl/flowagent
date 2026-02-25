'use client'

import { motion } from 'framer-motion'

const utilities = [
  {
    title: 'Routing Priority',
    description:
      'FLOW stakers receive priority placement in the execution queue, ensuring their transactions are processed first during high-congestion periods.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'blue',
  },
  {
    title: 'Governance Voting',
    description:
      'Token holders vote on protocol upgrades, parameter adjustments, and routing algorithm changes. FLOW = influence over the network&apos;s direction.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'gold',
  },
  {
    title: 'Protocol Staking',
    description:
      'Stake FLOW to secure the network, earn protocol revenue, and participate in the autonomous execution layer that powers every transaction.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'blue',
  },
  {
    title: 'Execution Incentives',
    description:
      'Node operators and routing validators earn FLOW rewards for maintaining protocol uptime and contributing execution capacity to the network.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'gold',
  },
  {
    title: 'Protocol Access',
    description:
      'Holding FLOW unlocks advanced protocol features — including batch routing APIs, custom execution parameters, and priority support.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'blue',
  },
  {
    title: 'Fee Reduction',
    description:
      'The more FLOW you hold, the lower your protocol fees. Tiered discounts reward committed participants and long-term operators of the network.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'gold',
  },
]

export default function TokenUtility() {
  return (
    <section id="token-utility" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-flow-bg via-flow-surface/20 to-flow-bg pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-96 h-96 rounded-full bg-flow-gold/3 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-96 h-96 rounded-full bg-flow-blue/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-flow-gold/20 bg-flow-gold/5"
          >
            <span className="w-1 h-1 rounded-full bg-flow-gold" />
            <span className="font-mono text-xs text-flow-gold/80 tracking-[0.2em] uppercase">$FLOW Token</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight mb-4"
          >
            Token Utility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto text-base leading-relaxed"
          >
            $FLOW is the power source of the network. It aligns incentives, enables
            participation, and gates access to the protocol&apos;s most powerful capabilities.
          </motion.p>
        </div>

        {/* Utility cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map((utility, i) => (
            <motion.div
              key={utility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="group relative p-6 rounded-2xl border border-flow-border bg-flow-card/50 hover:border-flow-blue/25 backdrop-blur-sm transition-all duration-300 cursor-default"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  utility.accent === 'gold'
                    ? 'bg-gradient-to-br from-flow-gold/5 to-transparent'
                    : 'bg-gradient-to-br from-flow-blue/5 to-transparent'
                }`}
              />

              {/* Icon */}
              <div
                className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  utility.accent === 'gold'
                    ? 'bg-flow-gold/10 text-flow-gold group-hover:bg-flow-gold/20'
                    : 'bg-flow-blue/10 text-flow-blue group-hover:bg-flow-blue/20'
                }`}
              >
                {utility.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg mb-2 text-white">
                {utility.title}
              </h3>

              {/* Description */}
              <p className="text-white/40 text-sm leading-relaxed">
                {utility.description.replace(/&apos;/g, "'")}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  utility.accent === 'gold'
                    ? 'bg-gradient-to-r from-transparent via-flow-gold/40 to-transparent'
                    : 'bg-gradient-to-r from-transparent via-flow-blue/40 to-transparent'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
