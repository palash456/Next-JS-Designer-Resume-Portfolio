import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getAllAuthorsIds, getAuthorData } from "@library/authors";
import { getAuthorPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const authorData = await getSingleAuthorData(params);
  
  return {
    title: authorData.title + " | Author | Blog",
  }
}

async function BlogAuthor( { params } ) {
  const posts = await getAllPosts(params);
  const authorData = await getSingleAuthorData(params);

  return (
    <>
      {/* container */}
      <div className="container-fluid">

        {/* row */}
        <div className="row p-30-0">

          {/* col */}
          <div className="col-lg-12">

            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4>{"Author: "+authorData.name}</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

          </div>
          {/* col end */}
          
          <PaginatedBlog
            items={posts}
          />

        </div>
        {/* row end */}

      </div>
      {/* container end */}

    </>
  );
};
export default BlogAuthor;

export async function generateStaticParams() {
    const paths = getAllAuthorsIds()
    return paths
}

async function getSingleAuthorData(params) {
    const authorData = await getAuthorData(params.id)

    if ( !authorData ) {
        notFound()
    } else {
        return authorData
    }
}

async function getAllPosts( params ) {
    const authorPosts = await getAuthorPosts(params.id)

    if (!authorPosts.length) {
        notFound()
    }

    return authorPosts
}