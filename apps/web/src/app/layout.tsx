import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ConvexClientProvider } from "@repo/convex-api";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventurers League logs",
  description: "A website to log your amazing sessions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
