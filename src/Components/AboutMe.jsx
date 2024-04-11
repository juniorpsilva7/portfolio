import React from 'react'
import brazilFlag from "../assets/img/brasil.png"
import euaFlag from "../assets/img/estados-unidos.png"
import espanhaFlag from "../assets/img/espanha.png"

export default function AboutMe() {
  return (
    <div className="flex flex-col sm:flex-row w-full text-white py-6 px-6 sm:px-12 gap-6 sm:gap-12 justify-center items-start">
      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <div className=" font-bold">About Me</div>
        <div className='text-justify'>
          More than 15 years working with Technology, 4 years as software
          developer. Focus on Javascrit/Typescript stacks such as Node.js and
          React. Experience in databases such as MySql, SQL Server, Oracle
          PL/SQL, PostgreSQL and MongoDB. 3+ years in Scrum environments, CI/CD,
          unit tests, TDD/BDD, DDD clean architecture, clean code best practices
          and versioning with Git.
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-fit gap-4">
        <div className=" font-bold">Languages:</div>
        <div className="flex sm:flex-col gap-4 sm:gap-1 justify-center">
          <div className="flex gap-2 justify-start items-center">
            <div className="w-8 h-full overflow-hidden">
              <img
                className="mx-auto h-auto w-auto"
                src={brazilFlag}
                alt="Profile"
              />
            </div>
            <div>Native</div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <div className="w-8 h-full overflow-hidden">
              <img
                className="mx-auto h-auto w-auto"
                src={euaFlag}
                alt="Profile"
              />
            </div>
            <div>Fluent</div>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <div className="w-8 h-full overflow-hidden">
              <img
                className="mx-auto h-auto w-auto"
                src={espanhaFlag}
                alt="Profile"
              />
            </div>
            <div>Fluent</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full sm:w-1/2 gap-4">
        <div className="font-bold">Skills:</div>
        <div className="flex flex-col text-justify">
          <li className="">Code Langs: Javascript (focus) | PHP | C#</li>
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
