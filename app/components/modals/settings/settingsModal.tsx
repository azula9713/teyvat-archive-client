import Modal from "react-modal";
import SettingItems from "./settingItems";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onRequestClose?: () => void;
};

export default function SettingsModal({
  isOpen,
  onRequestClose,
}: Readonly<Props>) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--color-slate-900)",
      outline: "none",
      border: "2px solid var(--color-slate-700)",
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
      //   onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="w-usable max-w-[750px]">
        <h4 className="w-full text-center">Teyvat Archive Settings</h4>
        <div className="w-full my-4 py-2 flex flex-col items-center justify-between">
          <SettingItems />
        </div>
      </div>
    </Modal>
  );
}
