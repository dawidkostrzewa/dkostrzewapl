/* eslint-disable react/no-unescaped-entities */
import { useTranslations } from 'next-intl';
import React from 'react';
import styles from './AboutMe.module.scss';

const AboutMePL = () => {
    const startedCodingYear = 2013;
    const yearsFromStartedCoding = new Date().getFullYear() - startedCodingYear;
    const t = useTranslations();

    return (
        <div className="mr-auto ml-auto lg:mt-32 sm:mt-8 max-w-3xl text-justify">
            <h2 className={`text-2xl font-bold ${styles['title']}`}>{t('home.about')}</h2>
            <div className="my-4 text-lg">
                Jestem Frontend Developerem z Krakowa. Pracuje nad aplikacjami webowymi w frameworkach i narzędziach
                React, Angular, TypeScript, Node.
            </div>
            <div className="my-4 text-lg">
                Zacząłem kodować {yearsFromStartedCoding} lat temu i dalej to uwielbiam. W swoim życiu miałem możliwość
                spróbowania wielu dziedzin programowania, zaczynając od niskopoziomowego assemblera i C++. Miałem
                również możliwość nauki tworzenia aplikacji na Androida w Javie i iOS w Swift, a także aplikacji
                desktopowych w C# WPF. Pracowałem również nad wieloma projektami z obszaru web developmentu, gdzie
                akutalnie się rozwijam. Dotknięcie tak wielu obszarów było możliwe dzięki temu, że ukonczyłem technikum
                informatyczne i Informatykę Stosowaną na AGH.
            </div>
            <div className="my-4 text-lg">
                Aktualnie skupiam się w 100% na aplikacjach webowych i ecosystemie JS. W mojej karierze programisty
                pracowałem komercyjnie z Wordpressem a następnie zacząłem tworzyć aplikacje w React, TypeScript i
                NextJS. Przez chwile również pracowałem z Angularem +10, spróbowałem trochę backendu w NodeJS i devopsa
                w Azure DevOps.
            </div>
            <div className="my-4 text-lg">
                Staram się być na bieżąco z tym co dzieje się w świecie web devu, dlatego słucham podcastów takich jak{' '}
                <a className="border-b-2" href="https://syntax.fm/">
                    Syntax FM
                </a>
                ,{' '}
                <a className="border-b-2" href="https://frontendhappyhour.com/">
                    Front End Happy Hour
                </a>
                . I czytam newslettery{' '}
                <a className="border-b-2" href="https://frontendweekly.co/">
                    Frontend Weekly
                </a>{' '}
                <a className="border-b-2" href="https://javascriptweekly.com/">
                    JavaScript Weekly
                </a>
                , itp.
            </div>
            <div className="my-4 text-lg">
                Po za programowaniem lubię biegać, pojeżdzić na rowerze, wyjść w góry, oglądnąć dobry film na Netflix
                lub popracować nad jakimś side projektem.
            </div>
        </div>
    );
};

export default AboutMePL;
