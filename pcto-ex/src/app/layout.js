import { Inter } from "next/font/google";
import "./globals.css";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PCTO expirience",
  description: "Descrizione della mia esperienza di alternaza sucuola lavoro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BurgerMenu/>
        {children}
      </body>
    </html>
  );
}
