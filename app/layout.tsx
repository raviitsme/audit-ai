import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audit AI",
  description: "AI spend audit tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-ink font-mono">
        <div className="min-h-screen border bg-bg text-ink font-body border-border">
          <main className="mx-auto max-w-400 px-4 md:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
