import "./globals.css";

export const metadata = {
  title: "Smith Crypto Card",
  description: "Premium crypto card testing platform on ETH Sepolia"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
