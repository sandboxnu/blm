import { FundraiserProgress } from "./types";
import { Client } from "./prismic-configuration";

export async function getFundraiserProgress(): Promise<FundraiserProgress> {
  const fundraiser = await Client().getSingle("fundraiser", {});
  return fundraiser.data;
}
