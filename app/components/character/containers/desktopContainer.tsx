import type { ReactNode } from "react";
import TitleHeading from "~/components/common/typography/titleHeading";

type Props = {
  children: ReactNode | ReactNode[];
  title: string;
};

export default function DesktopContainer({ children, title }: Readonly<Props>) {
  return (
    <div className="w-full px-7 py-4 overflow-hidden">
      <div className="w-full flex flex-col items-start justify-center mt-8">
        <TitleHeading text={title} />
      </div>
      <div className="w-full flex flex-col items-center justify-start">
        {children}
      </div>
    </div>
  );
}
