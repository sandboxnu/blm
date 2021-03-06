import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>NU Clubs for BLM</title>
      <meta
        name="description"
        content="Northeastern clubs are matching donations to fight for racial justice."
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      <meta
        property="og:title"
        content="Northeastern clubs for Racial Justice"
      />
      <meta property="og:url" content="https://blm.sandboxnu.com" />
    </Head>
  );
}
