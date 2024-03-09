import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "./../components/common/Header";
import Footer from "./../components/common/Footer";
import Home from "../pages/Home";
import MyPage from "../pages/MyPage";

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
