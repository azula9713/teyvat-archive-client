export default function SiteMapSection() {
  const LINKS = [
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Privacy Policy",
      link: "#!",
    },
    {
      name: "Link 3",
      link: "#!",
    },
    {
      name: "Link 4",
      link: "#!",
    },
  ];

  return (
    <div className="mb-6 flex flex-col items-center md:items-end">
      <h5 className="mb-2.5 font-bold uppercase">Links</h5>
      <ul className="mb-0 list-none flex flex-col items-center md:items-end text-slate-400">
        {LINKS.map((link) => (
          <li
            key={link.name}
            className="hover:text-slate-500 cursor-pointer hover:underline"
          >
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
