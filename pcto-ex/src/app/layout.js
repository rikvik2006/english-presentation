import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PCTO expirience",
  description: "Descrizione della mia esperienza di alternaza sucuola lavoro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
