/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
    const startedCodingYear = 2013;
    const yearsFromStartedCoding = new Date().getFullYear() - startedCodingYear;

    return (
        <div className="mr-auto ml-auto lg:mt-32 sm:mt-8 max-w-3xl text-justify">
            <h2 className={`text-2xl font-bold ${styles['title']}`}>About Me</h2>
            <p className="my-4 text-lg">
                I am a software engineer based in Kraków, Poland. I am working on web applications including the newest
                frameworks and libraries such as Reach, Angular, TypeScript, NodeJS.&nbsp;I&nbsp;like to learn new
                things and I am looking forward to working with great people.
            </p>
            <p className="my-4 text-lg">
                I've started coding {yearsFromStartedCoding} years ago and I'm still in love with it. In my life I've
                tried a lot of fields of programming, started from low level in assembler, through C++. I had
                opportunity to learn how develop Android Apps in Java and for iOS in Swift as well as desktop
                application in C# based on WPF. I also worked on a lot of projects in the area of web development, where
                currently I strong develop myself. Touching this many areas was possible because I attended to technical
                high school on IT profile and I graduated from AGH University of Science and Technology on Applied
                Computer Science
            </p>
            <p className="my-4 text-lg">
                Currently, the main emphasis is on web applications. In my professional life I worked commercially with
                Wordpress and then I created complex web applications based on ReactJS, TypeScript, NextJS. Recently, my
                stack was also joined by Angular 10+, some backend in NodeJS and a bit of devops in Azure DevOps.
            </p>
            <p className="my-4 text-lg">
                I try to keep up to date with news from the world of web dev. I listen to podcasts such as{' '}
                <a className="border-b-2" href="https://syntax.fm/">
                    Syntax FM
                </a>
                ,{' '}
                <a className="border-b-2" href="https://frontendhappyhour.com/">
                    Front End Happy Hour
                </a>
                . I read newsletters {' '}
                <a className="border-b-2" href="https://frontendweekly.co/">
                Frontend Weekly
                </a>{' '}
                <a className="border-b-2" href="https://javascriptweekly.com/">
                JavaScript Weekly
                </a>
                , etc.
            </p>
            <p className="my-4 text-lg">
                In addition to programming, I like to go jogging, bike, go hiking, watch a good series on Netflix, drink
                a tasty beer.
            </p>
        </div>
    );
};

export default AboutMe;
