import { memo } from "react";

type Props = {
  text: string;
  textShadow?: boolean;
};

function TextValue({ text, textShadow }: Readonly<Props>) {
  return (
    <p
      className="text-slate-300 xl:text-white xl:text-xl font-semibold leading-4 xl:leading-5"
      style={{
        textShadow: textShadow ? "2px 2px 2px rgba(0, 0, 0, 0.9)" : "",
      }}
    >
      {text}
    </p>
  );
}

export default memo(TextValue);
