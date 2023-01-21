import "../../styles/globals.css";
import { Header, Banner } from "../../components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto">
        <Header />
        {/* Cambiar por Slideshow */}
        {/* <Banner /> */}

        {children}
      </body>
    </html>
  );
}
