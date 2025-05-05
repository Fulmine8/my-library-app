import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bibliothèque Associative - Catalogue de Livres',
  description: 'Un catalogue en ligne pour notre bibliothèque associative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <footer className="mt-16 py-6 bg-blue-800 text-white text-center">
          <p>© {new Date().getFullYear()} Bibliothèque Associative</p>
          <p className="text-sm mt-1">Projet déployé via Jenkins CI/CD</p>
        </footer>
      </body>
    </html>
  )
}