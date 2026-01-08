import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TrustPulse",
  description: "Real-time trust signals for modern teams."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              TrustPulse
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Build trust with live proof
            </h1>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
