import { Star } from "lucide-react";
import React from "react";
const Hero = () => {
    return (
        <div>
            {/* Text Section */}
            <div className="w-[935px] mx-auto mb-[60px]">
                <h1 className="mt-[49px] text-[72px] font-semibold text-white  text-center font-poppins">Get Access to Hundreds Courses Available</h1>
                <p className="text-[#B0B0B0] text-lg font-satoshi text-center mt-[32px]">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

                <div className="flex justify-center gap-4 mt-[60px]">
                    <div className="flex gap-2 items-center rounded-3xl bg-white w-[461px] h-[52px] ps-[24px]">
                        <img src="/megnify.png" alt="" className="w-[24px] h-[24px]" />
                        <input type="text" placeholder="Course, topic, creator" className="placeholder:text-[#82868E] placeholder:text-[18px] placeholder:font-satoshi" />
                    </div>
                    <div className="bg-[#D4FB20] py-3 px-6 rounded-3xl mb-[60px]">
                        <button className="text-[#242528] text-lg font-medium font-satoshi">Search</button>
                    </div>
                </div>
            </div>
            {/* Image Section */}
            <div className="relative h-[420px]">

                {/* Green Circle */}
                <img
                    src="/Ellipse 7.png"
                    alt=""
                    className=""
                />

                {/* Person */}
                <img
                    src="/Image.png"
                    alt=""
                    className="absolute bottom-0 left-1/2 z-10 translate-x-[-48%]"
                />


                <img src="/Frame.png" alt="" className="absolute -left-30 -top-105" />

                <img src="/Cone.png" alt="" className="absolute -right-30 -top-105" />

                <img src="/Frame-1.png" alt="" className="absolute left-15 -top-40" />

                <img src="/Cone-1.png" alt="" className="absolute right-5 -top-40" />

                <img src="/Cone-2.png" alt="" className="absolute -left-30 bottom-0 w-[342px] h-[342px]" />

                <img src="/Frame-2.png" alt="" className="absolute -right-25 bottom-0 w-[331px] h-[331px]" />

                {/* Card */}
                <div className="p-4 bg-white rounded-2xl absolute left-45 bottom-75">
                    <h4 className="text-[#242528] font-medium">UI/UX Design</h4>
                    <div className="text-[#82868E] flex gap-2">
                        <p>200 Courses</p>
                        <div className="w-[4px] h-[4px] bg-[#82868E] rounded-full mt-2"></div>
                        <p>1000+ Students</p>
                    </div>
                </div>

                <div className="p-4 bg-white z-10 rounded-2xl absolute left-45 bottom-15">
                    <h4 className="text-[#242528] font-medium">Happy Students</h4>
                    <div className="text-[#82868E] flex items-center gap-1 mb-2">
                        <p className="text-[#82868E] text-lg font-medium font-satoshi">4.5 (240)</p>
                        <Star className="text-[#D4FB20] fill-[#D4FB20] w-4 h-4" />
                    </div>
                    <img src="/Auto Layout Horizontal.png" alt="" />
                </div>

                <div className="p-4 bg-white rounded-2xl absolute right-70 bottom-65 w-[232px]">
                    <h4 className="text-[#242528] text-sm font-medium mb-2">
                        Learning Progress
                    </h4>

                    <h1 className="text-[#242528] text-5xl font-poppins font-semibold">
                        55%
                    </h1>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-[#F1F1F1] rounded-full mt-5 overflow-hidden">
                        <div
                            className="h-full bg-[#C8FF00] rounded-full"
                            style={{ width: "55%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;