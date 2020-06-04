// card with donate button and info about that charity
interface DonateCardProps {
  img: string;
  name: string;
  link: string;
  logo: string;
}
export default function DonateCard({ img, name, link, logo }: DonateCardProps) {
  return (
    <div className="flex justify-between w-full bg-gray-900 align-middle my-8 h-24 md:h-32">
      <div className="flex ">
        <div>
          <img src={img} className="h-24 md:h-32" />
        </div>
        <div className="text-sm md:text-xl p-4 pl-4 md:pl-8">
          <p className="font-bold pb-4 md:pb-6"> {name} </p>
          <a
            className="bg-cta hover:shadow-outline text-black font-bold py-1 md:py-2 px-4 rounded text-xs md:text-xl"
            href={link}
          >
            Donate Now
          </a>
        </div>
      </div>
      <div className="max-w-p10 md: max-w-p20 my-auto p-2 md:p-4 hidden sm:block">
        <img src={logo} className="object-contain" />
      </div>
    </div>
  );
}
