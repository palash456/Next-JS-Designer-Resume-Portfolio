"use client";

import ImageView from "@components/ImageView";
import AppData from "@data/app.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProgressBarAnim } from "@common/progressBar";

const InfoBarModule = () => {
  const [toggle, setToggle] = useState(false);

  const barOpen = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.querySelector(".art-content").classList.add("art-active");
    } else {
      document.querySelector(".art-content").classList.remove("art-active");
    }
  };

  useEffect(() => {
    ProgressBarAnim();
  }, []);

  return (
    <>
      {/* info bar */}
      <div className={`art-info-bar ${toggle ? "art-active" : ""}`}>
        {/* menu bar frame */}
        <div className="art-info-bar-frame">
          {/* info bar header */}
          <div className="art-info-bar-header">
            {/* info bar button */}
            <div
              className={`art-info-bar-btn ${toggle ? "art-active" : ""}`}
              onClick={() => barOpen()}
            >
              {/* icon */}
              <i className="fas fa-ellipsis-v"></i>
            </div>
            {/* info bar button end */}
          </div>
          {/* info bar header end */}

          {/* info bar header */}
          <div className="art-header">
            {/* avatar */}
            <div className="art-avatar">
              <a
                data-fancybox="avatar"
                data-no-swup
                href={AppData.profile.avatar}
                className="art-avatar-curtain"
              >
                <img src={AppData.profile.avatar} alt="avatar" />
                <i className="fas fa-expand"></i>
              </a>
              {/* available */}
              <div className="art-lamp-light">
                {/* add class 'art-not-available' if not available*/}
                <div className="art-available-lamp"></div>
              </div>
            </div>
            {/* avatar end */}
            {/* name */}
            <h5 className="art-name mb-10">
              <Link href="/">{AppData.profile.name}</Link>
            </h5>
            {/* post */}
            <div
              className="art-sm-text"
              dangerouslySetInnerHTML={{ __html: AppData.profile.role }}
            />
          </div>
          {/* info bar header end */}

          {/* scroll frame */}
          <div id="scrollbar2" className="art-scroll-frame">
            {/* info bar about */}
            <div className="art-table p-15-15">
              {/* about text */}
              <ul>
                {AppData.profile.info.map((item, key) => (
                  <li key={`profile-info-item-${key}`}>
                    <h6>{item.label}:</h6>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* info bar about end */}

            {/* divider */}
            <div className="art-ls-divider"></div>

            {/* language skills */}
            <div className="art-lang-skills p-30-15">
              {AppData.profile.skills.language.map((item, key) => (
                <div
                  className="art-lang-skills-item"
                  key={`profile-skills-lang-item-${key}`}
                >
                  <div
                    id={`circleprog${key + 1}`}
                    className="art-cirkle-progress"
                    data-value={item.value}
                  />
                  {/* title */}
                  <h6>{item.label}</h6>
                </div>
              ))}
            </div>
            {/* language skills end */}

            {/* divider */}
            <div className="art-ls-divider"></div>

            {/* hard skills */}
            <div className="art-hard-skills p-30-15">
              {AppData.profile.skills.hard.map((item, key) => (
                <div
                  className="art-hard-skills-item"
                  key={`profile-skills-hard-item-${key}`}
                >
                  <div className="art-skill-heading">
                    {/* title */}
                    <h6>{item.label}</h6>
                  </div>
                  {/* progressbar frame */}
                  <div className="art-line-progress">
                    {/* progressbar */}
                    <div
                      id={`lineprog${key + 1}`}
                      className="art-line-progress-item"
                      data-value={item.value}
                    />
                  </div>
                  {/* progressbar frame end */}
                </div>
              ))}
            </div>
            {/* language skills end */}

            {/* divider */}
            <div className="art-ls-divider"></div>

            {/* knowledge list */}
            <ul className="art-knowledge-list p-15-0">
              {AppData.profile.skills.knowledge.map((item, key) => (
                <li key={`profile-skills-knowledge-item-${key}`}>
                  {item.label}
                </li>
              ))}
            </ul>
            {/* knowledge list end */}

            {/* divider */}
            <div className="art-ls-divider"></div>

            {/* links frame */}
            <div className="art-links-frame p-15-15">
              {/* download cv button */}
              {/* <a
                href={AppData.profile.resume}
                className="art-link"
                download
                data-no-swup
                target="_blank"
              >
                Download cv <i className="fas fa-download"></i>
              </a> */}
            </div>
            {/* links frame end */}
          </div>
          {/* scroll frame end */}

          {/* sidebar social */}
          <div 
  className="art-ls-social" 
  style={{
    background: "linear-gradient(180deg, rgba(37, 37, 50, 0) 0%, rgba(35, 35, 45, 1) 100%)"
  }}
>            {/* {AppData.social.map((item, key) => (
              <a
                href={item.link}
                key={`profile-social-item-${key}`}
                target="_blank"
                title={item.title}
              >
                <i className={item.icon}></i>
              </a>
              
            ))} */}
                          {/* <a
                href={AppData.profile.resume}
                className="art-link"
                download
                data-no-swup
                target="_blank"
              >
                Download cv <i className="fas fa-download"></i>
              </a> */}
          </div>
          {/* sidebar social end */}
        </div>
        {/* menu bar frame end */}
      </div>
      {/* info bar end */}

      <ImageView />
    </>
  );
};
export default InfoBarModule;
