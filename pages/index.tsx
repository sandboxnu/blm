import Progress from "../components/progress";
import useSWR from "swr";
import { NextPageContext } from "next";
import { FundraiserProgress } from "../lib/types";
import { getFundraiserProgress } from "../lib/cms";
import EmailSvg from "../public/email.svg";
import MessengerSvg from "../public/messenger.svg";
import Card from "../components/card";
import Meta from "../components/meta";
import Hero from "../components/hero";
import Header from "../components/header";
import DonateCard from "../components/donateCard";

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

      <Hero progress={progress} />

      <Header>1. Donate</Header>
      <div className="flex">
        <Card
          title="email us"
          body="blm@sandboxnu.com"
          link="mailto:blm@sandboxnu.com"
          icon={EmailSvg}
        />
        <Card
          title="message us"
          body="m.me/sandboxnu"
          link="https://m.me/sandboxnu"
          icon={MessengerSvg}
        />
      </div>

      <div className="mt-5 mb-5">
        <Progress raised={raised} total={total} />
      </div>

      <DonateCard
        img="/eji.png"
        logo="/eji_logo.png"
        name="Equal Justice Initiative"
        link="https://support.eji.org/give/153413/#!/donation/checkout"
      />
      <Header>2. Spread the word</Header>
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
