import React from 'react';
import Image from 'next/image';


interface SkillProps {
    title: string;
    description: string;
    image: string
}

const Skill: React.FC<SkillProps> = ({ title, description, image }) => {
    return (
        <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Image src={image} width={800} height={800} alt='' />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    );
}

export default Skill;