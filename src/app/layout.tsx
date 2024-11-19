import "./globals.css";
import AppBar from "./components/appBar";
import Sidebar from "./components/sideBar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Ting Global New Website</title>
        <meta name="description" content="Ting Global Academy - AI-Enhanced Leadership Training" />
        <link rel="icon" href="/images/ting-global-logo.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <AppBar />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-6 ml-52 mt-16 ">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
