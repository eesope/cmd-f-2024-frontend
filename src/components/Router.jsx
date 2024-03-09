import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import MyPage from "../pages/Mypage";

function Router() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/my-page" element={<MyPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  };

  return <BrowserRoutes />;
}

export default Router;
