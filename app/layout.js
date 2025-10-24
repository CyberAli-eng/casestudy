import './globals.css'

export const metadata = {
  title: 'PrimeRole Case Studies',
  description: 'AI-powered case studies and growth stories.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-dark">
        {children}
      </body>
    </html>
  )
}
