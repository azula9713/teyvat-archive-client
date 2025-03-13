import { Bars3Icon, Cog6ToothIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router";

import LogoHolder from "~/components/common/logoHolder";
import SettingsModal from "~/components/modals/settings/settingsModal";
import DesktopNavRoutes from "./desktopNavRoutes";
import HeaderSidebar from "./headerSideBar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 w-full shadow-slate-950 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mx-2 w-full">
          <Link to="/" className="flex items-center justify-start py-2 w-full">
            <span className="sr-only">Teyvat Archive</span>
            <LogoHolder />
            <h1 className="text-white text-lg font-bold ml-2">
              Teyvat Archive
            </h1>
          </Link>

          <div className="hidden lg:block w-full items-center justify-center">
            <DesktopNavRoutes />
          </div>

          <div className="flex items-center gap-4 w-full justify-end">
            <div className="hidden lg:flex lg:gap-4">
              {/* add a settings toggle */}
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 cu"
              >
                <Cog6ToothIcon className="size-5 primary-text" />
              </button>
            </div>

            <div className="block lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <Bars3Icon className="size-5" />
              </button>
            </div>
          </div>

          <HeaderSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isSettingsOpen={isSettingsOpen}
            setIsSettingsOpen={setIsSettingsOpen}
          />
          <SettingsModal
            isOpen={isSettingsOpen}
            setIsOpen={setIsSettingsOpen}
            onRequestClose={() => setIsSettingsOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
