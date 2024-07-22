"use client"
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}
    >
      <Menu setActive={setActive}>
        <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="#">Basic Music Theory</HoveredLink>
            <HoveredLink href="#">Advanced Composition</HoveredLink>
            <HoveredLink href="#">Song Writing</HoveredLink>
            <HoveredLink href="#">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          
        </MenuItem>
        </Link>
       
      </Menu>
    </div>
  );
}

export default Navbar;
