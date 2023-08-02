import "./globals.scss";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import type { Metadata } from "next";
import { Providers } from "@/store/provider";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import HeaderBar from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Materio",
  description: "Material Design React Admin Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeRegistry>
            <HeaderBar />
            {children}
            <Footer />
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
