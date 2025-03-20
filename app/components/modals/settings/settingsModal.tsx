import { useAtomValue } from "jotai";
import Modal from "react-modal";
import { themeAtom } from "~/atoms/general.atoms";
import SettingCategories from "./settingCategories";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRequestClose?: () => void;
};

export default function SettingsModal({
  isOpen,
  onRequestClose,
}: Readonly<Props>) {
  const theme = useAtomValue(themeAtom);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: `${
        theme === "light" ? "var(--color-slate-200)" : "var(--color-slate-900)"
      }`,
      outline: "none",
      border: `${
        theme === "light" ? "var(--color-slate-300)" : "var(--color-slate-900)"
      } 2px solid`,
      borderRadius: "0.5rem",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      zIndex: 1000,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Teyvat Archive Settings"
    >
      <div className="w-usable max-w-[750px] bg-slate-200 dark:bg-slate-900">
        <h4 className="w-full text-center primary-text">
          Teyvat Archive Settings
        </h4>
        <div className="w-full my-4 py-2 flex flex-col items-center justify-between">
          <SettingCategories />
        </div>
      </div>
    </Modal>
  );
}
