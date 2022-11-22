import Navigaton from "./Navigaton";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Mohammad</title>
      </head>
      
      <body>
        <Navigaton />
        {children}
      </body>
    </html>
  );
}
