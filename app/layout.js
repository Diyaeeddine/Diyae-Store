import { Poppins } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Diyae-Store",
  description: "Welcome to my Store",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased text-gray-700`}>
          <Toaster />
          <AppContextProvider>{children}</AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
