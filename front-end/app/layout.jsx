import "@/styles/globals.css";
import { amiko } from "@/styles/fonts";
import Footer from "@/components/footer";
import NavBar from "@/components/nav/navbar";
import ReduxProvider from "@/components/redux-provider";


export const metadata = {
  title: "Kazu Moda | Inicio",
  description: "Kazu Moda Circular, se enfoca en la venta de ropa de segunda mano con la finalidad de apoyar al medio ambiente y reducir el consumismo dando la oportunidad a productos que aun se encuentran en pleno estado",
  keywords: ["ropa", "moda"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={amiko.className}>
        <ReduxProvider>
          <NavBar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
