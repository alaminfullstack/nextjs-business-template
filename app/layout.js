import { Inter } from "next/font/google";
import Script from 'next/script'
import '@fortawesome/fontawesome-free/css/all.css';
import "./globals.css"
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="/script/bootstrap.bundle.min.js" />
      <Script src="/script/functions.js" />
    </html>
  );
}
