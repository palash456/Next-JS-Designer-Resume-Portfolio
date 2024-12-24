"use client";

import Data from "@data/sections/educationExperience.json";
import Popup from "reactjs-popup";
import ImageView from "@components/ImageView";

const HistorySection = ({ paddingTop = 0 }) => {
  return (
    <>
      {/* container */}
      <div className="container-fluid">
        {/* row */}
        <div className={paddingTop ? "row p-30-0" : "row"}>
          {/* col */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="art-section-title">
              {/* title frame */}
              <div className="art-title-frame">
                {/* title */}
                <h4 dangerouslySetInnerHTML={{ __html: Data.col2.title }} />
              </div>
              {/* title frame end */}
            </div>
            {/* section title end */}

            {/* timeline */}
            <div className="art-timeline">
              {Data.col2.items.map((item, key) => (
                <div className="art-timeline-item" key={`works-item-${key}`}>
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div
                        className="topLine"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div>
                          <h5>{item.title}</h5>
                          <div className="art-el-suptitle mb-15">
                            {item.subtitle}
                          </div>
                        </div>

                        <div
                          className="art-right-side col-5 p-0"
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            height: "fit-content",
                          }}
                        >
                          <span className="art-date">{item.date}</span>
                        </div>
                      </div>
                      <div className="bottomLine">
                        <div className=" mb-15">
                          {item.text}
                        </div>
                      </div>
                    </div>
                    {/* <p>{item.text}</p>
                                {(() => {
                                    if ( item.button ) {
                                        switch ( item.button.type ) {
                                            case "modal" : return (
                                                <Popup trigger={<a className="art-link art-color-link art-w-chevron">{item.button.label}</a>} position="bottom center">
                                                    <div className="art-a art-testimonial">
                                                        <div className="testimonial-body">
                                                            <img className="art-testimonial-face" src="/img/testimonials/face-3.jpg" alt="face" />
                                                            <h5>Paul Trueman</h5>
                                                            <div className="art-el-suptitle mb-15">Template author</div>
                                                            <div className="mb-15">Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was fixed the next morning. I couldn't ask for better support. Thank you Artur!
                                                            This is easily a 5 star freelancer.</div>
                                                        </div>
                                                        <div className="art-testimonial-footer">
                                                            <div className="art-left-side">
                                                            <ul className="art-star-rate">
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                                <li><i className="fas fa-star"></i></li>
                                                            </ul>
                                                            </div>
                                                            <div className="art-right-side">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popup>
                                            );
                                            case "link" : return (
                                                <a className="art-link art-color-link art-w-chevron" href={item.button.link} target="_blank">{item.button.label}</a>
                                            );
                                        }
                                    }
                                })()} */}
                  </div>
                </div>
              ))}
            </div>
            {/* timeline end */}
          </div>

          <div className="col-lg-12">
  {/* section title */}
  <div className="art-section-title">
    {/* title frame */}
    <div className="art-title-frame">
      {/* title */}
      <h4
        dangerouslySetInnerHTML={{
          __html: Data?.col1?.title || "Default Title",
        }}
      />
    </div>
    {/* title frame end */}
  </div>
  {/* section title end */}

  {/* timeline */}
  <div className="art-timeline art-gallery" id="history">
    {Data.col1.items.map((item, key) => (
      <div className="art-timeline-item" key={`education-item-${key}`}>
        <div className="art-timeline-mark-light"></div>
        <div className="art-timeline-mark"></div>

        <div className="art-a art-timeline-content">
          <div className="art-card-header">
            <div className="art-left-side">
              <h5>{item.title}</h5>
              <div className="art-el-suptitle mb-15">{item.subtitle}</div>
            </div>
            <div className="art-right-side">
              <span className="art-date">{item.date}</span>
            </div>
          </div>
          <div className="bottomLine">
            <div className="mb-15">{item.text}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
  {/* timeline end */}
</div>


          {/* col end */}
        </div>
        {/* row end */}

        <ImageView />
      </div>
      {/* container end */}
    </>
  );
};
export default HistorySection;
