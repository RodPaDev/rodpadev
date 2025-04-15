import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/components/providers";
import Scripts from "@/components/scripts";
import { Toaster } from "@/components/ui/toaster";
import { validateEnvVars } from "@/lib/utils";
import { Space_Mono } from "next/font/google";
import { Metadata } from "next/types";
import "./globals.css";


const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata() {
  const title = "rodpa.dev";
  const description = "Portfolio and blog of rodpadev - a software engineer based in Portugal.";
  const images = "https://rodpa.dev/opengraph-image.png";
  const url = "https://rodpa.dev";

  const metadata: Metadata = {
    metadataBase: new URL("https://rodpa.dev"),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      images,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@rodpadev",
      site: "@rodpadev",
    },
  };

  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  validateEnvVars();

  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <div className="container flex min-h-screen flex-col pt-2">
          <Providers>
            <Scripts />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </Providers>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
