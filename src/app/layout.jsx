import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "../styles/main.scss";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Airfolio",
  description: "Portfolio landing page for creative professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
