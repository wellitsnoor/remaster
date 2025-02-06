"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import { user } from "@/libs/Auth";
import { AnimatePresence } from "framer-motion";

export default function () {
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const info = await user();
      // setCurrentUser(info);
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="navbar h-auto p-2 text-center fixed left-0 right-0 justify-center items-center m-auto flex font-black text-5xl select-none aboslute text-remaster z-10">
        <Link href={"/"}>REMASTER</Link>
      </div>
      <div className="navbar h-16 pr-5 text-center fixed right-0 justify-center items-center m-auto flex font-black text-2xl  select-none aboslute text-remaster z-10">
        {currentUser ? (
          <>
            {currentUser}
            <button className="ml-2 text-white cursor-pointer">Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>

      {/* <AnimatePresence>
        {popup && (
          <Popup
            message={"Leaving remaster?"}
            onCancel={handleCancelLogout}
            onConfirm={handleConfirmLogout}
          />
        )}
      </AnimatePresence> */}
    </>
  );
}
