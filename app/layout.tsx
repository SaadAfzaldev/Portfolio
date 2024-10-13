import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });

const StarsCanvasWrapper = dynamic(() => import('../components/main/starBackgroundWapper'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Saad's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <StarsCanvasWrapper /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}