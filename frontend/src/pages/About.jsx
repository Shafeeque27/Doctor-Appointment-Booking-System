import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { aboutUsData, whyChooseUs } from '../../data';

const About = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 text-gray-500">
                <p>
                    ABOUT <span className="texgr700 font-medium">US</span>
                </p>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-12">
                <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
                    {aboutUsData.map((about, idx) => {
                        if (about.desc === 'Our Vision') {
                            return <b key={idx}>{about.desc}</b>;
                        } else {
                            return <p key={idx}>{about.desc}</p>;
                        }
                    })}
                </div>
            </div>

            <div className="text-xl my-4">
                <p>
                    WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
                </p>
            </div>

            <div className="flex flex-col md:flex-row mb-20">
                {whyChooseUs.map((about, idx) => (
                    <div
                        className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"
                        key={idx}>
                        <b>{about.title}</b>
                        <p>{about.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
