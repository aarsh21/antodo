"use client";
import { useBoardStore } from "@/store/BoardStore";
import {
  BugAntIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

function Header() {
  const [searchString, setSearchString, board] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
    state.board,
  ]);


  
  return (
    <header>
      <div className="flex flex-col items-center p-5 px-32 bg-black/10 md:flex-row">
        <div className="absolute top-0 left-0 w-full rounded-md opacity-50 h-96 bg-gradient-to-br from-pink-400 to-red-400 filter blur-3xl -z-50" />
        <div className="flex items-center gap-2 p-4 ">
          <BugAntIcon className="object-contain h-10 p-1 bg-red-600 rounded-lg text-red-50 w-14" />
          <h1 className="text-4xl">AnTodo</h1>
        </div>
        <div className="flex items-center justify-end flex-1 space-x-5 ml-14">
          {/* search box */}
          <form className="flex items-center flex-initial p-2 space-x-5 bg-white rounded shadow-md">
            <MagnifyingGlassIcon className="text-gray-400 w-7 h-7" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 p-2 outline-none"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Aarsh Padia" round size="50" color="#FF1000" />
        </div>
      </div>
      {/* suggestion */}
    </header>
  );
}

export default Header;
