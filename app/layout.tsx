
import "./globals.css";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | Ali Raza ",
  description: "Quickly calculate your EMI, total interest, and payment schedule for any loan amount, interest rate, and tenure. Free and easy to use.",
};


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the weights you need
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
