type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-black min-h-lvh">
      <div className="w-[500px] mx-auto">{children}</div>
    </div>
  );
}
