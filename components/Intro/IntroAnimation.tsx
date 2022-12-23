'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import IntroSvg from './IntroSvg';

export default function IntroAnimation() {
    const wrapper = useRef(null);

    useEffect(() => {
        if (wrapper.current) {
            // @ts-ignore
            wrapper.current.style = 'opacity:1';
            // @ts-ignore
            const [elements] = wrapper.current.children;
            const guy = elements.getElementById('guy');
            const background = elements.getElementById('background');
            const laptop = elements.getElementById('laptop');

            gsap.set([guy, background, laptop], { autoAlpha: 0 });

            const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

            tl.fromTo(laptop, { x: '-=300' }, { duration: 1.5, x: '0', autoAlpha: 1 })
                .to(guy, { duration: 0.5, autoAlpha: 1 }, '-=0.25')
                .to(background, { duration: 1.5, autoAlpha: 1 });
        }
    }, []);

    return (
        <div ref={wrapper} style={{ opacity: 0 }}>
            <IntroSvg />
        </div>
    );
}
