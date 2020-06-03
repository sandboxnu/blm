// card with donate button and info about that charity
interface DonateCardProps {
  img: string;
  name: string;
  link: string;
  logo: string;
}
export default function DonateCard({
  img,
  name,
  link,
  logo,
}: DonateCardProps) {}
