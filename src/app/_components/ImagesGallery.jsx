"use client";

import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import ImageView from "@components/ImageView";

const ImagesGallery = ( { items, title } ) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  
  useEffect(() => {
      //setTimeout(() => {
          isotope.current = new Isotope(".art-grid", {
              itemSelector: ".art-grid-item",
              percentPosition: true,
              masonry: {
                  columnWidth: '.art-grid-item'
              },
              transitionDuration: '0.5s',
          });
      //}, 500);
  }, []);

  useEffect(() => {
      if (isotope.current) {
          filterKey === "*"
          ? isotope.current.arrange({ filter: `*` })
          : isotope.current.arrange({ filter: `.${filterKey}` });
      }
  }, [filterKey]);

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
                <h4>{title}</h4>
                </div>
                {/* title frame end */}
            </div>
            {/* section title end */}

            </div>
            {/* col end */}

            <div className="art-grid art-grid-2-col art-gallery">

            {/* grid item */}
            {items.map((item, key) => (
            <div className="art-grid-item" key={`project-gallery-item-${key}`}>
                {/* grid item frame */}
                <a data-fancybox="gallery" data-no-swup href={item.image} className={`art-a art-portfolio-item-frame art-${item.masonrySize}`}>
                    {/* img */}
                    <img src={item.image} alt={item.alt} />
                    {/* zoom icon */}
                    <span className="art-item-hover"><i className="fas fa-expand"></i></span>
                </a>
                {/* grid item frame end */}
            </div>
            ))}
            {/* grid item end */}

            </div>

        </div>
        {/* row end */}

        <ImageView />

      </div>
      {/* container end */}
    </>
  );
};
export default ImagesGallery;
