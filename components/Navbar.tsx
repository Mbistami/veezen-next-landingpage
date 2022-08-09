import React, { MouseEvent, useState } from "react";
import Image from "next/image";
import { Menu as MenuIcon, Login, ArrowDownward } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open_, setOpen_] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl_, setAnchorEl_] = React.useState<null | HTMLElement>(null);
  const handleClick_ = (event: any) => {
    setAnchorEl_(event.currentTarget);
    setOpen_(true);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleClose_ = () => {
    setAnchorEl_(null);
    setOpen_(false);
  };

  return (
    <div className="flex absolute h-20 flex-row justify-between w-full">
      <div className="w-1/3 px-5 py-5">
        <Image
          src="https://res.cloudinary.com/dmntdw6z3/image/upload/v1659314115/unknown_pxeyzx.png"
          alt="veezen"
          width={90}
          height={80}
        />
      </div>
      <div className="text-white hidden sm:flex flex-row w-full gap-16 items-center justify-end pr-10">
        <div className="cursor-pointer">
          <p onClick={() => window.open("/", "_self")}>Acceuil</p>
        </div>
        <div className="cursor-pointer">
          <p onClick={() => window.open("/apercu", "_self")}>Apercu</p>
        </div>
        <div>
          <p>Services & Sphères</p>
        </div>
        <div className="flex flex-row cursor-pointer">
          <p onClick={(e) => handleClick_(e)}>Events</p>
          <div className="flex flex-row items-center justify-center pl-2">
            <ArrowDownward className="w-4 h-4" />
          </div>
        </div>
        <div>
          <p>Contactez-Nous</p>
        </div>
        <div className="rounded-3xl bg-white text-black font-nunito font-bold px-8 py-1 cursor-pointer">
          <button>Inscrivez-vous</button>
        </div>
        <div></div>
      </div>
      <div className="flex sm:hidden w-16 flex-row justify-center items-center">
        <IconButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            console.log("click");
            handleClick(e);
          }}
        >
          <MenuIcon className="text-white opacity-70" />
        </IconButton>
      </div>
      <Menu anchorEl={anchorEl_} onClose={handleClose_} open={open_}>
        <MenuItem className="flex flex-row gap-2 items-center justify-left px-4 py-1 min-w-[130px] text-left">
          <Typography className="font-nunito text-sm min-w-[80px]">
            Yoga Event
          </Typography>
        </MenuItem>
        <MenuItem className="flex flex-row gap-2 items-center justify-left px-4 py-1 text-left">
          <Typography className="font-nunito text-sm min-w-[80px]">
            Breakfast Event
          </Typography>
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
        className="p-0"
      >
        <MenuItem className="flex flex-row gap-2 items-center justify-left px-4 py-1 min-w-[130px] text-left">
          <Typography className="font-nunito text-sm min-w-[80px]">
            Login
          </Typography>
          <Login className="w-4 h-4 opacity-70 min-w-[40px]" />
        </MenuItem>
        <MenuItem className="flex flex-row gap-2 items-center justify-left px-4 py-1 text-left">
          <Typography className="font-nunito text-sm min-w-[80px]">
            Register
          </Typography>
          <Login className="w-4 h-4 opacity-70 min-w-[40px]" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
