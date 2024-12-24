"use client";

import Data from "@data/sliders/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestPostsSlider = ( { posts } ) => {
    return (
        <>
            {/* container */}
            <div className="container-fluid">

            {/* row */}
            <div className="row">

                {/* col */}
                <div className="col-lg-12">

                {/* section title */}
                <div className="art-section-title">
                    {/* title frame */}
                    <div className="art-title-frame">
                    {/* title */}
                    <h4 dangerouslySetInnerHTML={{__html : Data.title}} />
                    </div>
                    {/* title frame end */}
                </div>
                {/* section title end */}

                </div>
                {/* col end */}

                {/* col */}
                <div className="col-lg-12">

                {/* slider */}
                <Swiper
                    {...SliderProps.milBlogSlider}
                    className="swiper-container art-blog-slider"
                    style={{"overflow": "visible"}}
                >   
                    {posts.slice(0, Data.numOfItems).map((item, key) => (
                    <SwiperSlide className="swiper-slide" key={`latest-posts-slider-item-${key}`}>
                    
                        {/* blog post card */}
                        <div className="art-a art-blog-card">
                        {/* post cover */}
                        <Link href={`/blog/${item.id}`} className="art-port-cover">
                            {/* img */}
                            <img src={item.image} alt={item.title} />
                        </Link>
                        {/* post cover end */}
                        {/* post description */}
                        <div className="art-post-description">
                            {/* date */}
                            <div className="art-date"><Date dateString={item.date} /> / {item.categories[0]}</div>
                            {/* title */}
                            <Link href={`/blog/${item.id}`}>
                                <h5 className="mb-15">{item.title}</h5>
                            </Link>
                            {/* text */}
                            <div className="mb-15">{item.short}</div>
                            {/* link */}
                            <Link href={`/blog/${item.id}`} className="art-link art-color-link art-w-chevron">Read more</Link>
                        </div>
                        {/* post description end */}
                        </div>
                        {/* blog post card end */}

                    </SwiperSlide>
                    ))}
                </Swiper>
                {/* slider end */}

                </div>
                {/* col end */}

                {/* col */}
                <div className="col-lg-12">

                {/* slider navigation */}
                <div className="art-slider-navigation art-blog-slider-navigation">

                    {/* left side */}
                    <div className="art-sn-left">

                    {/* slider pagination */}
                    <div className="swiper-pagination"></div>

                    </div>
                    {/* left side end */}

                    {/* right side */}
                    <div className="art-sn-right">

                    {/* slider navigation */}
                    <div className="art-slider-nav-frame">
                        {/* prev */}
                        <div className="art-slider-nav art-blog-swiper-prev"><i className="fas fa-chevron-left"></i></div>
                        {/* next */}
                        <div className="art-slider-nav art-blog-swiper-next"><i className="fas fa-chevron-right"></i></div>
                    </div>
                    {/* slider navigation */}

                    </div>
                    {/* right side end */}

                </div>
                {/* slider navigation end */}

                </div>
                {/* col end */}

            </div>
            {/* row end */}

            </div>
            {/* container end */}
        </>
    );
};

export default LatestPostsSlider;
