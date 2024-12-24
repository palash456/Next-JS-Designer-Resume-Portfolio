import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';

import AppData from "@data/app.json";

import { getPaginatedPostsData } from "@library/posts";

export const metadata = {
  title: {
		default: "Blog",
	},
  description: AppData.settings.siteDescription,
}

async function Blog() {
  const postsData = await getAllPosts();

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
                <h4>Blog</h4>
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

          </div>
          {/* col end */}
          
          <PaginatedBlog
            items={postsData.posts}
          />

        </div>
        {/* row end */}

      </div>
      {/* container end */}

      {/* container */}
      <div className="container-fluid">

        {/* row */}
        <div className="row mb-30">

          {/* col */}
          <div className="col-lg-12">

            <Pagination
              currentPage={postsData.currentPage}
              totalItems={postsData.totalPosts}
              perPage={AppData.settings.perPage}
              renderPageLink={(page) => `/blog/page/${page}`}
            />

          </div>
          {/* col end */}

        </div>
        {/* row end */}

      </div>
      {/* container end */}
    </>
  );
};
export default Blog;

async function getAllPosts() {
  const { posts, total } = getPaginatedPostsData( AppData.settings.perPage, 1 );

  return {
    posts: posts,
    totalPosts: total,
    currentPage: 1
  }
}