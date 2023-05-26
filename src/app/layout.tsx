import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full stack Todo list app",
  description: "Add Tasks,Mark them as done,Delete them",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900 text-white">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
