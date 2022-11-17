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
      <body>{children}</body>
    </html>
  );
}
