import { FundraiserProgress } from "../lib/types";

export default function Progress({ raised, total }: FundraiserProgress) {
  const percent = (raised / total) * 100;
  return (
    <div className="w-full">
      <div className="flex items-baseline">
        <span className="text-4xl font-bold pr-2">${raised}</span>
        <span className="ml-1 text-gray-400">
          matched of
          <span className="font-bold"> ${total}</span>
        </span>

        <span className="hidden sm:inline ml-auto text-gray-400">
          <span className="mr-1 font-bold"> ${total - raised}</span>
          still unmatched!
        </span>
      </div>
      <div className="mt-2 h-4 bg-gray-800 rounded-full shadow-xs mb-3">
        <div
          className="h-full bg-cta rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <span className="sm:hidden text-gray-400">
        <span className="mr-1 font-bold"> ${total - raised}</span>
        still unmatched!
      </span>
    </div>
  );
}
