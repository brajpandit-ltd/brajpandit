"use client";

import Image from "next/image";
import Button from "../common-ui/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../responsive.css";

export default function Navbar() {
  const [rigthMenuOpen, setRightMenuOpen] = useState(false);
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  // Toggle functions

  const toggleleftmanu = () => setLeftMenuOpen(!leftMenuOpen);
  const togglerightmanu = () => setRightMenuOpen(!rigthMenuOpen);

  // close menu when close outside

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest(`.leftIcon`) &&
        !(event.target as HTMLElement).closest(`.leftMenu`)
      ) {
        setLeftMenuOpen(false);
      }

      if (
        !(event.target as HTMLElement).closest(`.rightIcon`) &&
        !(event.target as HTMLElement).closest(`.rightMenu`)
      ) {
        setRightMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const data = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about-us",
    },
    {
      text: "Puja",
      link: "/pujas",
    },
    {
      text: "Blogs",
      link: "/blogs",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      text: "Book Now",
      link: "/book-now",
    },
  ];

  return (
    <>
      <div className="mhdrs">
        <div className="mdhdrs">
          {/* <----------- Mobile & tablet view (Left response)  ----------------> */}
          <div className="leftright">
            <button onClick={toggleleftmanu} className="leftIcon" id="leftmenu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
            <div id="logo1" className="flex items-center">
              <Image
                id="logo"
                src="/assets/Brajlog.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <button onClick={togglerightmanu} className="rightIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>

          {leftMenuOpen && (
            <>
              <div className="rightMenu">
                <div>
                  <h1>Home</h1>
                  <h1>Home</h1>
                  <h1>Home</h1>
                  <h1>Home</h1>
                </div>
              </div>
            </>
          )}

          {rigthMenuOpen && (
            <>
              <div className="lefttMenu">
                <div className="srch">
                  <input type="text" placeholder="Search for pooja" />
                </div>
              </div>
            </>
          )}
          
          {/* <-------------------Desktop View-------------------> */}
          {/* <----Top Header-----> */}
          <div id="nav" className=" flex items-center justify-between">
            <div id="logo1" className="flex items-center">
              <Image
                id="logo"
                src="/assets/Brajlog.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </div>
            <div className="srch">
              <input type="text" placeholder="Search for pooja" />
            </div>
            <div className="bthf">
              <div className="bthf1">
                <div className="bthf2">
                  <Button text="LOGIN" id="lgtb" />
                </div>
                <div className="bthf2">
                  <Button text="RFGISTER" id="lgtb" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Navigation Menu --> */}
          <div className="nvbr1">
            <div className="nvbr2">
              <div className="nvbr">
                {data.map((item, index) => (
                  <Link key={index} href={item.link || "#"} passHref>
                    <Button
                      text={item.text || item.name || ""}
                      className="nav-btn"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
