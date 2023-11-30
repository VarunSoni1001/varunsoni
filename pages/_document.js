import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&f[]=cabinet-grotesk@1,800,500,100,700,400,300,200,900&f[]=boska@900,901,701,201,401,301,500,400,2,1,200,700,300,501&f[]=zina@400&f[]=kola@400&f[]=stardom@400&f[]=general-sans@200,500,300,600,400,700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Varun Soni" />
        <meta
          name="description"
          content="A Computer Science student, who is passionate about Web Development and Android App Development, aiming to create seamless user experience and interfaces."
        />
        <meta name="author" content="Varun Soni" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://varunsoni.vercel.app" />
        <meta property="og:title" content="Varun Soni" />
        <meta
          property="og:description"
          content="A Computer Science student, who is passionate about Web Development and Android App Development, aiming to create seamless user experience and interfaces."
        />
        <meta property="og:image" content="/varunsoni.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://varunsoni.vercel.app" />
        <meta property="twitter:title" content="Varun Soni" />
        <meta
          property="twitter:description"
          content="A Computer Science student, who is passionate about Web Development and Android App Development, aiming to create seamless user experience and interfaces."
        />
        <meta property="twitter:image" content="/varunsoni.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
