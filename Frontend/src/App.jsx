import { Footer, Navbar } from "./components";
import { Shop, Cart, ShopCategory, LoginSignup, Product } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import men_banner from "./Assets/banner_men.png";
import women_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory category="men" banner={men_banner} />}
            />
            <Route
              path="/women"
              element={<ShopCategory category="women" banner={women_banner} />}
            />
            <Route
              path="/kids"
              element={<ShopCategory category="kid" banner={kids_banner} />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":produtId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
