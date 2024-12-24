/*
// Use Smooth Scrollbar Effect
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import React, { useRef } from "react";
import {Scrollbar} from 'smooth-scrollbar-react';
SmoothScrollbar.use(OverscrollPlugin);
*/
import dynamic from "next/dynamic";

import Footer from "@layouts/footers/Index";
import MenuBar from "@layouts/menu-bar/Index";
import TopBackground from "@layouts/top-background/Index";

const InfoBar = dynamic( () => import("@layouts/info-bar/Index"), { ssr: false } );

const PagesLayouts = ({
  children
}) => {
  return (
    <>
      {/* mobile top bar */}
      <div className="art-mobile-top-bar"></div>
      
      {/* app wrapper */}
      <div className="art-app-wrapper">
        
        {/* app container */}
        <div className="art-app-container">

          <InfoBar />

          {/* content */}
          <div className="art-content">

            <TopBackground />
              
            {/* swup container */}
            <div className="transition-fade" id="swup">

              {/* scroll frame */}
              {/*<Scrollbar>*/}
              <div id="scrollbar" className="art-scroll-frame">

                {children}

                <Footer layout={"default"} />

              </div>
              {/*</Scrollbar>*/}
              {/* scroll frame end */}

            </div>
            {/* swup container end */}

          </div>
          {/* content end */}

          <MenuBar />

        </div>
        {/* app container end */}

      </div>
      {/* app wrapper end */}
    </>
  );
};
export default PagesLayouts;
