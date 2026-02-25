import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FlowAgent — Autonomous Capital Execution',
  description:
    'FlowAgent is an autonomous on-chain execution layer that optimizes transaction routing, liquidity flows, and capital efficiency in real time.',
  keywords: ['FlowAgent', 'FLOW', 'DeFi', 'on-chain', 'capital routing', 'Web3'],
  icons: {
    icon: '/image.png',
    apple: '/image.png',
    shortcut: '/image.png',
  },
  openGraph: {
    title: 'FlowAgent — Autonomous Capital Execution',
    description: 'Intelligent routing. Autonomous execution. Real-time optimization.',
    type: 'website',
    images: [{ url: '/image.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
