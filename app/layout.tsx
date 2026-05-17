import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: "Cabinet Infirmier Cissé Christèle - Véretz (37270) | Soins à domicile de qualité",
  description: "Cabinet infirmier à Véretz (37270). Soins de qualité et accompagnement personnalisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0E8] text-[#3D3D3D] font-serif">{children}</body>
    </html>
  );
}
