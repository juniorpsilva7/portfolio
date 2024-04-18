import React from 'react'
import Project from './Project'
import Divider from './../utils/Divider';
import { useTranslation } from 'react-i18next';

export default function ProjectsSection() {

    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full text-white py-6 px-4 sm:px-12 gap-12 justify-center items-center">

            <Project
                title={t("This website Portfolio")}
                description={t("Project Portfolio Description")}
                githubLink={'https://github.com/juniorpsilva7/portfolio'}
            />

            <Divider />

            <Project
                title={t("App Registration Stores Products")}
                videoURL={"https://www.youtube.com/embed/TzzGer9cKhA?si=ueUh2-mJO6laG0xo&rel=0"}
                description={t("Project Stores Products Description")}
                githubLink={"https://github.com/juniorpsilva7/meanapp"}
            />

            <Divider />

            <Project
                title={t("Simple Finance App - made with React + Local Storage")}
                videoURL={"https://www.youtube.com/embed/DhiyfWowg1M?si=TuskE3VfQPO1rdoa&rel=0"}
                description={t("Project Simples Finances Description")}
                githubLink={"https://github.com/juniorpsilva7/appfinancas"}
            />

            <Divider />

            <Project
                title={t("Zip Code Consultation + Google Maps App")}
                videoURL={"https://www.youtube.com/embed/VHQtLQo_NMI?si=mY1mC3QyR_O6Q1qT&rel=0"}
                description={t("Project Zip Code Description")}
                githubLink={"https://github.com/juniorpsilva7/reactceptest"}
            />

            <Divider />

            <Project
                title={t("Node.js API with CSV Import + query search")}
                videoURL={"https://www.youtube.com/embed/rPIhJIIxSsM?si=M5qyZGR5Yo0LtC05&rel=0"}
                description={t("Project API Node CSV Description")}
                githubLink={"https://github.com/juniorpsilva7/apinode-csv-queryparam"}
            />

        </div>
    )
}
