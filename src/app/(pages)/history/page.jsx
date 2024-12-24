import React from "react";

import AppData from "@data/app.json";

import PartnersSection from "@components/sections/Partners";
import HistorySection from "@components/sections/History";

export const metadata = {
  title: {
		default: "History",
	},
  description: AppData.settings.siteDescription,
}

async function HistoryPage() {
  return (
    <>
      <HistorySection paddingTop={1} />
      <PartnersSection />
    </>
  );
};
export default HistoryPage;