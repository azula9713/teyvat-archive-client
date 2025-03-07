import { Link } from "react-router";

type Props = {
  name: string;
  url: string;
  icon: string;
  iconSize?: number;
};

export default function SocialIcon({
  name,
  url,
  icon,
  iconSize = 24,
}: Readonly<Props>) {
  return (
    <Link to={url} target="_blank" className="cursor-pointer">
      <div className="p-1 flex flex-col lg:flex-row items-center lg:justify-start justify-center space-x-2 text-white">
        <img src={icon} alt={name} width={iconSize} className="text-white" />
      </div>
    </Link>
  );
}
