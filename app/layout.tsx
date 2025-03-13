import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Magic Textbox – Enhance Your Words ✨',
  description: 'Enhance your text with AI to make it clearer, more professional, and engaging.',
  generator: 'Kishan | AI-Powered',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
