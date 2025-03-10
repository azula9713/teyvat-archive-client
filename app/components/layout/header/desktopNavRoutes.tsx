import { Link, useLocation } from "react-router";
import HEADER_ROUTES from "~/data/routeData";

export default function DesktopNavRoutes() {
  const location = useLocation();

  return (
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
  );
}
