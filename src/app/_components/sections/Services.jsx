import Data from "@data/sections/services.json";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
        {/* services */}
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
            
            {Data.items.map((item, key) => (
            <div className="col-lg-4 col-md-6" key={`services-item-${key}`}>

            {/* service */}
            <div className="art-a art-service-icon-box">
                {/* service content */}
                <div className="art-service-ib-content">
                    {/* title */}
                    <h5 className="mb-15">{item.title}</h5>
                    {/* text */}
                    <div className="mb-15">{item.text}</div>
                    {/* button */}
                    <div className="art-buttons-frame">
                        <Link href="#AkamshPortfolio" className="art-link art-color-link art-w-chevron">{item.button.label}</Link>
                    </div>
                </div>
                {/* service content end */}
            </div>
            {/* service end */}

            </div>
            ))}

        </div>
        {/* row end */}

        </div>
        {/* services end */}
    </>
  );
};

export default ServicesSection;