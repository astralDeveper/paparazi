import "../globals.css";

// import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing, toPlainText } from "next-sanity";
import { Poppins } from 'next/font/google';
import { draftMode } from "next/headers";
// import { Suspense } from "react";

// import AlertBanner from "./alert-banner";
// import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Navbar from "../_components/navbar";
import Footer from "../_components/footer";

export async function generateMetadata(){
  const settings = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const font = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.variable} bg-white text-black`}>
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </head>

      <body>
        <Navbar />
        <section className="min-h-screen">
          {/* {draftMode().isEnabled && <AlertBanner />} */}
          <main>{children}</main>
        </section>
        <Footer />
        {draftMode().isEnabled && <VisualEditing />}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
