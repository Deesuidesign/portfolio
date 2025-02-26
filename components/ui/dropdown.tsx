"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

interface DropdownMenuProps {
  isMobile?: boolean;
}

export default function DropdownMenu({ isMobile = false }: DropdownMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "capitalize",
          fontWeight: "bold",
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: "16px",
          color: isMobile ? "#0b78f4" : "white",
          padding: 0,
        }}
      >
        Portfolio
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} sx={{ color: "#0b78f4" }}>
          <Link href="#uiux">UIUX Design</Link>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{ color: "#0b78f4" }}>
          <Link href="#graphics">Graphic Design</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
