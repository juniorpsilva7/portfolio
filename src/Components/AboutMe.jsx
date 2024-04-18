import React from 'react'
import { useTranslation } from 'react-i18next';
import brazilFlag from "../assets/img/brasil.png"
import euaFlag from "../assets/img/estados-unidos.png"
import espanhaFlag from "../assets/img/espanha.png"
import linkedInLogo from "../assets/img/linkedin.png"

export default function AboutMe() {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row w-full text-white py-6 px-6 sm:px-12 gap-6 sm:gap-12 justify-center items-start">
      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <div className='flex justify-between'>
          <div className=" font-bold">{t("About Me")}</div>
          <a className="w-6 h-full overflow-hidden" href="https://www.linkedin.com/in/juniorpsilva/" target="_blank" rel="noreferrer" title="Open in a new tab">
              <img
                className="mx-auto h-auto w-auto"
                src={linkedInLogo}
                alt="Profile"
              />
          </a>
        </div>
        <div className='text-justify'>
          {t("About Me Text")}
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-fit gap-4">
        <div className=" font-bold">{t("Languages")}:</div>
        <div className="flex sm:flex-col gap-4 sm:gap-1 justify-center">
          <div className="flex gap-2 justify-start items-center">
            <div className="w-8 h-full overflow-hidden">
              <img
                className="mx-auto h-auto w-auto"
                src={brazilFlag}
                alt="Profile"
              />
            </div>
            <div>{t("Native")}</div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <div className="w-8 h-full overflow-hidden">
              <img
                className="mx-auto h-auto w-auto"
                src={euaFlag}
                alt="Profile"
              />
            </div>
            <div>{t("Fluent")}</div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <div className="w-8 h-full overflow-hidden">
              <img
                className="mx-auto h-auto w-auto"
                src={espanhaFlag}
                alt="Profile"
              />
            </div>
            <div>{t("Fluent")}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <div className="font-bold">Skills:</div>
        <div className="flex flex-col text-justify">
          <li className="">Code Langs: JS/TS (focus) | PHP | C#</li>
          <li className="">
            Fullstack: Node.js (focus) | React (focus) | Angular | .Net Core
          </li>
          <li className="">
            Front and Back tools: Express | Router | Tailwind |
            Styled-Components | Storybook | i18next | ...{" "}
          </li>
          <li className="">
            Database: MySQL | MongoDB | PostgreSQL | Oracle PL/SQL{" "}
          </li>
          <li className="">
            Others: Azure DevOps | Git | CI/CD | Postman | IIS | ...
          </li>
        </div>
      </div>
    </div>
  );
}
