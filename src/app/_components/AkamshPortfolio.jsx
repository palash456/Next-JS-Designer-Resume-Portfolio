"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ImageView from "@components/ImageView";

const AkamshPortfolio = ({ portfolio, categories = [], layout = 'masonry', columns = 2 }) => {
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");


    useEffect(() => {
        isotope.current = new Isotope(".art-grid", {
            itemSelector: ".art-grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: '.art-grid-item'
            },
            transitionDuration: '.6s',
        });
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    const handleFilterKeyChange = (key, e) => {
        e.preventDefault();
        setFilterKey(key);
        const filterLinks = document.querySelectorAll(".art-filter a");
        filterLinks.forEach((filter) => {
            const filterValue = filter.getAttribute("data-filter");
            if (filterValue === key) {
                filter.classList.add("art-current");
            } else {
                filter.classList.remove("art-current");
            }
        });
    };

    return (
        <div className="container-fluid">
            <div className="row p-30-0">
                <div className="col-lg-12">
                    <div className="art-section-title">
                        <div className="art-title-frame">
                            <h4>Portfolio</h4>
                        </div>
                        <div className="art-right-frame">
                            <div className="art-filter">
                                <a
                                    href="#"
                                    data-filter="*"
                                    onClick={(e) => handleFilterKeyChange("*", e)}
                                    className="art-link art-current"
                                >
                                    All
                                </a>
                                {categories && categories.length > 0 ? (
                                    categories.map((item, key) => (
                                        <a
                                            href="#"
                                            key={`portfolio-filter-item-${key}`}
                                            data-filter={`${item.slug}`}
                                            className="art-link"
                                            onClick={(e) => handleFilterKeyChange(item.slug, e)}
                                        >
                                            {item.name}
                                        </a>
                                    ))
                                ) : (
                                    <p>No categories available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`art-grid art-grid-${columns}-col art-gallery`}>
                {portfolio && portfolio.length > 0 ? (
                    portfolio.map((item, key) => (
<div className={`art-grid-item ${item.category_slug}`} key={`portfolio-item-${key}`}>
{item.category_slug === "graphic-design" && (
  <a
    data-fancybox="gallery"
    href={item.image}
    className={
      layout === "masonry"
        ? `art-a art-portfolio-item-frame art-${columns === 3 && item.masonrySize === 'horizontal' ? "square" : item.masonrySize}`
        : `art-a art-portfolio-item-frame art-${columns === 3 ? "square" : "horizontal"}`
    }
  >
    <img src={item.image} alt={item.title} />
    <span className="art-item-hover">
      <i className="fas fa-expand"></i>
    </span>
  </a>
)}

{item.category_slug === "video-editing" && (
  <a
    data-fancybox="gallery"
    data-type="iframe" // Indicate YouTube content
    href={`https://www.youtube.com/embed/${item.youtubeId}`}
    className={
      layout === "masonry"
        ? `art-a art-portfolio-item-frame art-${columns === 3 && item.masonrySize === 'horizontal' ? "square" : item.masonrySize}`
        : `art-a art-portfolio-item-frame art-${columns === 3 ? "square" : "horizontal"}`
    }
  >
    <img src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`} alt={item.title} />
    <span className="art-item-hover">
      <i className="fas fa-expand"></i>
    </span>
  </a>
)}

{item.category_slug === "motion-design" && (
  <a
  data-fancybox="gallery"
  data-type="iframe" // Indicate YouTube content
  href={`https://www.youtube.com/embed/${item.youtubeId}`}
  className={
    layout === "masonry"
      ? `art-a art-portfolio-item-frame art-${columns === 3 && item.masonrySize === 'horizontal' ? "square" : item.masonrySize}`
      : `art-a art-portfolio-item-frame art-${columns === 3 ? "square" : "horizontal"}`
  }
>
  <img src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`} alt={item.title} />
  <span className="art-item-hover">
    <i className="fas fa-expand"></i>
  </span>
</a>
)}


  <div className="art-item-description">
    <h5 className="mb-15">{item.title}</h5>
    <Link
      href={{
        pathname: `/portfolio/${item.title}`,
        query: { tab: filterKey }, // Passing the current filter key as a query parameter
      }}
      className="art-link art-color-link art-w-chevron"
    >
      Read more
    </Link>
  </div>
</div>

                    ))
                ) : (
                    <p>No portfolio items available.</p>
                )}
            </div>

            <ImageView />
        </div>
    );
};

export default AkamshPortfolio;
