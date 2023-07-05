import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather App',
  description: 'Discover the weather if the nearest window is really too far away.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className='bg-gradient-to-b from-sky-950 from-10% to-teal-700 to-90% text-zinc-50 h-screen flex items-center justify-center'>{children}</body>
    </html>
  )
}
