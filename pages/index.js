import Head from 'next/head';
import  { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData().slice(0, 3);
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
  return (
      <div>
          <Head>
              <title>{siteTitle}</title>
          </Head>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({id, date, title}) => (
                      <li className={utilStyles.listItem} key={id}>
                          {title}
                          <br/>
                          {id}
                          <br/>
                          {date}
                      </li>
                  ))}
              </ul>
          </section>
      </div>
  );
}
