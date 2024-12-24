import React, { Suspense } from "react";
import { notFound } from 'next/navigation';
import dynamic from "next/dynamic";

import { getAllPostsIds, getPostData, getSortedPostsData } from "@library/posts";
import { getAuthorData } from "@library/authors";

import Date from '@library/date';

import Link from "next/link";

const ImageFull = dynamic( () => import("@components/ImageFull"), { ssr: false } );

async function PostsDetail( { params } ) {
  const postData = await getSinglePostData(params);
  const authorData = await getSingleAuthorData(postData.author.toLowerCase().replace(' ', '-'));
  const posts = await getAllPosts();

  //prev next navigation
  let prev = { "id": 0, "key": 0 }
  let next = { "id": 0, "key": 0 }
  let first = { "id": 0 }
  let last = { "id": 0 }

  posts.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  })

  posts.forEach(function(item, key){
    if ( key == prev.key ) { prev.id = item.id; }
    if ( key == next.key ) { next.id = item.id; }
    if ( key == 0 ) { first.id = item.id; }
    if ( key == posts.length-1 ) { last.id = item.id; }
  });

  if ( prev.key == -1 ) { prev.id = last.id; }
  if ( next.key == posts.length ) { next.id = first.id; }

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
                <h4>{postData.title}</h4>
                </div>
                {/* title frame end */}
                {/* right frame */}
                <div className="art-right-frame">
                <div className="art-project-category">{postData.categories.join(', ')}</div>
                </div>
                {/* right frame end */}
            </div>
            {/* section title end */}

            </div>
            {/* col end */}
            </div>
        {/* row end */}

        </div>
        {/* container end */}

        <Suspense fallback={<div>Loading...</div>}>
            <ImageFull src={postData.image} title={postData.title} />
        </Suspense>

        {/* container */}
        <div className="container-fluid">

        {/* row */}
        <div className="row">
            {/* col */}
            <div className="col-lg-8">

            {/* post text */}
            <div className="art-a art-card">
                <div className="art-text" dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
            </div>
            {/* post text end */}

            </div>
            {/* col end */}

            {/* col */}
            <div className="col-lg-4">

            <div className="art-a art-card">
                {/* table */}
                <div className="art-table p-15-15">
                <ul>
                    <li>
                    <h6>Date:</h6><span><Date dateString={postData.date} /></span>
                    </li>
                    <li>
                        <h6>Author:</h6>
                        <span><Link href={`/blog/author/${postData.author.toLowerCase().replace(' ', '-')}`}>{authorData.name}</Link></span>
                    </li>
                    <li>
                        <h6>Category:</h6>
                        <span>
                            {postData.categories.map((item, key) => (
                                <span key={`post-category-item-${key}`}>
                                    <Link href={`/blog/category/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                                    {key+1 !== postData.categories.length &&
                                        <span>, </span>
                                    }
                                </span>
                            ))}
                        </span>
                    </li>
                    <li>
                        <h6>Tag:</h6>
                        <span>
                            {postData.tags.map((item, key) => (
                                <span key={`post-tag-item-${key}`}>
                                    <Link href={`/blog/tag/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
                                    {key+1 !== postData.tags.length &&
                                        <span>, </span>
                                    }
                                </span>
                            ))}
                        </span>
                    </li>
                </ul>
                </div>
                {/* table end */}
            </div>

            </div>
            {/* col end */}

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

            {/* pagination */}
            <div className="art-a art-pagination">
                {/* button */}
                {prev.id != 0 &&
                <Link href={`/blog/${prev.id}`} className="art-link art-color-link art-w-chevron art-left-link"><span>Previous post</span></Link>
                }
                <div className="art-pagination-center art-m-hidden">
                <Link className="art-link" href="/blog">All publications</Link>
                </div>
                {/* button */}
                {next.id != 0 &&
                <Link href={`/blog/${next.id}`} className="art-link art-color-link art-w-chevron"><span>Next post</span></Link>
                }
            </div>
            {/* pagination end */}

            </div>
            {/* col end */}

        </div>
        {/* row end */}

      </div>
      {/* container end */}
    </>
  );
};
export default PostsDetail;

export async function generateStaticParams() {
  const paths = getAllPostsIds()

  return paths
}

async function getSinglePostData(params) {
  const postData = await getPostData(params.id)
  
  if ( !postData ) {
    notFound()
  } else {
    return postData
  }
}

async function getSingleAuthorData(author_id) {
    const authorData = await getAuthorData(author_id)
    
    return authorData
}

async function getAllPosts() {
    const allPosts = await getSortedPostsData()
  
    return allPosts
  }