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
        <div className="flex footer bg-slate-800 h-16 text-white text-center items-center justify-center">
          <span>
            Develope and Design :{" "}
            <a href="https://web.facebook.com/parvez.musharaf.355">
              Md Parvez Musharaf
            </a>{" "}
            | <span className="far fa-copyright"></span> 2022 All rights reserved.
          </span>
        </div>
      </body>
    </html>
  );
}
