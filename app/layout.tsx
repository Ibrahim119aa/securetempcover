import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>Policy details</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
