"use client";

import Data from "@data/sections/counters.json";
import { useEffect, useState } from "react";
import { CountersBarAnim } from "@common/counters";

const CountersSection = () => {
  useEffect(() => {
    CountersBarAnim();
  }, []);

  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust based on mobile breakpoint
    };
    
    handleResize(); // Check initially
    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  const rowStyle = {
    display: "flex",
    width: isMobile ? "100vw" : "95%",
    justifyContent: isMobile ? "center" : "space-evenly",
    gap: "5%",
    flexDirection: isMobile ? "row" : "row",
    margin: "auto",
    margin: isMobile ? "0px 0px 0px -20px" : "auto",
    padding: "30px 0",
  };

  return (
    <>
        {/* counters */}
        <div className="container-fluid">

        {/* row */}
        <div className="row p-30-0" style={rowStyle}>
            
            {Data.items.map((item, key) => (
            <div key={`counters-item-${key}`}>
                {/* couner frame */}
                <div className="art-counter-frame">
                    {/* counter */}
                    <div className="art-counter-box">
                        {/* counter number */}
                        <span className="art-counter" data-count={item.value}>0</span>
                        <span className="art-counter-plus">{item.valueAfter}</span>
                    </div>
                    {/* counter end */}
                    {/* title */}
                    <h6>{item.label}</h6>
                </div>
                {/* couner frame end */}
            </div>
            ))}

        </div>
        {/* row end */}

        </div>
        {/* counters end */}
    </>
  );
};
export default CountersSection;