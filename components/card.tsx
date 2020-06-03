// For the match cards, the spread the word cards, and the get educated cards
interface CardProps {
  icon?: string;
  title: string;
  body: string;
  href: string;
}
export default function Card({ icon, title, body, href }: CardProps) {
  return (
    <div>
      <img src={icon} />
    </div>
  );
}
