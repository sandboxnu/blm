// big top header
import { FundraiserProgress } from "../lib/types";

interface HeaderProps {
  progress: FundraiserProgress;
}
export default function Header({ progress }: HeaderProps) {
  return (
    <div>
      <h1>join the fight</h1>
      <p>student groups are teaming up</p>
    </div>
  );
}
