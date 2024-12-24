import { Poppins, Courier_Prime } from 'next/font/google'

const primary_font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
  adjustFontFallback: false,
})

const secondary_font = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})

import "./globals.css";

import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";
import "@styles/css/plugins/magnific-popup.css";
import '@styles/scss/style.scss';

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

const Layouts = ({
  children
}) => {
  return (
    <html lang="en" className={`${primary_font.variable} ${secondary_font.variable}`}>
      <body className="default--scrolling">
        {/* app */}
        <div className="art-app">
          {children}
        </div>
        {/* app end */}
      </body>
    </html>
  );
};
export default Layouts;
