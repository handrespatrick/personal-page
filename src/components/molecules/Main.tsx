type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return <main className="pt-8">{children}</main>;
}
