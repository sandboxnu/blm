// card with donate button and info about that charity
export interface DonateCardProps {
  img: string;
  name: string;
  donateHref: string;
  infoHref: string;
  logo: string;
}
export default function DonateCard({
  img,
  name,
  donateHref,
  infoHref,
  logo,
}: DonateCardProps) {
  return (
    <div className="flex justify-between w-full bg-gray-900 align-middle my-8 h-24 md:h-32">
      <div className="flex ">
        <div>
          <img src={img} className="h-24 md:h-32" />
        </div>
        <div className="md:text-xl p-2 pl-4 md:p-4 md:pl-8">
          <a
            href={infoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-bold mb-4 md:mb-6 hover:underline"
          >
            {name}
          </a>
          <a
            className="inline-flex items-center bg-cta hover:shadow-outline px-4 h-8 rounded"
            href={donateHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-black font-bold text-sm sm:text-lg">
              Donate Now
            </div>
          </a>
        </div>
      </div>
      <div className="max-w-p10 md: max-w-p20 my-auto p-2 md:p-4 hidden sm:block">
        <img src={logo} className="object-contain" />
      </div>
    </div>
  );
}
