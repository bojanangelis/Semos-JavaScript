import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amazon v3.0',
  description: 'This is only for education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <Provider store={store}>
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
    // </Provider>
  )
}
