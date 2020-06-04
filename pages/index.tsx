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
const donateCardData = require("../data/charities");

interface HomeProps {
  progress: FundraiserProgress;
}
export default function Home({ progress }: HomeProps) {
  const { data } = useSWR("fundraiser", getFundraiserProgress);
  const total = data?.total || progress.total;
  const raised = data?.raised || progress.raised;
  const donateCardArray = [];

  donateCardData.forEach((card) => {
    donateCardArray.push(
      <DonateCard
        img={card.img}
        logo={card.logo}
        name={card.name}
        link={card.link}
      />
    );
  });

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
      {donateCardArray}
      <Header
        title="2. Get Educated"
        subtitle="Learn more about instituionalized racism and how you can make an impact."
      />
      <div className="grid gap-10">
        <Card
          body="Collection of readings to learn to be an effective ally."
          title="Justice in June"
          href="https://docs.google.com/document/d/1H-Vxs6jEUByXylMS2BjGH1kQ7mEuZnHpPSs1Bpaqmw0/preview?pru=AAABcppkS48%2AWmo91FkcRICr88LdxGN2Qg&fbclid=IwAR1lA2EGbMmY6oDsq5uJrhWTC3lzpJufTd-naUKCJ0uC2iCWx4WqMRzO-hQ"
        />
        <Card
          body="Report on racial disparities in arrests and use of force."
          title="Science of Justice"
          href="https://policingequity.org/images/pdfs-doc/CPE_SoJ_Race-Arrests-UoF_2016-07-08-1130.pdf"
        />
        <Card
          body="Resources from the Obama Foundation."
          title="Anguish and action"
          href="https://www.obama.org/anguish-and-action/"
        />
        <Card
          body="Donate with or without money."
          title="Other ways to help"
          href="https://blacklivesmatters.carrd.co/#donate"
        />
      </div>
      <Header
        title="3. Spread the Word"
        subtitle="Share the initiative on social media to spread education and demonstrate solidarity."
      />
      <div className="grid gap-8 sm:grid-cols-2 mb-10">
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
