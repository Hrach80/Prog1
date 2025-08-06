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
import JsPages from "../Pages/JsPages/JsPages";
import ReactPages from "../Pages/ReactPages/ReactPages";
import GitPages from "../Pages/GitPages/GitPages";
import GithubPages from "../Pages/GithubPages/GithubPages";
import FigmaPages from "../Pages/FigmaPages/FigmaPages";
import RouterPages from "../Pages/RouterPages/RouterPages";
import JsonservePages from "../Pages/JsonserverPages/JsonserverPages";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Projects" element={<Projects />} />
          <Route index element={<About />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/HtmlPages" element={<HtmlPages/>} />
          <Route path="/CssPages" element={<CssPages />} />
          <Route path="/ScssPages" element={<ScssPages />} />
          <Route path="/Revenue" element={<Revenue />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Summary" element={<SummaryPage />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/JavaScript" element={<JsPages />} />
          <Route path="/React.js" element={<ReactPages />} />
          <Route path="/Git" element={<GitPages />} />
          <Route path="/GitHub" element={<GithubPages />} />
          <Route path="/Figma" element={<FigmaPages />} />
          <Route path="/react-router-dom" element={<RouterPages />} />
          <Route path="/json-server" element={<JsonservePages />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppRoutes;
