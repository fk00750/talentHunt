const { default: Footer } = require("../footer");
const { default: Header } = require("../header");

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
