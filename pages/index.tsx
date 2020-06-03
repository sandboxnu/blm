import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDonate,
  faHandHoldingHeart,
  faBullhorn,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import Progress from "../components/progress";
import useSWR from "swr";
import { NextPageContext } from "next";
import { FundraiserProgress } from "../lib/types";
import { getFundraiserProgress } from "../lib/cms";
import EmailSvg from "../public/email.svg";
import Card from "../components/card";

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
      <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={icon} size="2x" color="#eee" />
      </div>
    </div>
  );
}
interface HomeProps {
  progress: FundraiserProgress;
}
export default function Home({ progress }: HomeProps) {
  const { data } = useSWR("fundraiser", getFundraiserProgress);
  const total = data?.total || progress.total;
  const raised = data?.raised || progress.raised;
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
        NU clubs are teaming up to match up to ${total} in donations to the
        following nonprofits
      </div>
      <Card title="email us" link="mailto:blm@sandboxnu.com" icon={EmailSvg} />

      <div className="mt-5 mb-5">
        <Progress raised={raised} total={total} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const progress = await getFundraiserProgress();
  return {
    props: {
      progress,
    },
  };
}
