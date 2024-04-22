import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "./components/Nav/menubar";
import Footer from "./components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GREENBOX DESIGN COMPANY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
