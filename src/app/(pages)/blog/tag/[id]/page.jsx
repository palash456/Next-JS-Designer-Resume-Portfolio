import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getAllTagsIds, getTagData } from "@library/tags";
import { getTagPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const tagData = await getSingleTagData(params);
  
  return {
    title: tagData.title + " | Blog",
  }
}

async function BlogTag( { params } ) {
  const posts = await getAllPosts(params);
  const tagData = await getSingleTagData(params);

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
                <h4>{"Tag: "+tagData.title}</h4>
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
export default BlogTag;

export async function generateStaticParams() {
    const paths = getAllTagsIds()
    return paths
}

async function getSingleTagData(params) {
    const tagData = await getTagData(params.id)

    if ( !tagData ) {
        notFound()
    } else {
        return tagData
    }
}

async function getAllPosts( params ) {
    const tagPosts = await getTagPosts(params.id)

    if (!tagPosts.length) {
        notFound()
    }

    return tagPosts
}