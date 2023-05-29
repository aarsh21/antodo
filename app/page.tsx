import { headers } from "next/dist/client/components/headers";
import React from "react";
import { BugAntIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import Header from "@/components/Header";
import Board from "@/components/Board";

function page() {
  return (
    <>
      <Header />
      <Board />
    </>
  );
}

export default page;
