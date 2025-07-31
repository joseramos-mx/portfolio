/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración básica para Vercel
  output: 'standalone', // Solo si necesitas optimización de contenedor
  
  // Si usas rutas personalizadas
  async rewrites() {
    return [
      // Agrega tus rewrites aquí si los necesitas
    ]
  },
  
  // Si tienes problemas con rutas, puedes usar trailingSlash
  trailingSlash: false,
  
  // Configuración de imágenes si usas next/image
  images: {
    domains: [], // Agrega dominios externos si cargas imágenes
  },
}

export default nextConfig