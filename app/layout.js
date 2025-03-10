import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],   
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ISTEMLAB",
  description: "Integrating Science Techonology Engineering and Mathematics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
