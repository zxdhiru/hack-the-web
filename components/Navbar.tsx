"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-row py-4 px-4 justify-between items-center">
      {/* Logo */}
      <h1>Logo.</h1>
      {/* Menu */}
      <div className="flex">
        <ul className="flex justify-between gap-4 ">
          <li>
            <Link href={"/events"}>Events</Link>
          </li>
          <li>
            <Link href={"/events"}>Projects</Link>
          </li>
          <li>
            <Link href={"/events"}>Leaderboard</Link>
          </li>
        </ul>
      </div>
      {/* Button */}
      {/* <Button className="hidden sm:block">Register</Button> */}
    </div>
  );
};

export default Navbar;
