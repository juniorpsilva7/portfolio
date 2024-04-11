import React from 'react'
import Experience from './Experience'
import amarisLogo from '../../assets/img/amaris_logo.jpeg'
import focareLogo from '../../assets/img/focare_logo.jpeg'
import easyLogo from '../../assets/img/easy_logo.jpeg'
import inatelLogo from '../../assets/img/inatel_logo.jpg'
import honeywellLogo from '../../assets/img/honeywell_logo.jpg'

export default function Experiences() {
  return (
    <div className="flex flex-col w-full text-white py-6 px-4 sm:px-12 gap-6 sm:gap-12 justify-center items-center">
      <Experience
        companyImage={amarisLogo}
        position={"Experienced Consultant"}
        company={"Amaris Consulting"}
        timeString={"out de 2023 - o momento · 7 meses"}
        description={`I work with a major client in the beverage industry, contributing to a multicultural environment. Front-end development in a generative 
        AI project using Node.js, React, Tailwind, and Styled-components, as well as implementing and maintaining a Design System. I also collaborate on CI/CD 
        processes and occasionally assist with backend Node.js development. My work focuses on delivering high-quality solutions that meet the client's needs in 
        a fast-paced and dynamic environment.`}
      />

      <Experience
        companyImage={focareLogo}
        position={"Full Stack Developer"}
        company={"Focare Tecnologia em Soluções"}
        timeString={"ago de 2023 - out de 2023 · 3 meses (temporary)"}
        description={`I played a key role in the development team, making significant contributions to the quick delivery of the MVP. Responsibilities included Node.js, 
        React, and SQL development, along with bug fixing and implementing new features, resulting in the success and quality of the final product.`}
      />

      <Experience
        companyImage={easyLogo}
        position={"Senior Systems Analyst"}
        company={"Easy Access"}
        timeString={"mar de 2020 - abr de 2023 · 3 anos 2 meses"}
        description={`- Started and structured the support department to start the operation acting as Supervisor. Zendesk Administrator, API integrations, triggers, reports, 
        user control, general configuration.
        - I actively worked in monitoring the technology park and personally carried out the first approvals of our services (charging via tag RFID/Linux/Raspberry) to meet 
        the startup's first contract.
        - I worked as a level 3 analyst, log analysis, database migrations between servers, more complex problems. Creation of processes for the implementation of the quality system.`}
      />

      <Experience
        companyImage={inatelLogo}
        position={"Backend Developer"}
        company={"Inatel Competence Center"}
        timeString={"abr de 2017 - out de 2019 · 2 anos 7 meses"}
        description={`- Project 1 (Ericsson): I worked as a backend dev, using technologies as Javascript, Oracle PL/SQL, PostgreSQL, database migration, maintenance of REST services, 
        handling JSON requests/response, bug resolution (JS/Java), new functionalities, automated tests (postman / own API in JS), performance tests, versioning with Git, Agile 
        Scrum methodology.
        - Project 2 (EAD Inatel): I helped with the implementation of the EAD system at Inatel, programming in PHP+Mysql on Wordpress platforms and customizing plugins.`}
      />

      <Experience
        companyImage={honeywellLogo}
        position={"Technical support specialist"}
        company={"Honeywell Sensing and Productivity Solutions"}
        timeString={"set de 2012 - mar de 2017 · 4 anos 7 meses"}
        description={`- LATAM support analyst (Latin America, Central America, USA). Working in Portuguese, English and Spanish. Approval and post-sales of projects in the field 
        of data automation. Mobile platforms, RFID, environment customizations (scanning & mobile), etc. Part of the ISO 9001 certification team and the support department's global 
        Kaizen team and I was also assigned to several other internal projects.`}
      />

    </div>
  );
}
