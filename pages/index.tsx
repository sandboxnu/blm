import Progress from "../components/progress";
import useSWR from "swr";
import { NextPageContext } from "next";
import { FundraiserProgress } from "../lib/types";
import { getFundraiserProgress } from "../lib/cms";
import Card from "../components/card";
import Meta from "../components/meta";
import Hero from "../components/hero";
import Header from "../components/header";
import Footer from "../components/footer";
import DonateCard from "../components/donateCard";
import {
  EmailSvg,
  MessengerSvg,
  FBSvg,
  LinkedInSvg,
  InstaSvg,
} from "../components/svg";

interface HomeProps {
  progress: FundraiserProgress;
}
export default function Home({ progress }: HomeProps) {
  const { data } = useSWR("fundraiser", getFundraiserProgress);
  const total = data?.total || progress.total;
  const raised = data?.raised || progress.raised;
  return (
    <div className="max-w-screen-md mx-auto mt-10 font-display">
      <Meta />

      <Hero progress={progress} />

      <Header
        title="1. Donate"
        subtitle={
          <span>
            Send us a screenshot of your receipt and we will
            <span className="font-semibold">
              {" "}
              match your donation dollar for dollar.
            </span>
          </span>
        }
      />
      <div className="grid gap-10 sm:grid-cols-2">
        <Card
          title="email us"
          body="blm@sandboxnu.com"
          href="mailto:blm@sandboxnu.com"
          icon={EmailSvg}
        />
        <Card
          title="message us"
          body="m.me/sandboxnu"
          href="https://m.me/sandboxnu"
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
      <Header
        title="2. Get Educated"
        subtitle="It's on the people who can't directly relate to educate themselves. Here are a few of the
          many resources that exist for education."
      />
      <div className="grid gap-10">
        <Card
          body="Resources from the Obama Foundation"
          title="Anguish and action"
          href="https://www.obama.org/anguish-and-action/"
        />
        <Card
          body="Resources from the Obama Foundation"
          title="Anguish and action"
          href="https://www.obama.org/anguish-and-action/"
        />
      </div>
      <Header
        title="3. Spread the Word"
        subtitle="Share the initiative on social media to spread education and demonstrate solidarity."
      />
      <div className="grid gap-10 sm:grid-cols-2">
        <Card icon={FBSvg} body="" title="FACEBOOK" href="" />
        <Card icon={LinkedInSvg} body="" title="LINKEDIN" href="" />
        <Card icon={InstaSvg} body="" title="INSTAGRAM" href="" />
      </div>

      <Footer />
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
