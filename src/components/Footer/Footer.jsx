import React from "react";
import AddHomeWorkOutlinedIcon from "@mui/icons-material/AddHomeWorkOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Footer = () => {
  const [WhoIsOpen, setWhoIsOpen] = useState({
    Home: true,
    catagory: false,
    Profile: false,
  });

  return (
    <footer
      className="fixed bottom-0 left-0 z-50 w-full px-2 py-8 bg-my-bg 
    flex items-center justify-between drop-shadow-header-shadow h-12 overflow-hidden"
    >
      <FooterIcon
        clickFun={{ WhoIsOpen, setWhoIsOpen }}
        name="Home"
        Icon={AddHomeWorkOutlinedIcon}
        IconText={"Home"}
      />
      <FooterIcon
        clickFun={{ WhoIsOpen, setWhoIsOpen }}
        name="Category"
        Icon={AppsOutlinedIcon}
        IconText={"catagory"}
      />
      <FooterIcon
        clickFun={{ WhoIsOpen, setWhoIsOpen }}
        name="Login"
        Icon={AccountCircleOutlinedIcon}
        IconText={"Profile"}
      />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, IconText, clickFun }) => {
  const ClickHandler = () => {
    const obj = {
      Home: false,
      catagory: false,
      Profile: false,
    };
    if (IconText === "Category") {
      obj.catagory = true;
      obj.Home = false;
      obj.Profile = false;
    } else if (IconText === "Profile") {
      obj.catagory = false;
      obj.Home = false;
      obj.Profile = true;
    }
    clickFun.setWhoIsOpen(obj);
  };

  return (
    <div>
      <IconButton
        sx={{
          padding: "4px",
          borderRadius: "5px",
        }}
        onClick={ClickHandler}
      >
        <div
          style={{
            borderBottom: clickFun.WhoIsOpen[IconText] && "4px solid #211bd8",
          }}
          className="hover:text-[#c82196] transition-all duration-300"
        >
          <Icon
            sx={{
              color: "#0a0b0a",
              cursor: "pointer",
            }}
          />
          <p className="cursor-text text-sm">{IconText}</p>
        </div>
      </IconButton>
    </div>
  );
};
