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
export default function Home({ raised, total }) {
  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <Head>
        <title>Black Lives Matter</title>
        <meta
          name="description"
          content="Northeastern clubs are matching donations to fight for racial justice."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Northeastern clubs for Racial Justice"
        />
        <meta property="og:url" content="https://blm.sandboxnu.com" />
      </Head>

      <div className="uppercase tracking-wide text-4xl leading-tight font-bold text-blue-800">
        Join us in the fight for racial justice
      </div>
      <div>
        NU clubs are teaming up to match up to ${total} in donations to fight to
        the following nonprofits
      </div>

      <div className="mt-5 mb-5">
        <Progress raised={raised} total={total} />
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
            <div>
              Send us a screenshot of your receipt (please include the nonprofit
              name)
            </div>
            <a
              className="font-bold hover:underline"
              href="mailto:blm@sandboxnu.com"
            >
              blm@sandboxnu.com &gt;
            </a>
            <div>
              <a
                className="font-bold hover:underline"
                href="https://m.me/sandboxnu"
              >
                FB Messenger &gt;
              </a>
            </div>
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

export async function getServerSideProps(context) {
  return {
    props: {
      raised: 60,
      total: 1000,
    },
  };
}
