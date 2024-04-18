import React from 'react'
import { useTranslation } from 'react-i18next';
import unifeiLogo from "../../assets/img/unifei_logo.png"

export default function ProjectsSection() {

    const { t } = useTranslation();

    return (
        <div className='w-full flex flex-col sm:flex-row gap-4 justify-center items-center text-white py-8 px-4'>
            <div className='w-fit flex justify-center'>
                <div className="flex justify-center items-center min-w-20 max-w-28 h-full overflow-hidden">
                    <img className="mx-auto h-auto w-auto rounded-full" src={unifeiLogo} alt="unifei" />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-2 items-start justify-center'>
                    <div className='text-2xl'>{t("Federal University of Itajubá")}</div>
                    <div className='font-bold'>UNIFEI, {t("Information Systems")}</div>
                    <div className=' font-extralight italic'>2008-2015</div>
                </div>
            </div>
        </div>
    )
}
