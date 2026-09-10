import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Lanslab",description:"Lanslab."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
