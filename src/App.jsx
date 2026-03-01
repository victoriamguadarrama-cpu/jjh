import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import ProductDetail from "./components/Shop/ProductDetail";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";

export default function App() {
  const path = window.location.pathname;

  // /shop/:id
  const detailMatch = path.match(/^\/shop\/(\d+)$/);
  if (detailMatch) {
    return (
      <Layout>
        <ProductDetail productId={parseInt(detailMatch[1])} />
      </Layout>
    );
  }

  if (path === "/about") {
    return (
      <Layout>
        <About />
      </Layout>
    );
  }

  // /shop
  if (path === "/shop") {
    return (
      <Layout>
        <Shop />
      </Layout>
    );
  }

  // /menu
  if (path === "/menu") {
    return (
      <Layout>
        <Menu />
      </Layout>
    );
  }

  if (path === "/cart") {
    return (
      <Layout>
        <Cart />
      </Layout>
    );
  }

  if (path === "/checkout") {
    return (
      <Layout>
        <Checkout />
      </Layout>
    );
  }

  // default home
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
