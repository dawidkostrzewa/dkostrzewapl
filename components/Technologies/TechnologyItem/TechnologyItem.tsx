import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ITechnologyItemProps {
    name: string;
    icon: StaticImageData;
    bgColor: string;
    textColor?: string;
    img?: string;
}

export const TechnologyItem = ({ name, icon, bgColor, textColor = '#fff' }: ITechnologyItemProps) => {
    return (
        <div className="flex flex-col items-center w-44 h-44 mx-auto justify-between p-2" style={{ backgroundColor: bgColor }}>
            <Image width={120} height={120} src={icon} alt={name} />
            <figcaption style={{ color: textColor }} className="mt-3 font-bold text-xl">
                {name}
            </figcaption>
        </div>
    );
};
