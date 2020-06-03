import Head from "next/head";

export default function Meta() {
  return (
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
  );
}
