import { memo } from "react";
import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as OutlineStar } from "@heroicons/react/24/outline";

import { RARITIES } from "~/data/teyvatData";
import ItemSeparator from "../../characterShowcase/filtering/itemSeparator";

type Props = {
  selectedRarity: string;
  setSelectedRarity: (rarity: string) => void;
  isCharacter?: boolean;
};

function RarityFilter({
  selectedRarity,
  setSelectedRarity,
  isCharacter = false,
}: Readonly<Props>) {
  return (
    <div className="w-full font-enka lg:w-max max-w-[300px] flex items-center justify-between p-2 mb-3 border-2 border-slate-600 rounded-lg h-[40px]">
      {!isCharacter && (
        <>
          <div className="flex items-center">
            <button
              className="cursor-pointer text-sm mx-2 flex items-center"
              onClick={() => {
                if (selectedRarity === RARITIES[0]) {
                  setSelectedRarity("all");
                } else {
                  setSelectedRarity(RARITIES[0]);
                }
              }}
            >
              1
              {selectedRarity === RARITIES[0] || selectedRarity === "all" ? (
                <StarIcon
                  className={`size-3 lg:size-4 xl:size-5 text-[gold]`}
                />
              ) : (
                <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
              )}
            </button>
            <ItemSeparator />
          </div>

          <div className="flex items-center">
            <button
              className="cursor-pointer text-sm mx-2 flex items-center"
              onClick={() => {
                if (selectedRarity === RARITIES[1]) {
                  setSelectedRarity("all");
                } else {
                  setSelectedRarity(RARITIES[1]);
                }
              }}
            >
              2
              {selectedRarity === RARITIES[1] || selectedRarity === "all" ? (
                <StarIcon
                  className={`size-3 lg:size-4 xl:size-5 text-[gold]`}
                />
              ) : (
                <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
              )}
            </button>
            <ItemSeparator />
          </div>

          <div className="flex items-center">
            <button
              className="cursor-pointer text-sm mx-2 flex items-center"
              onClick={() => {
                if (selectedRarity === RARITIES[2]) {
                  setSelectedRarity("all");
                } else {
                  setSelectedRarity(RARITIES[2]);
                }
              }}
            >
              3
              {selectedRarity === RARITIES[2] || selectedRarity === "all" ? (
                <StarIcon
                  className={`size-3 lg:size-4 xl:size-5 text-[gold]`}
                />
              ) : (
                <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
              )}
            </button>
            <ItemSeparator />
          </div>
        </>
      )}

      <div className="flex items-center">
        <button
          className="cursor-pointer text-sm mx-2 flex items-center"
          onClick={() => {
            if (selectedRarity === RARITIES[3]) {
              setSelectedRarity("all");
            } else {
              setSelectedRarity(RARITIES[3]);
            }
          }}
        >
          4
          {selectedRarity === RARITIES[3] || selectedRarity === "all" ? (
            <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
          ) : (
            <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
          )}
        </button>
        <ItemSeparator />
      </div>

      <div className="flex items-center">
        <button
          className="cursor-pointer text-sm mx-2 flex items-center"
          onClick={() => {
            if (selectedRarity === RARITIES[4]) {
              setSelectedRarity("all");
            } else {
              setSelectedRarity(RARITIES[4]);
            }
          }}
        >
          5
          {selectedRarity === RARITIES[4] || selectedRarity === "all" ? (
            <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
          ) : (
            <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
          )}
        </button>
        {isCharacter && <ItemSeparator />}
      </div>

      {isCharacter && (
        <>
          <button
            className="inline-flex items-center justify-center w-full rounded-md text-sm dark:text-slate-300 dark:hover:text-gray-200 cursor-pointer mx-2"
            onClick={() => {
              if (selectedRarity === RARITIES[5]) {
                setSelectedRarity("all");
              } else {
                setSelectedRarity(RARITIES[5]);
              }
            }}
          >
            5SP
            {selectedRarity === RARITIES[5] || selectedRarity === "all" ? (
              <StarIcon className={`size-3 lg:size-4 xl:size-5 text-[gold]`} />
            ) : (
              <OutlineStar className="size-3 lg:size-4 xl:size-5 text-[gold]" />
            )}
          </button>
        </>
      )}
    </div>
  );
}

export default memo(RarityFilter);
