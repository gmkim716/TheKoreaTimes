export default function ContentHeader({
  children,
  bgImg,
}: {
  children: React.ReactNode;
  bgImg?: string;
}) {
  return (
    <div
      className="flex flex-col justify-center items-center text-xl text-white bg-foreground py-4"
      style={{
        background: "var(--bg-gradient-navbar)",
        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
      }}
    >
      {children}
    </div>
  );
}