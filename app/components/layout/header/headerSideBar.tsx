import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { Link } from "react-router";
import HEADER_ROUTES from "~/data/routeData";

type Props = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

export default function HeaderSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: Readonly<Props>) {
  return (
    <motion.div
      className={`absolute top-0 right-0 w-full max-w-[300px] h-screen bg-gray-800 opacity-90 z-50 px-10 flex flex-col items-end justify-start ${
        isSidebarOpen ? "block" : "hidden"
      }`}
      initial={{ x: "100%" }}
      animate={{ x: isSidebarOpen ? 0 : "100%" }}
      transition={{ duration: 0.3 }}
      exit={{ x: "100%" }}
    >
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="absolute top-5 right-5 text-white"
      >
        <XMarkIcon className="size-5" />
      </button>
      <nav className="flex flex-col items-end justify-start h-full space-y-6 w-full top-20 absolute">
        {HEADER_ROUTES.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className="text-white font-enka text-xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
