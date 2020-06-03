// card with donate button and info about that charity
interface DonateCardProps {
  img: string;
  name: string;
  link: string;
  logo: string;
}
export default function DonateCard({ img, name, link, logo }: DonateCardProps) {
  return (
  <div className="flex justify-between w-full bg-gray-900">
    <div className="flex">
      <img src={img} />
      <div className="p-4 pl-8"> 
        <p className="text-xl font-bold pb-4"> {name} </p>
        <a 
          className="bg-cta hover:bg-cta text-black font-bold py-2 px-4 rounded"
          href={link}>
          Donate
        </a>
      </div>
    </div>
      <img src={logo} className="object-none p-4"/>
  </div>
);
}
