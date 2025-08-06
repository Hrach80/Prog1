// Sidebar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdScreenSearchDesktop } from "react-icons/md";
import { IoStatsChart, IoLockClosed } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlineSummarize } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux"; // Ավելացնում ենք Redux-ի հուքսերը

import { selectTotalLikes } from "../../../redux/reducers/selectors"; // Համոզվեք, որ ճիշտ ճանապարհն եք նշել
import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const totalLikes = useSelector(selectTotalLikes);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const iconColors = {
    home: { size: 20, color: "#06EA3B" },
    search: { size: 20, color: "#09B5F9" },
    revenue: { size: 20, color: "#FFD700" },
    certificates: { size: 25, color: "#8A2BE2" },
    summary: { size: 20, color: "#FFA500" },
    registration: { size: 20, color: "#FF4500" },
    like: { size: 20, color: "#00CED1" },
    logout: { size: 20, color: "rgba(93, 114, 123, 1)" },
    emailHome: { size: 45, color: "#06EA3B" },
    searchIconLarge: { size: 20, color: "#09B5F9" },
  };

  return (
    <div className={`sidebarBox ${isOpen ? "open" : "closed"}`}>
      <div className="sidebarmini">
        <MdHome {...iconColors.home} />
        <MdScreenSearchDesktop {...iconColors.search} />
        <IoStatsChart {...iconColors.revenue} />
        <LiaCertificateSolid {...iconColors.certificates} />
        <MdOutlineSummarize {...iconColors.summary} />
        <IoLockClosed {...iconColors.registration} />
        <BiLike {...iconColors.like} />
        <button className="barbtn" onClick={toggleSidebar}>
          <TbLogout2
            {...iconColors.logout}
            className={isOpen ? "rotate-icon" : ""}
          />
        </button>
      </div>

      <div className="sidebarbody">
        <div className="homBar">
          <MdHome {...iconColors.emailHome} />
          <a className="bara" href="mailto:hrachyavagarshakyan@gmail.com">
            hrachyavagarshakyan@gmail.com
          </a>
        </div>

        <div className="search-input-wrapper">
          <CiSearch {...iconColors.searchIconLarge} className="search-icon" />
          <input className="barInput" type="text" placeholder="Search" />
        </div>

        <Link to="/Revenue" className="barp">
          <IoStatsChart {...iconColors.revenue} /> Revenue
        </Link>

        <Link to="/Certificates" className="barp">
          <LiaCertificateSolid {...iconColors.certificates} /> Certificates
        </Link>

        <Link to="/Summary" className="barp">
          <MdOutlineSummarize {...iconColors.summary} /> Summary
        </Link>

        <Link to="/Registration" className="barp">
          <IoLockClosed {...iconColors.registration} /> Registration
        </Link>

      
        <p className="barp">
          <BiLike {...iconColors.like} /> Like{" "}
          {totalLikes > 0 && `(${totalLikes})`}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
