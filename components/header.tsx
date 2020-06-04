export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-4xl pb-3 pt-3 font-black uppercase">{children}</div>
  );
}
