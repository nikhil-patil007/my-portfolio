import { Cinzel_Decorative, EB_Garamond } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const display = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-display",
});

const body = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata = {
  title: "Nikhil Patil — Full Stack Python Developer",
  description:
    "Portfolio of Nikhil Patil, Full Stack Python Developer specializing in Django, FastAPI, Flask and React.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-ink text-parchment font-body selection:bg-gold/30 selection:text-parchment">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
