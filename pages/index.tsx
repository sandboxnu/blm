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
import { CLUBS } from "../data/clubs";
import { BUSINESSES } from "../data/businesses";

interface HomeProps {
  progress: FundraiserProgress;
}
export default function Home({ progress }: HomeProps) {
  const { data } = useSWR("fundraiser", getFundraiserProgress);
  const total = data?.total || progress.total;
  const raised = data?.raised || progress.raised;

  return (
    <div className="max-w-screen-md mx-auto p-5 mt-5 md:p-0 md:mt-10 font-display">
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
        <DonateCard key={card.name} {...card} />
      ))}
      <Header
        title="2. Get Educated"
        subtitle="Learn more about instituionalized racism and how you can make an impact."
      />
      <div className="grid gap-10">
        {EDUCATION.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <Header
        title="3. Support Black-Owned Businesses"
        subtitle="Directly support Black communities by shopping at Black-owned businesses."
      />
      <div className="grid gap-10">
        {BUSINESSES.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
      <Header
        title="4. Spread the Word"
        subtitle="Share the initiative on social media to spread education and demonstrate solidarity."
      />
      <div className="grid gap-8 sm:grid-cols-2 mb-10">
        <Card
          icon={FBSvg}
          body=""
          title="FACEBOOK"
          href="https://www.facebook.com/sandboxnu/posts/297328448336287"
        />
        <Card
          icon={LinkedInSvg}
          body=""
          title="LINKEDIN"
          href="https://www.linkedin.com/feed/update/urn:li:activity:6674477545792012288"
        />
        <Card
          icon={InstaSvg}
          body=""
          title="INSTAGRAM"
          href="https://www.instagram.com/p/CBCMjugnXzg/?utm_source=ig_web_copy_link"
        />
      </div>

      <div className="py-12">
        <div className="font-semibold pb-2">Donors</div>
        <div className="font-light">
          Thank you to the eboards, alumni, and members of the following clubs
          for their personal donations to the matching fund:
        </div>
        <div className="mt-5 grid grid-cols-2 row-gap-4">
          {CLUBS.map((c) => (
            <div>{c}</div>
          ))}
        </div>
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
