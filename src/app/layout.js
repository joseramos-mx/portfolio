import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import "./globals.css"

// 1. Configuración de Plus Jakarta Sans (Para textos, botones, UI)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

// 2. Configuración de Fraunces (Para títulos elegantes y destacados)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  // Fraunces es una "Variable font" con ejes de suavidad y peso, 
  // por defecto se ve genial, pero puedes ajustar ejes si quisieras.
  display: "swap",
})

export const metadata = {
  title: "Jose Ramos | Portfolio",
  description: "Ingeniero Biomédico & Maker. Innovación ética y tecnología.",
}

export default function RootLayout({ children }) {
  return (
    // 3. Inyectamos ambas variables en el HTML
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-black text-white selection:bg-lime-500/30 selection:text-lime-200">
        {children}
      </body>
    </html>
  )
}