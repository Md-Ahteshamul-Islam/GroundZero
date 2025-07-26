import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ground Zero | Ahtesham.dev',
  description: 'AI Playground + Developer Resume',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-50 text-gray-900 font-sans">
        <nav className="bg-white px-6 py-4 shadow-md flex justify-between">
          <Link href="/" className="text-xl font-bold text-blue-700">Ground Zero</Link>
          <Link href="/playground" className="text-blue-500 hover:underline">AI Playground</Link>
        </nav>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
