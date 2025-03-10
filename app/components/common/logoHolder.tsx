import LogoImage from "~/assets/images/logo/logo.jpg";

type Props = {
  size?: "small" | "medium" | "large" | number;
};

export default function LogoHolder({ size = "medium" }: Readonly<Props>) {
  const sizeFilter =
    size === "small"
      ? "size-8"
      : size === "large"
      ? "size-16"
      : size === "medium"
      ? "size-12"
      : `size-${size}`;

  return (
    <img
      src={LogoImage}
      alt="logo"
      className={`${sizeFilter} cursor-pointer`}
    />
  );
}
