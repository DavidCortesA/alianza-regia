import '@styles/globals.scss';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400','500','600','700'],
});

export const metadata = {
  title: 'Alianza Regia',
  description: ' ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='container mx-auto flex items-center justify-center '>{children}</body> 
    </html>
  )
}
