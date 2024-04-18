import React from 'react'
import { useTranslation } from 'react-i18next';
import Experience from './Experience'
import amarisLogo from '../../assets/img/amaris_logo.jpeg'
import focareLogo from '../../assets/img/focare_logo.jpeg'
import easyLogo from '../../assets/img/easy_logo.jpeg'
import inatelLogo from '../../assets/img/inatel_logo.jpg'
import honeywellLogo from '../../assets/img/honeywell_logo.jpg'

export default function Experiences() {

  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full text-white py-6 px-4 sm:px-12 gap-6 sm:gap-12 justify-center items-center">
      <Experience
        companyImage={amarisLogo}
        position={"Experienced Consultant"}
        company={"Amaris Consulting"}
        timeString={t("oct 2023 - currently")}
        description={t("Amaris desc")}
      />

      <Experience
        companyImage={focareLogo}
        position={"Full Stack Developer"}
        company={"Focare Tecnologia em Soluções"}
        timeString={t("Aug 2023 - Oct 2023 · 3 months (temporary)")}
        description={t("Focare desc")}
      />

      <Experience
        companyImage={easyLogo}
        position={"Senior Systems Analyst"}
        company={"Easy Access"}
        timeString={t("Mar 2020 - Apr 2023 · 3 years 2 months")}
        description={t("Easy Access desc")}
      />

      <Experience
        companyImage={inatelLogo}
        position={"Backend Developer"}
        company={"Inatel Competence Center"}
        timeString={t("Apr 2017 - Oct 2019 · 2 years 7 months")}
        description={t("Inatel desc")}
      />

      <Experience
        companyImage={honeywellLogo}
        position={"Technical support specialist"}
        company={"Honeywell Sensing and Productivity Solutions"}
        timeString={t("Sep 2012 - Mar 2017 · 4 years 7 months")}
        description={t("Honeywell desc")}
      />

    </div>
  );
}
