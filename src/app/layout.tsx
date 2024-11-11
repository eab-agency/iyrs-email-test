import "~/styles/globals.css";

import { type Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Roanoke College",
  description:
    "Roanoke College is an independent, co-educational liberal arts college. Founded in 1842, it is the second-oldest Lutheran-related college in America. Discover why US News and World Report, The Princeton Review and Forbes Magazine consistently rank Roanoke as one of the top colleges and liberal arts programs in the nation.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XYZ" />
      <body>{children}</body>
    </html>
  );
}
