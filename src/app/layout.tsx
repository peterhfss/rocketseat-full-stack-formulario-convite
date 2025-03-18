import type { Metadata } from "next";
import { Leckerli_One, Baloo_2, Open_Sans} from "next/font/google";
import "./globals.css";

const leckerli_one = Leckerli_One({
  variable: "--font-leckerli-one",
  subsets: ["latin"],
  weight: "400",
});

const baloo_2 = Baloo_2({
  variable: "--font-baloo-2",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
 
});

export const metadata: Metadata = {
  title: "Rocketseat - Formulário de Convite",
  description: "A website to generate custom invite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leckerli_one.variable} ${open_sans.variable} ${baloo_2.variable} font-open-sans antialiased bg-black text-text-body py-5`}
      >
        {children}
      </body>
    </html>
  );
}
