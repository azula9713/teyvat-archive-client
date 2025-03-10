type Props = {
  imageUrl: string;
};

export default function CarouselItem({ imageUrl }: Readonly<Props>) {
  return (
    <li
      className="absolute -translate-y-1/2 z-[1] rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)] left-0 w-full h-full transform-none opacity-100"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
