"use client";
import "../styles.css";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Input,
} from "@heroui/react";
import Link from "next/link";
import Button from "../common-ui/Button";

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width = 24,
  height = 24,
  ...props
}: {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export const BrajPanditLogo = () => {
  return (
    <>BrajPandit</>
    // <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    //   <path
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill="currentColor"
    //     fillRule="evenodd"
    //   />
    // </svg>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar id="hdrs" maxWidth="2xl" className="mx-auto">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="hidden sm:block"
          />
          <NavbarBrand>
            <BrajPanditLogo />
            {/* <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} width={18} height={18} />}
            type="search"
          />
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
          <NavbarItem>
            <Button
              as={Link}
              // color="primary"
              href="#"
              variant="flat"
              text="Login"
            />
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              // color="primary"
              href="#"
              variant="flat"
              text="Register"
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="nvbr1">
        <div className="nvbr2">
          <div className="nvbr">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">About</button>
            <button className="nav-btn">Puja</button>
            <button className="nav-btn">Blogs</button>
            <button className="nav-btn">Shop</button>
            <button className="nav-btn">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
