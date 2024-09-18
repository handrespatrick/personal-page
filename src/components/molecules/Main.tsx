type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return <div className="pt-8">{children}</div>;
}
