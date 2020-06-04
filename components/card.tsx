// For the match cards, the spread the word cards, and the get educated cards
interface CardProps {
  icon?: string;
  title: string;
  body: string;
  href: string;
}
export default function Card({ icon, title, body, href }: CardProps) {
  return (
    <a
      href={href}
      className="flex p-5 items-center bg-gray-900 border-2 border-transparent hover:border-cta"
    >
      {icon && <img className="w-12 h-12" src={icon} />}
      <div className="ml-5">
        <div className="uppercase font-bold mb-3">{title}</div>
        <div>{body}</div>
      </div>
    </a>
  );
}
