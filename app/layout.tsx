import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NGBJJ - A Arte da Excelência",
  description: "O Jiu-Jitsu de Alto Nível. Disciplina, técnica de elite e uma comunidade de prestígio.",
  keywords: ["jiu-jitsu", "bjj", "artes marciais", "treino premium", "academia de elite"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
