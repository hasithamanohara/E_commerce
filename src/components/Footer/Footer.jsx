import React from 'react'
import AddHomeWorkOutlinedIcon from '@mui/icons-material/AddHomeWorkOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full px-2 py-8 bg-my-bg 
    flex items-center justify-between drop-shadow-header-shadow h-12 overflow-hidden">
      <FooterIcon name="Home" Icon={AddHomeWorkOutlinedIcon} IconText={'Home'} />
      <FooterIcon name="Category" Icon={AppsOutlinedIcon} IconText={'catagory'}/>
      <FooterIcon name="Login" Icon={AccountCircleOutlinedIcon} IconText={'Profile'}/>
    </footer>
  );
}

export default Footer

const FooterIcon = ({ Icon, IconText }) => (
  <div>
    <IconButton
      sx={{
        padding: "4px",
        borderRadius: "5px",
      }}
    >
      <div className="hover:text-[#c82196] transition-all duration-300">
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
)
