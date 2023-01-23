import React from 'react';
import JSLogo from '../../images/jsLogo.png';
import TSLogo from '../../images/typescriptLogo.svg';
import ReactLogo from '../../images/reactLogo.svg';
import SassLogo from '../../images/sassLogo.svg';
import AngularLogo from '../../images/angularLogo.svg';
import NodeLogo from '../../images/nodeLogo.svg';
import NextLogo from '../../images/nextLogo.svg';
import CypressLogo from '../../images/cypress_logo.svg';

import styles from './Technologies.module.scss';
import { TechnologyItem } from './TechnologyItem/TechnologyItem';
import { useTranslations } from 'next-intl';

const Technologies = () => {
    const t = useTranslations();
    return (
        <div className="mr-auto ml-auto lg:mt-32 min-[320px]:mt-8 max-w-3xl text-justify">
            <h2 className={`text-2xl font-bold ${styles['title']}`}>{t('home.technologies')}</h2>
            <div className="grid gap-4 mt-6 lg:grid-cols-4 sm:grid-cols-2">
                <TechnologyItem name="JavaScript" bgColor="#F0DB4E" icon={JSLogo} textColor="#000" />
                <TechnologyItem name="TypeScript" bgColor="#2D79C7" icon={TSLogo} />
                <TechnologyItem name="React" bgColor="#61DBFB" icon={ReactLogo} />
                <TechnologyItem name="NextJS" bgColor="#F7F7F7" icon={NextLogo} textColor="#000" />
                <TechnologyItem name="Sass" bgColor="#CE679A" icon={SassLogo} />
                <TechnologyItem name="Angular" bgColor="#D6002F" icon={AngularLogo} />
                <TechnologyItem name="NodeJS" bgColor="#fff" icon={NodeLogo} textColor="#000" />
                <TechnologyItem name="Cypress" bgColor="#F7F7F7" icon={CypressLogo} textColor="#000" />
            </div>
        </div>
    );
};

export default Technologies;
