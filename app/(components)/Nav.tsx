"use client";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/" ? (
        <></>
      ) : (
        <div className="p-5">
          <button
            className="border border-black rounded-lg p-3 mt-2"
            onClick={async () => {
              signOut({ redirect: true, callbackUrl: "/" });
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
