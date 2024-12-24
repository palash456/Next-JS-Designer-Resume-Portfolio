import PaginatedBlog from '@components/PaginatedBlog';

import { notFound } from 'next/navigation';

import { getAllCategoriesIds, getCategoryData } from "@library/categories";
import { getCategoryPosts } from "@library/posts";

export async function generateMetadata({ params }) {
  const categoryData = await getSingleCategoryData(params);

  return {
    title: categoryData.title + " | Blog",
  }
}

async function BlogCategory( { params } ) {
  const posts = await getAllPosts(params);
  const categoryData = await getSingleCategoryData(params);

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
                <h4>{"Category: "+categoryData.title}</h4>
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
export default BlogCategory;

export async function generateStaticParams() {
    const paths = getAllCategoriesIds()
    return paths
}

async function getSingleCategoryData(params) {
    const categoryData = await getCategoryData(params.id)

    if ( !categoryData ) {
        notFound()
    } else {
        return categoryData
    }
}

async function getAllPosts( params ) {
    const categoryPosts = await getCategoryPosts(params.id)

    if (!categoryPosts.length) {
        notFound()
    }

    return categoryPosts
}