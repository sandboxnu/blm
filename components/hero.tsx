// big top header
import BLMIcon from "../public/blm.svg";

interface HeroProps {
  total: Number;
}

export default function Hero({ total }: HeroProps) {
  return (
    <div className="text-justify">
      {/* keeping this here just in case we don't want to do this via svg someday */}
      {/* <div className="uppercase tracking-wide leading-tight font-black" style={{ fontSize: "5.625rem"}}>
        Join the Fight
      </div> */}

      <img src={BLMIcon} />

      {/* <div className="uppercase tracking-wide leading-tight font-black" style={{ fontSize: "4.313rem"}}>
        For Racial Justice
      </div> */}
      <div className="pt-8 font-light">
        Student Groups at Northeastern University are teaming up to
        <span className="font-semibold">
          {" "}
          match up to ${total} in donations{" "}
        </span>
        to the following nonprofits. <span className="font-semibold">You</span>{" "}
        can make a difference in the fight for Freedom, Liberation and Justice
        by donating, educating yourself and others, and standing in solidarity
        with the movement.
        <br />
        <br />
        <span className="font-semibold">Black Lives Matter.</span>
      </div>
    </div>
  );
}
