import '../styles/global.css';
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>);
}


/*You could import a theme like this in your _app.js:

javascript
Copiar código
import 'highlight.js/styles/github-dark.css'; // Example theme*/