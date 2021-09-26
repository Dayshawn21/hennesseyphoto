import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import SimpleReactLightbox from "simple-react-lightbox";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <SimpleReactLightbox>
        <Navbar />
        <Component {...pageProps} />
      </SimpleReactLightbox>
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
