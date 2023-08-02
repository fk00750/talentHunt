import Layout from "@/components/common/layout";
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
