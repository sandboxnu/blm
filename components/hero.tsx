// big top header
import { FundraiserProgress } from "../lib/types";

interface HeroProps {
  progress: FundraiserProgress;
}
export default function Hero({ progress }: HeroProps) {
  return (
    <>
      <div className="uppercase tracking-wide text-4xl leading-tight font-bold text-blue-800">
        Join us in the fight for racial justice
      </div>
      <div>
        NU clubs are teaming up to match up to ${progress.total} in donations to
        the following nonprofits
      </div>
    </>
  );
}
