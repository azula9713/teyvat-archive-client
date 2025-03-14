import { memo } from "react";

type Props = {
  series: {
    value: string;
    label: string;
    itemCount: number;
  }[];
  selectedSeries: string;
  setSelectedSeries: (series: string) => void;
};

function WeaponSeriesFilter({
  series,
  selectedSeries,
  setSelectedSeries,
}: Props) {
  return (
    <div className="w-full lg:w-max max-w-[300px] flex items-center justify-between p-2 mb-3 border-2 border-slate-600 rounded-lg h-[40px]">
      <div className="flex items-center">
        <select
          className="text-sm bg-slate-200 dark:bg-slate-900 text-white px-4 py-1 focus:outline-none"
          onChange={(e) => setSelectedSeries(e.target.value)}
          value={selectedSeries}
        >
          <option value="all">All</option>
          {series
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((series) => (
              <option key={series.value} value={series.value}>
                {series.label.replace(/_/g, " ")}
                {` (${series.itemCount})`}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default memo(WeaponSeriesFilter);
