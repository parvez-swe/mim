import Navigaton from "./Navigaton";
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Mohammad Imran Hossain</title>
      </head>

      <body className={roboto.className}>
        <Navigaton />
        {children}
      </body>
    </html>
  );
}
