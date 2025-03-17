import { memo } from "react";
import selectedMarker from "~/assets/icons/1490.png";

type Props = {
  tabs: {
    name: string;
    id: string;
  }[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  selectedIndicator?: string;
};
function TabNavigation({
  tabs,
  selectedTab,
  setSelectedTab,
  selectedIndicator = selectedMarker,
}: Readonly<Props>) {
  return (
    <div className="flex flex-col justify-between w-1/4">
      <ul className="space-y-1 w-full pl-12 pb-6 pt-12">
        {tabs.map((tab) => (
          <li key={tab.id} className="w-full">
            <button
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center justify-start space-x-2 rounded-lg font-enka px-4 py-2 text-lg font-medium text-left cursor-pointer w-full ${
                selectedTab === tab.id
                  ? "bg-slate-800 text-white"
                  : "bg-slate-700 text-white hover:bg-slate-600"
              }`}
            >
              {selectedTab === tab.id && (
                <img
                  src={selectedIndicator}
                  alt="selected"
                  className="size-6 mr-2"
                />
              )}

              {tab.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(TabNavigation);
