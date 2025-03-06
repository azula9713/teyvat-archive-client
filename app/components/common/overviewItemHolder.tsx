import TextLabel from "./typography/textLabel";
import TextValue from "./typography/textValue";

type Props = {
  label: string;
  value: string;
  children?: React.ReactNode | React.ReactNode[];
};

export default function OverviewItemHolder({
  label,
  value,
  children,
}: Readonly<Props>) {
  return (
    <div className="w-full max-w-[350px] flex flex-col justify-between items-start mx-1">
      <div className=" xl:py-1 xl:px-2 xl:rounded-md relative my-1">
        <TextLabel label={label} classNames="uppercase" />
        <div
          className="flex justify-start items-center pt-1"
          style={{
            marginTop: "-2px",
          }}
        >
          {children}
          <TextValue text={value} />
        </div>
      </div>
    </div>
  );
}
