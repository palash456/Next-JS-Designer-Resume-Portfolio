import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';
import PartnersSection from "@components/sections/Partners";

import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation';

import AppData from "@data/app.json";

import { getPaginatedPostsData } from "@library/posts";

export const metadata = {
  title: {
		default: "Blog",
	},
  description: AppData.settings.siteDescription,
}

async function BlogPage( { params } ) {
  const postsData = await getAllPosts(params);

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
        <div className="row">

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

      <PartnersSection />
    </>
  );
};
export default BlogPage;

export async function generateStaticParams() {
  return Array.from({ length: 5 }).map((_, i) => `/blog/page/${i + 2}`)
}

async function getAllPosts( params ) {
  const page = Number(params?.page) || 1
  const { posts, total } = getPaginatedPostsData( AppData.settings.perPage, page );

  if (!posts.length) {
    notFound()
  }

  if (page === 1) {
    redirect('/blog')
  }

  return {
    posts: posts,
    totalPosts: total,
    currentPage: page
  }
}