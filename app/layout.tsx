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
  description: "Modern & Minimal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{"Saad's Portfolio"}</title> {/* Add title here */}
        <meta name="description" content={"Modern & Minimal"} /> {/* Add description meta tag */}
        </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StarsCanvasWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
