import Head from 'next/head';
import  { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getAllTags, getSortedPostsData} from '../lib/posts';


export async function getStaticProps() {
    const allPostsData = getSortedPostsData().filter(c => c.tags).slice(0, 3);
    const tags = getAllTags();
    console.log(tags)
    return {
        props: {
            allPostsData,
            tags
        },
    };
}

export default function Home({ allPostsData, tags}) {
  return (
      <div>
          <Head>
              <title>{siteTitle}</title>
          </Head>

          <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto p-6">

              <div className="md:col-span-2  p-6 bg-[#1D2430]">
                  <div>
                      <h2 className="text-xl text-white font-bold mb-4">Latest articles</h2>

                      {allPostsData.map(({id, title, summary, tags}) => (
                          <div className="grid grid-cols-3 lg:grid-cols-4 bg-[#121723] my-4">
                              <div className="col-span-1 justify-items-center bg-[#7952b3] py-2">
                                  {tags?.map(tag => (
                                      <div
                                          key={tag}
                                          className="my-2 rounded-full bg-white px-4 py-1 text-sm font-semibold capitalize text-[#1D2430]"
                                      >
                                          <a href={`/blog/tags/${tag}`}>{tag}</a>

                                      </div>
                                  ))}
                              </div>
                              <div className="mx-4 my-4 lg:col-span-3 col-span-2">
                                  <a className="font-bold text-white" href={`/blog/${id}`}>
                                      {title}
                                  </a>
                                  <div>
                                      {summary}
                                  </div>
                              </div>

                          </div>
                      ))}

                  </div>
              </div>


              <div>
                  <div className="bg-[#1D2430] p-6">
                      <h2 className="text-xl font-bold mb-4 text-white">Categories</h2>
                      {tags.map(tag => (<div key={tag}
                                             className="text-center my-2 mr-2 rounded-full bg-white px-4 py-1 text-sm font-semibold capitalize text-[#1D2430]">
                          <a href={`/blog/tags/${tag[0]}`}>{tag[0]} ({tag[1]})</a>
                      </div>))}


                  </div>
              </div>
          </div>

      </div>
  );
}
