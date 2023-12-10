import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="@livemehere-dev-packs 는 웹 개발을 위한 javascript, typescript, react 라이브러리입니다."
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            웹 개발을 위한 javascript, typescript, react 라이브러리 입니다.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              시작하기 - 1분 ⏱️
            </Link>
          </div>
        </div>
      </header>
      <main>
        <ul className={styles.bottomDescription}>
          <li>
            이 라이브러리들의 모토는 "심플함" 입니다. 가능하면 한번의 import 로
            바로 그리고 선언적으로 사용할 수 있도록 만들었습니다.
          </li>
          <li>
            라이브러리 이외에도 웹에서 사용되는 다양한 기술 튜토리얼을
            작성하고있습니다.
          </li>
        </ul>
      </main>
    </Layout>
  );
}
