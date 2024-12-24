import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getAllArchivesIds, getArchiveData } from "@library/archives";
import { getArchivePosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const archiveData = await getSingleArchiveData(params);
  
  return {
    title: archiveData.month+', '+archiveData.year + " | Archive | Blog",
  }
}

async function BlogArchive( { params } ) {
  const posts = await getAllPosts(params);
  const archiveData = await getSingleArchiveData(params);

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
                <h4>{"Archive: "+archiveData.month+', '+archiveData.year}</h4>
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
export default BlogArchive;

export async function _generateStaticParams() {
    const paths = getAllArchivesIds()
    return paths
}

async function getSingleArchiveData(params) {
    const archiveData = await getArchiveData(params.id)

    if ( !archiveData ) {
        notFound()
    } else {
        return archiveData
    }
}

async function getAllPosts( params ) {
    const archivePosts = await getArchivePosts(params.id)

    if (!archivePosts.length) {
        notFound()
    }

    return archivePosts
}