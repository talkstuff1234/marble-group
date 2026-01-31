import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Marble Group",
  description: "Building essential industries for sustainable growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
