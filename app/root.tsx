import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { scan } from "react-scan";

import "react-tooltip/dist/react-tooltip.css";
import type { Route } from "./+types/root";
import "./app.css";
import { syncInitialValues } from "./utils/syncHeaderValues";
import { useAtomValue } from "jotai";
import { themeAtom } from "./atoms/general.atoms";
import { useEffect } from "react";
import { getThemeFromCookie } from "./utils/theme";

scan({
  enabled: true,
});

export async function loader({ request }: Route.LoaderArgs) {
  const theme = getThemeFromCookie({ req: request });

  return { theme };
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oxanium:wght@200;300;400;500;600;700;800&display=swap",
  },
];

if (typeof window !== "undefined") {
  syncInitialValues();
}

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { theme: initialTheme } = useLoaderData();
  return (
    <html lang="en" className={initialTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.add('${initialTheme}');
            `,
          }}
        /> */}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <Outlet />;
}

export function ErrorBoundary({ error }: Readonly<Route.ErrorBoundaryProps>) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
