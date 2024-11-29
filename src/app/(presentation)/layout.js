import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "../../components/Nav/Header";
import PageTransition from "../../components/PageTransition/Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "The 3 step of software development",
    description: "The 3 step of software development",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationMenu />
                {children}
                <PageTransition />
            </body>
        </html>
    );
}
