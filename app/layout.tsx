import "./globals.css"
import type { ReactNode } from "react";

export const metadata = {
  title: "Selva Lodge | Hotel en la selva",
  description: "Hotel / lodge en la selva amazónica con reservas por WhatsApp.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
