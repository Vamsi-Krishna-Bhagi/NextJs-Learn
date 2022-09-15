import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs First App</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
