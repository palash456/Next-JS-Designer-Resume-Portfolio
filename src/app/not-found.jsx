import dynamic from "next/dynamic";

import Footer from "@layouts/footers/Index";
import MenuBar from "@layouts/menu-bar/Index";
import TopBackground from "@layouts/top-background/Index";

const InfoBar = dynamic( () => import("@layouts/info-bar/Index"), { ssr: false } );

const NotFound = () => {
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
              <div id="scrollbar" className="art-scroll-frame">

                {/* 404 content */}
                <div className="parallax-container">
                  <div className="container d-flex text-center align-items-center justify-content-center error-page">
                    <div>
                      <div className="error-page__num">404</div>
                      <h3 className="title title--h5 mb-3">Whoops!</h3>
                      <p className="description"></p><p>The page you’re looking for doesn’t exist or has been moved.</p>
                    </div>
                  </div>
                </div>
                {/* 404 content end */}

                <Footer layout={"default"} />

              </div>
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
export default NotFound;
