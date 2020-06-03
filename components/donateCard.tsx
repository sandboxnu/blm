// card with donate button and info about that charity
interface DonateCardProps {
  img: string;
  name: string;
  link: string;
  logo: string;
}
export default function DonateCard({ img, name, link, logo }: DonateCardProps) {
  return (
  <div className="flex justify-between w-full bg-gray-900 align-middle">
    <div className="flex ">
      <div className="max-w-p30"> 
        <img src={img} />
      </div>
      <div className="text-xs md:text-xl p-2 pl-4 md:p-4 md:pl-8"> 
        <p className="font-bold pb-4"> {name} </p>
        <a 
          className="bg-cta hover:bg-cta text-black font-bold py-1 md:py-2 px-4 rounded text-xs md:text-xl"
          href={link}
        > 
        Donate Now
        </a>
      </div>
    </div>
    <div className="max-w-p10 md: max-w-p20 my-auto p-2 md:p-4">
      <img src={logo} className="object-contain"/>
    </div>
  </div>
);
}
