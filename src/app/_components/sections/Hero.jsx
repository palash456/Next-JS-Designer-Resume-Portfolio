"use client";

import Data from "@data/sections/hero.json";
import Link from "next/link";


import { ReactTyped } from "react-typed";

const HeroOne = () => {

    return (
        <>
            {/* container */}
            <div className="container-fluid">

                {/* row */}
                <div className="row p-60-0 p-lg-30-0 p-md-15-0">
                    {/* col */}
                    <div className="col-lg-12">

                    {/* banner */}
                    <div className="art-a art-banner" style={{"backgroundImage": "url("+Data.bg_image+")"}}>
                        {/* banner back */}
                        <div className="art-banner-back"></div>
                        {/* banner dec */}
                        <div className="art-banner-dec"></div>
                        {/* banner overlay */}
                        <div className="art-banner-overlay">
                        {/* main title */}
                        <div className="art-banner-title">
                            {/* title */}
                            <h1 className="mb-15" dangerouslySetInnerHTML={{__html : Data.title}} />
                            {/* suptitle */}
                            <div className="art-lg-text art-code mb-25">
                                <span dangerouslySetInnerHTML={{__html : Data.subtitle.start}} />
                                <span 
                                    className="txt-rotate"
                                    data-period="2000"
                                    data-rotate={Data.subtitle.rotates} 
                                />
                                 <ReactTyped
                                    strings={Data.subtitle.rotates}
                                    typeSpeed={100}
                                    backSpeed={50}
                                    loop
                                />
                                <span dangerouslySetInnerHTML={{__html : Data.subtitle.end}} />
                            </div>
                            <div className="art-buttons-frame">
                                {/* button */}
                                <Link href={Data.button.link} className="art-btn art-btn-md"><span>{Data.button.label}</span></Link>
                            </div>
                        </div>
                        {/* main title end */}
                        {/* photo */}
                        <img src={Data.photo.url} className="art-banner-photo" alt={Data.photo.alt} />
                        </div>
                        {/* banner overlay end */}
                    </div>
                    {/* banner end */}

                    </div>
                    {/* col end */}
                </div>
                {/* row end */}

            </div>
            {/* container end */}
        </>
    );
}
export default HeroOne;