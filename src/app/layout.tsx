import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import FooterPage from "./components/Footer";

const inter = Inter({ subsets: ['latin'] })

  title: "โรงเรียนบ้านหนองเบิด",
  description:
    "โรงเรียนบ้านหนองเบิด ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด",
  keywords: "Nongberd School, โรงเรียนบ้านหนองเบิด, หนองเบิด",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        <FooterPage />
        </AuthProvider>
      </body>
    </html>
  )
}
