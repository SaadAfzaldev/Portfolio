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
  title: "Saad's Portfolio - Modern & Minimal Design",
  description: "Showcasing my work in web development and design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> {/* Ensure lang attribute is set here */}
      <head>
        <title>{"Saad's Portfolio - Modern & Minimal Design"}</title>
        <meta name="description" content={"Showcasing my work in web development and design"} />
        <link rel="icon" href="/path/to/favicon.ico" sizes="any" />
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
