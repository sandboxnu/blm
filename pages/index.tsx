import Progress from "../components/progress";
import useSWR from "swr";
import { NextPageContext } from "next";
import { FundraiserProgress } from "../lib/types";
import { getFundraiserProgress } from "../lib/cms";
import EmailSvg from "../public/email.svg";
import Card from "../components/card";
import Meta from "../components/meta";

interface HomeProps {
  progress: FundraiserProgress;
}
export default function Home({ progress }: HomeProps) {
  const { data } = useSWR("fundraiser", getFundraiserProgress);
  const total = data?.total || progress.total;
  const raised = data?.raised || progress.raised;
  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <Meta />

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
