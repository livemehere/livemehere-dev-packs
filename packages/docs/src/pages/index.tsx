import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="This is a javscript,typescript,react library for web development"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Getting started - 1min ⏱️
            </Link>
          </div>
        </div>
      </header>
      <main>
        <ul className={styles.bottomDescription}>
          <li>
            The motto of these libraries is "simplicity." We've designed them to
            be used simply and declaratively with just one import whenever
            possible.
          </li>
          <li>
            In addition to libraries, we're also writing tutorials on various
            technologies used on the web.
          </li>
        </ul>
      </main>
    </Layout>
  );
}
