import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Recloud | Managed IT Services & Cloud Solutions',
  description: 'Recloud is your trusted partner for managed IT services, cloud solutions, cybersecurity, and 24/7 technical support. Focus on your business while we handle your technology.',
  generator: 'v0.app',
  alternates: {
    canonical: 'https://recloud.co.za/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Recloud",
              "url": "https://recloud.co.za",
              "logo": "https://recloud.co.za/icon.svg",
              "sameAs": [],
              "description":
                "Recloud is your trusted partner for managed IT services, cloud solutions, cybersecurity and 24/7 technical support."
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Recloud",
              "image": "https://recloud.co.za/icon.svg",
              "url": "https://recloud.co.za",
              "telephone": "+27 64 513 5788",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Brackenfell",
                "addressRegion": "Western Cape",
                "postalCode": "7560",
                "addressCountry": "ZA"
              },
              "description":
                "Recloud provides managed IT services, cloud solutions, network security and technical support from our office in Brackenfell, Cape Town.",
              "areaServed": {
                "@type": "City",
                "name": "Cape Town"
              }
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Managed IT Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Recloud",
                "url": "https://recloud.co.za",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Brackenfell",
                  "addressRegion": "Western Cape",
                  "addressCountry": "ZA"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Cape Town"
              },
              "description":
                "Recloud provides managed IT services, cloud solutions, network security and technical support from our office in Brackenfell, Cape Town."
            }),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  )
}