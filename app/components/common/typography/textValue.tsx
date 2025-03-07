import { memo } from "react";

type Props = {
  text: string;
};

function TextValue({ text }: Readonly<Props>) {
  return (
    <p className="text-slate-300 xl:text-white xl:text-xl font-semibold leading-4 xl:leading-5">
      {text}
    </p>
  );
}

export default memo(TextValue);
