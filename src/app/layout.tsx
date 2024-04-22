import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export * from "./metadata";
import "./global.css";
import ReactQueryProvider from "@/shared/config/libs/react-query";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
  preload: true,
  adjustFontFallback: true,
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="pt-br" data-theme="normal">
        <body className={`${roboto.className}`}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
