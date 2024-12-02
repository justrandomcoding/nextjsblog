import '../styles/global.css';
import Layout from "../components/layout";
import {GoogleAnalytics} from "nextjs-google-analytics";

const GA_TRACKING_ID = 'G-R2NLD7JC6Q'

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <GoogleAnalytics trackPageViews gaMeasurementId={GA_TRACKING_ID} />
    <Component {...pageProps} />
  </Layout>);
}


