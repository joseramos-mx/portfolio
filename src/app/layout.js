// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata general
export const metadata = {
  title: "José Ramos",
  description: "My experience as an innovator",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "José Ramos",
  },
};

// Configuración de viewport y theme-color
export const viewport = {
  themeColor: "#000000", // Color de barra superior en Safari/Chrome móvil
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
