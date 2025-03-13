import { Outlet } from "react-router";

import CustomCursor from "~/assets/cursor/cursor.png";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function BaseLayout() {
  return (
    <div
      className="bg-slate-200 dark:bg-gray-900 w-full flex flex-col items-center justify-start"
      style={{
        cursor: "url(" + CustomCursor + "), auto",
      }}
    >
      <Header />
      <main className="bg-slate-200 dark:bg-gray-900 primary-text overflow-x-hidden w-full flex flex-col items-center justify-start mt-4 md:mt-8 lg:mt-12 xl:mt-16 max-w-[1500px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
