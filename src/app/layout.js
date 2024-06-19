import { Inter } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import Providers from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb Clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
