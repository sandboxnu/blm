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
import { CHARITIES } from "../data/charities";
import { EDUCATION } from "../data/education";

interface HomeProps {
  progress: FundraiserProgress;
}
export default function Home({ progress }: HomeProps) {
  const { data } = useSWR("fundraiser", getFundraiserProgress);
  const total = data?.total || progress.total;
  const raised = data?.raised || progress.raised;

  return (
    <div className="max-w-screen-md mx-auto p-5 mt-5 sm:p-0 sm:mt-10 font-display">
      <Meta />

      <Hero total={total} />

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
      <div className="grid gap-8 sm:grid-cols-2">
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

      <div className="mb-16 mt-12">
        <Progress raised={raised} total={total} />
      </div>
      {CHARITIES.map((card) => (
        <DonateCard
          key={card.name}
          img={card.img}
          logo={card.logo}
          name={card.name}
          link={card.link}
        />
      ))}
      <Header
        title="2. Get Educated"
        subtitle="Learn more about instituionalized racism and how you can make an impact."
      />
      <div className="grid gap-10">
        {EDUCATION.map((card) => (
          <Card
            key={card.title}
            body={card.body}
            title={card.title}
            href={card.href}
          />
        ))}
      </div>
      {/* <Header
        title="3. Spread the Word"
        subtitle="Share the initiative on social media to spread education and demonstrate solidarity."
      />
      <div className="grid gap-8 sm:grid-cols-2 mb-10">
        <Card icon={FBSvg} body="" title="FACEBOOK" href="" />
        <Card icon={LinkedInSvg} body="" title="LINKEDIN" href="" />
        <Card icon={InstaSvg} body="" title="INSTAGRAM" href="" />
      </div> */}

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
