import { Outlet } from "react-router";
import CustomCursor from "~/assets/cursor/cursor.png";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function BaseLayout() {
  return (
    <div
      className="bg-gray-900 w-full flex flex-col items-center justify-start"
      style={{
        cursor: "url(" + CustomCursor + "), auto",
      }}
    >
      <Header />
      <main className="bg-gray-900 text-white overflow-x-hidden min-h-screen w-full flex flex-col items-center justify-start mt-16 max-w-[1500px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
