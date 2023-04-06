import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
