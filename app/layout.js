import Head from 'next/head';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <Head >
        <title>GPU Doctor</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  )
}
