export default function Header({
  title,
  subtitle,
}: {
  title: String;
  subtitle: React.ReactNode;
}) {
  return (
    <div className="pb-6 pt-12">
      <div className="text-4xl font-black uppercase pb-4">{title}</div>
      <div className="font-light">{subtitle}</div>
    </div>
  );
}
