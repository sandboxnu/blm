import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDonate,
  faHandHoldingHeart,
  faBullhorn,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

function Progress({ raised, total }) {
  const percent = Math.floor((raised / total) * 100);
  return (
    <div className="w-full max-w-xl">
      <span>
        <span className="text-2xl">${raised}</span>
        <span className="text-gray-700"> matched of ${total}</span>
      </span>
      <div className=" h-3 bg-white rounded-full shadow-xs">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
function Nonprofit({ name, link }) {
  return (
    <div>
      <a className="font-semibold hover:underline" href={link}>
        {name} &gt;
      </a>
    </div>
  );
}
function IconBulletPoint({ icon }) {
  return (
    <div className="ml-5 mr-10">
      <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={icon} size="2x" color="#eee" />
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Black Lives Matter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>NU clubs stand in solidarity with the Black community.</div>
      <div>
        Together, the eboards and members of many Northeastern clubs have
        committed to matching donations to organizations fighting racial
        injustice.
      </div>

      <div className="mt-5 mb-5">
        <Progress raised={50} total={1000} />
      </div>
      <div className="text-3xl">Take action</div>
      <div className="grid grid-col-1 gap-5">
        <div className="flex flex-row items-center">
          <IconBulletPoint icon={faDonate} />
          <div>
            <h2>Donate to:</h2>
            <Nonprofit
              name="Equal Justice Institute"
              link="https://support.eji.org/give/153413/#!/donation/checkout"
            />
            <Nonprofit
              name="Black Lives Matter"
              link="https://secure.actblue.com/donate/ms_blm_homepage_2019"
            />
            <Nonprofit
              name="NAACP"
              link="https://secure.actblue.com/donate/naacp-1"
            />
            <Nonprofit name="ACLU" link="https://action.aclu.org/give/now" />
            <Nonprofit
              name="Freedom/Bail Funds"
              link="https://secure.actblue.com/donate/bailfunds"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <IconBulletPoint icon={faHandHoldingHeart} />
          <div>
            <h2>Let us match your donation</h2>
            <p>
              tbd. probably just email but may build a form and send data to
              dynamodb
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <IconBulletPoint icon={faBullhorn} />
          <div>
            <div>Tell your friends</div>
            <p>maybe some social links</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <IconBulletPoint icon={faBookOpen} />
          <div>
            <div>Educate yourself</div>
            <p>find some resources</p>
          </div>
        </div>
      </div>
    </div>
  );
}
