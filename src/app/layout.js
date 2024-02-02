import Header from '@/components/partials/Header';
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins(
  { 
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  },
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
