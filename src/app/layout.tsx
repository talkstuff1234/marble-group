import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Marble Group",
  description: "Building essential industries for sustainable growth",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Marble Group",
    description: "Building essential industries for sustainable growth",
    url: "https://marblegroup.ng/", // Your actual website URL
    siteName: "Marble Group",
    images: [
      {
        url: "/og-image.png", // This is what shows when sharing!
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marble Group",
    description: "Building essential industries for sustainable growth",
    images: ["/og-image.png"], // For Twitter
  },
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
