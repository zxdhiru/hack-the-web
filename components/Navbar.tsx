"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar = ({ classes }: { classes: string }) => {
  return (
    <div
      className={`bg-gray-800 text-white flex flex-row py-4 px-4 justify-between items-center ${classes}`}
    >
      {/* Logo */}
      <Link href={"/"}>
        <h1>TECHSPIRE</h1>
      </Link>
      {/* Menu */}
      <div className="flex">
        <ul className="flex justify-between gap-4 ">
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/leadership"}>Leaderboard</Link>
          </li>
        </ul>
      </div>
      {/* Button */}
      {/* <Button className="hidden sm:block">Register</Button> */}
    </div>
  );
};

export default Navbar;
