import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import LinkItem from "../components/LinkItem";
import Page from "../components/Page";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Css for js Demo Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div className={styles["table-of-contents"]}>
          <h4>Table of Contents</h4>

          <ul className={styles.nobullet}>
            {/* <LinkItem
              target="_blank"
              label="sup"
              route="https://playcode.io/816762"
            /> */}
            <LinkItem label="Rendering Logic" route="/modules/rendering" />
            <LinkItem label="Positions" route="/modules/positions" />
            <LinkItem
              label="Modern Component Architecture"
              route="/"
              comingSoon={true}
            />
            <LinkItem label="Flexbox" route="/" comingSoon={true} />
            <LinkItem
              label="Responsive and Behavioural CSS"
              route="/"
              comingSoon={true}
            />
            <LinkItem
              label="Typography and Images"
              route="/"
              comingSoon={true}
            />
            <LinkItem label="CSS Grid" route="/" comingSoon={true} />
            <LinkItem label="Animations" route="/" comingSoon={true} />
          </ul>
        </div>
      </Page>
    </div>
  );
}
