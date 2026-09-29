import React from "react";
const Hero = () => {
    return (
        <div className="w-[935px] mx-auto">
            <h1 className="mt-[49px] text-[72px] font-semibold  text-center font-poppins">Get Access to Hundreds Courses Available</h1>
            <p className="text-[#B0B0B0] text-lg font-satoshi text-center mt-[32px]">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

            <div className="flex justify-center gap-4 mt-[60px]">
                <div className="flex gap-2 items-center rounded-3xl bg-white w-[461px] h-[52px] ps-[24px]">
                    <img src="/megnify.png" alt="" className="w-[24px] h-[24px]" />
                    <input type="text" placeholder="Course, topic, creator" className="placeholder:text-[#82868E] placeholder:text-[18px] placeholder:font-satoshi" />
                </div>
                <div className="bg-[#D4FB20] py-3 px-6 rounded-3xl">
                    <button className="text-[#242528] text-lg font-medium font-satoshi">Search</button>
                </div>
            </div>
        </div>
    );
};
export default Hero;