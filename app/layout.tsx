import type { Metadata } from "next";
import { Inter,  IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  weight: ['400','700'],
  variable:'--forn-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone",
  icons: {
    icon:'/icons/icon.svg',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
