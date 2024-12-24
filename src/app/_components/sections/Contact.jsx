import Data from "@data/sections/contact.json";
import ContactForm from "@components/ContactForm";

const ContactSection = () => {
  return (
    <>
        {/* contact */}
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
            <h4>{Data.title}</h4>
            </div>
            {/* title frame end */}
        </div>
        {/* section title end */}

        {/* contact form frame */}
        <div className="art-a art-card">
            <ContactForm />
        </div>
        {/* contact form frame end */}

        </div>
        {/* col end */}

        </div>
        {/* row end */}

        </div>
        {/* contact end */}
    </>
  );
};
export default ContactSection;