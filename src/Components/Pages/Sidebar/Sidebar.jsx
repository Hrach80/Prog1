import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdScreenSearchDesktop } from "react-icons/md";
import { IoStatsChart, IoLockClosed } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlineSummarize } from "react-icons/md";

import "../Sidebar/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const miniIconProps = { size: 25, color: "rgba(4, 171, 243, 1)" };
  const bodyIconProps = { size: 25, color: "rgb(62, 62, 62)" };
  const emailIconProps = { size: 45, color: "rgb(62, 62, 62)" };

  return (
    <div className={`sidebarBox ${isOpen ? "open" : "closed"}`}>
      <div className="sidebarmini">
        <MdHome {...miniIconProps} />
        <MdScreenSearchDesktop {...miniIconProps} />
        <IoStatsChart {...miniIconProps} />
        <LiaCertificateSolid {...miniIconProps} />
        <MdOutlineSummarize {...miniIconProps} />
        <IoLockClosed {...miniIconProps} />
        <BiLike {...miniIconProps} />
        <button className="barbtn" onClick={toggleSidebar}>
          <TbLogout2
            {...miniIconProps}
            className={isOpen ? "rotate-icon" : ""}
          />
        </button>
      </div>

      <div className="sidebarbody">
        <div className="homBar">
          <MdHome {...emailIconProps} />
          <a className="bara" href="mailto:hrachyavagarshakyan@gmail.com">
            hrachyavagarshakyan@gmail.com
          </a>
        </div>

        <div className="search-input-wrapper">
          <CiSearch size={20} color="rgb(62, 62, 62)" className="search-icon" />
          <input className="barInput" type="text" placeholder="Search" />
        </div>

        <Link to="/Revenue" className="barp">
          <IoStatsChart {...bodyIconProps} /> Revenue
        </Link>
        <Link to="/Certificates" className="barp">
          <LiaCertificateSolid {...bodyIconProps} /> Certificates
        </Link>
        <Link to="/Summary" className="barp">
          <MdOutlineSummarize {...bodyIconProps} /> Summary
        </Link>
        <Link to="/Registration" className="barp">
          <IoLockClosed {...bodyIconProps} /> Registration
        </Link>
        <p className="barp">
          <BiLike {...bodyIconProps} /> Like
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
