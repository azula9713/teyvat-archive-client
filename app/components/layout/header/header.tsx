import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link, useLocation } from "react-router";

import LogoHolder from "~/components/common/logoHolder";
import HEADER_ROUTES from "~/data/routeData";
import HeaderSidebar from "./headerSideBar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  return (
    <header className="bg-white dark:bg-gray-900 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mx-2">
          <Link to="/" className="flex items-center justify-start py-2">
            <span className="sr-only">Teyvat Archive</span>
            <LogoHolder />
            <h1 className="text-white text-lg font-bold ml-2">
              Teyvat Archive
            </h1>
          </Link>

          <div className="hidden lg:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {HEADER_ROUTES.map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className={`transition hover:text-gray-500/75 dark:hover:text-white/75 font-enka ${
                        location.pathname === route.path.toLowerCase()
                          ? "text-teal-400"
                          : "text-white"
                      }`}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              <button className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500">
                Login
              </button>

              <div className="hidden sm:flex">
                <button className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  Register
                </button>
              </div>
            </div>

            <div className="block lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <HeaderSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
      </div>
    </header>
  );
}
