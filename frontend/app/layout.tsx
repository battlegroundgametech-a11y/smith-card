import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Smith Crypto Card",
  description: "Premium crypto card testing platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
