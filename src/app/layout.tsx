import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Troy University",
  description:
    "From award-winning academic opportunities to exciting Division I athletics events, Troy University provides students around the globe with top-notch learning opportunities—in class and online. For 19 consecutive years, TROY has been named to The Princeton Review’s “Best in the Southeast” list. It’s your time to lead.&#34;",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
