// card with donate button and info about that charity
interface DonateCardProps {
  img: string;
  name: string;
  link: string;
  logo: string;
  desc: string;
}
export default function DonateCard({ img, name, link, logo, desc }: DonateCardProps) {
  return (
    <div className="flex justify-between w-full bg-gray-900 align-middle my-8 h-h26 md:h-32">
      <div className="flex ">
        <div>
          <img src={img} className="h-h26 md:h-32" />
        </div>
        <div className="text-sm md:text-xl p-2 pl-4 md:pl-8 w-3/4">
          <p className="font-bold"> {name} </p>
          <p className="text-xs pb-2 md:pb-2"> {desc} </p>
          <a
            className="bg-cta hover:shadow-outline text-black font-bold py-1 md:py-2 px-4 rounded text-xs md:text-md"
            href={link}
          >
            Donate Now
          </a>
        </div>
      </div>
      <div className="max-w-p15 md: max-w-p20 my-auto p-2 md:p-4 hidden sm:block">
        <img src={logo} className="object-contain" />
      </div>
    </div>
  );
}
