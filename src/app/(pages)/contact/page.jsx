import React from "react";

import AppData from "@data/app.json";

import ContactInfoSection from "@components/sections/ContactInfo";
import ContactFormSection from "@components/sections/Contact";
import PartnersSection from "@components/sections/Partners";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const ContactPage = () => {
  return (
    <>
      <ContactInfoSection paddingTop={1} />
      <ContactFormSection />
      <PartnersSection />
    </>
  );
};
export default ContactPage;
