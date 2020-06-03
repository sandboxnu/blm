// For the match cards, the spread the word cards, and the get educated cards
interface CTAProps {
  icon?: string;
  title: string;
  body: string;
  link: string;
}
export default function CTA({ icon, title, body, link }: CTAProps) {
  return (
    <div>
      <img src={icon} />
    </div>
  );
}
