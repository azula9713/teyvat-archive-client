import { Link, NavLink } from "react-router";
import LogoImage from "~/assets/images/logo/logo.jpg";

type Props = {
  size?: "small" | "medium" | "large";
};

export default function LogoHolder({ size = "medium" }: Props) {
  const sizeFilter =
    size === "small" ? "size-8" : size === "large" ? "size-16" : "size-12";

  return (
    <div>
      <img
        src={LogoImage}
        alt="logo"
        className={`${sizeFilter} cursor-pointer`}
      />
    </div>
  );
}
