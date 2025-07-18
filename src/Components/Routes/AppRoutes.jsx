import { Route, Routes } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import About from "../Pages/About/About";
import Projects from "../Pages/Porjects/Projects";
import Contacts from "../Pages/Contacts/Contacts";
import HtmlPages from "../Pages/HtmlPages/HtmlPages";
import CssPages from "../Pages/CssPages/CssPages";
import ScssPages from "../Pages/ScssPages/ScssPages";
import Revenue from "../Pages/Revenue/Revenue";
import Certificates from "../Pages/Certificat/Certificates";
import SummaryPage from "../Pages/Summary/SummaryPage";
import Registration from "../Pages/Registration/Registration";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/About Mi" element={<About />} />
          <Route index element={<Projects />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/HtmlPages" element={<HtmlPages />} />
          <Route path="/CssPages" element={<CssPages />} />
          <Route path="/ScssPages" element={<ScssPages />} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Summary" element={<SummaryPage />} />
          <Route path="/Registration" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppRoutes;
