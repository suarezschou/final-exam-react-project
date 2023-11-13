import { CartProvider } from '../context/cart'
import '../globals.css'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
