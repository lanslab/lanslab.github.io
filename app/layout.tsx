import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Fanglan Shi, CHRP | People Operations, Systems & AI",description:"Toronto-based People Operations leader building clear processes, reliable controls and practical AI-enabled workflows."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
