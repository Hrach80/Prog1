import { Outlet } from "react-router-dom";
import { Nav } from "../../Nav/Nav";
import Footer from "../../Footer/Footer";
const Layout = () => {
  return (
    <div>
  
      <Outlet />
      <Nav />
      <Footer />
    </div>
  );
};
export default Layout;
