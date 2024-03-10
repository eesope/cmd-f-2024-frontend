import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import DetailPage from "./pages/DetailPage";
import Profile from "./pages/Profile";
import Curriculum from "./pages/Curriculum";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail-page" element={<DetailPage />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
