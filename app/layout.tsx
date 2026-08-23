import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteProviders, THEME_INIT_SCRIPT } from "@/lib/providers";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading-raw",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-raw",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-mono-raw",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fer Alexandru Virgil",
  description: "Portofoliul lui Fer Alexandru Virgil — student Automatică @ UTCN, cybersecurity, quantum computing & web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${playfairDisplay.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <SiteProviders>
          <div className="blob-bg">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>

          <Navbar />

          <div className="marquee-outer">
            <div className="marquee-track">
              <span className="marquee-item">
                CYBERSECURITY ✦ QUANTUM COMPUTING ✦ WEB DEVELOPMENT ✦ AUTOMATION @ UTCN ✦ CLUJ-NAPOCA, RO ✦ CYBERSECURITY ✦ QUANTUM COMPUTING ✦ WEB DEVELOPMENT ✦ AUTOMATION @ UTCN ✦ CLUJ-NAPOCA, RO ✦&nbsp;
              </span>
              <span className="marquee-item">
                CYBERSECURITY ✦ QUANTUM COMPUTING ✦ WEB DEVELOPMENT ✦ AUTOMATION @ UTCN ✦ CLUJ-NAPOCA, RO ✦ CYBERSECURITY ✦ QUANTUM COMPUTING ✦ WEB DEVELOPMENT ✦ AUTOMATION @ UTCN ✦ CLUJ-NAPOCA, RO ✦&nbsp;
              </span>
            </div>
          </div>

          <main>{children}</main>

          <ContactFooter />
        </SiteProviders>
      </body>
    </html>
  );
}
