import './globals.css'

import localFont from 'next/font/local';

const fontSuisseInt = localFont({
  src: [
    {
      path: './fonts/suisse-int/SuisseIntl-Regular-WebS.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/suisse-int/SuisseIntl-Bold-WebS.woff',
      weight: '700',
      style: 'bold'
    },
  ],
  display: 'swap',
  variable: '--font-suisse-int'
})

const fontSuisseNeue = localFont({
  src: [
    {
      path: './fonts/suisse-neue/SuisseNeue-Regular-WebS.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/suisse-neue/SuisseNeue-Medium-WebS.woff2',
      weight: '700',
      style: 'bold'
    }
  ],
  display: 'swap',
  variable: '--font-suisse-neue'
})

export const metadata = {
  title: 'Swissgate',
  description: 'Swissage',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${fontSuisseNeue.variable} ${fontSuisseInt.variable}`}>{children}</body>
    </html>
  )
}
