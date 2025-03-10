import { SETTINGS_ITEMS } from "~/data/settingsData";

export default function SettingItems() {
  return (
    <ul className="w-full">
      {SETTINGS_ITEMS.map((item) => (
        <li
          key={item.id}
          className="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 py-2"
        >
          <button className="px-4 text-sm font-medium text-gray-700 dark:text-gray-200 w-full flex items-center space-x-2 justify-start">
            {item.icon && (
              <item.icon className="size-6 text-gray-600 dark:text-white" />
            )}
            <label className="text-gray-600 dark:text-white text-sm font-enka">
              {item.title}
            </label>
          </button>
          <div className="m-4">{item.content && <item.content />}</div>
        </li>
      ))}
    </ul>
  );
}
