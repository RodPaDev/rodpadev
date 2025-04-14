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
  weight: "400",
});

export async function generateMetadata() {
  const title = "hashnode-next";
  const description = "The fastest way to go headless with Hashnode";
  const images = "https://hashnode-next.dev/opengraph-image.png";
  const url = "https://hashnode-next.dev";

  const metadata: Metadata = {
    metadataBase: new URL("https://hashnode-next.dev"),
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
      creator: "@thealexkates",
      site: "@thealexkates",
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
