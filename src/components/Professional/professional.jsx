import React from "react";
import { Check, ListSortAscending } from "lucide-react";

const course = {
    image: "/card-1.jpg",
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    priceType: "lifetime",
};

const Professional = () => {
    return (
        <section className="relative w-full mt-[120px] overflow-hidden pb-[120px]">

            {/* =====================================================
                BACKGROUND GLOW / ELLIPSES
            ====================================================== */}

            {/* Top Left */}
            <img
                src="/Ellipse 11.png"
                alt=""
                className="
                    absolute
                    left-[-50px]
                    top-[-10px]
                    pointer-events-none
                    select-none
                "
            />

            {/* Top Right */}
            <img
                src="/Ellipse 10.png"
                alt=""
                className="
                    absolute
                    right-[-180px]
                    top-[-100px]
                    w-[520px]
                    pointer-events-none
                    select-none
                "
            />

            {/* Bottom Left */}
            <img
                src="/Ellipse 12.png"
                alt=""
                className="
                    absolute
                    left-[0px]
                    bottom-[-100px]
                    pointer-events-none
                    select-none
                "
            />

            {/* Bottom Right */}
            <img
                src="/Ellipse 8.png"
                alt=""
                className="
                    absolute
                    right-[-180px]
                    bottom-[-100px]
                    w-[520px]
                    pointer-events-none
                    select-none
                "
            />

            <div className="relative z-10  w-[1440px] mx-auto px-[120px]">

                {/* =================================================
                    TOP SECTION
                ================================================== */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">

                    {/* -------------------------
                        TOP LEFT CONTENT
                    -------------------------- */}

                    <div className="pt-[194px]">

                        <h2
                            className="
                                text-[#242528]
                                text-[44px]
                                leading-[1.15]
                                font-semibold
                                font-poppins
                                mb-10
                            "
                        >
                            Your Path to Professional <br />
                            Growth Starts Here!
                        </h2>

                        <p
                            className="
                                text-[#4F4F4F]
                                text-[18px]
                                leading-[1.65]
                                font-satoshi
                                max-w-[430px]
                                mb-10
                            "
                        >
                            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
                        </p>

                        {/* Stats */}
                        <div className="flex items-start gap-14">

                            <div>
                                <h3 className="text-[#1648FF] text-[36px] font-medium font-poppins">
                                    12K
                                </h3>

                                <p className="text-[#4B4C53] text-[18px] font-satoshi">
                                    Students
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#1648FF] text-[36px] font-medium font-poppins">
                                    70+
                                </h3>

                                <p className="text-[#4B4C53] text-[18px] font-satoshi">
                                    Courses
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[#1648FF] text-[36px] font-medium font-poppins">
                                    16
                                </h3>

                                <p className="text-[#4B4C53] text-[18px] font-satoshi">
                                    Creators
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* -------------------------
                        TOP RIGHT VISUAL
                    -------------------------- */}

                    <div className="relative">

                        {/* Course Card */}
                        <div
                            className="
                                absolute
                                top-[-190px]
                                left-[20px]
                                rounded-[14px]
                                border
                                border-[#D9D9D9]
                                bg-white
                                p-2
                                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                
                            "
                        >

                            {/* Course Image */}
                            <div className="relative overflow-hidden rounded-[9px]">

                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-[341px] h-[195pxpx] object-cover"
                                />

                                {/* Image details */}
                                <div
                                    className="
                                    absolute
                                    bottom-2
                                    left-2
                                    right-2
                                    flex
                                    items-center
                                    justify-between
                                    gap-2
                                    
                                "
                                >
                                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-[#444750] whitespace-nowrap">
                                        {course.lessons}
                                    </span>

                                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-[#444750] whitespace-nowrap">
                                        {course.duration}
                                    </span>

                                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-[#444750] whitespace-nowrap">
                                        {course.comments}
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="flex items-center justify-between gap-3 mt-4">
                                <h3
                                    className="
                                    min-w-0
                                    truncate
                                    text-[17px]
                                    leading-[1.2]
                                    font-semibold
                                    text-[#080A13]
                                    font-poppins
                                "
                                    title={course.title}
                                >
                                    {course.title}
                                </h3>

                                <div className="flex items-center gap-1 shrink-0">
                                    <span className="text-[14px] text-[#666A72]">
                                        {course.rating}
                                    </span>

                                    <span className="text-[#C9CDD2] text-[18px]">
                                        ★
                                    </span>
                                </div>
                            </div>

                            {/* Instructor */}
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-[11px] text-[#777B83]">
                                    by
                                </span>

                                <span className="text-[11px] text-[#1648FF]">
                                    {course.instructor}
                                </span>
                            </div>

                            {/* Level */}
                            <div className="flex items-center gap-2 mt-4">
                                {/* Level */}
                                <div
                                    className="
                                   flex
                                   items-center
                                   gap-2
                                   bg-[#F5F5F6]
                                   rounded-full
                                   px-3
                                   py-1.5
                               "
                                >
                                    <span className="text-[#444750] rotate-270">
                                        <ListSortAscending size={16} strokeWidth={2} />
                                    </span>

                                    <span className="text-[12px] font-medium text-[#4B4C53]">
                                        {course.level}
                                    </span>
                                </div>

                                {/* Students */}
                                <div>
                                    <img src="/Auto Layout Horizontal-1.png" alt="" />
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-end gap-1 mt-4">
                                <span className="text-[20px] font-semibold text-[#1648FF]">
                                    {course.price}
                                </span>

                                <span className="text-[10px] text-[#4F4F4F] mb-[2px]">
                                    /{course.priceType}
                                </span>
                            </div>

                        </div>


                        {/* Boy Image */}
                        <img
                            src="/Image.png"
                            alt="Student"
                            className="
                                absolute
                                right-[-50px]
                                bottom-[-280px]
                                w-[577 px]
                                h-[540 px]
                                z-[5]
                            "
                        />


                        {/* Learning Progress */}
                        <div
                            className="
                                absolute
                                right-[50px]
                                top-[30px]
                                w-[200px]
                                bg-white
                                rounded-[14px]
                                p-4
                                shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                                z-20
                            "
                        >

                            <p className="text-[14px] text-[#4F4F4F] font-satoshi">
                                Learning Progress
                            </p>

                            <h3 className="text-[34px] leading-none text-[#040819] font-semibold font-poppins mt-1">
                                55%
                            </h3>

                            <div className="w-full h-[8px] bg-[#F0F0F0] rounded-full mt-3 overflow-hidden">
                                <div className="w-[55%] h-full bg-[#C6FF00] rounded-full" />
                            </div>

                        </div>




                        {/* Green Spring */}
                        <img
                            src="/Mask Group.png"
                            alt=""
                            className="
                                absolute
                                right-[-15px]
                                top-[-100px]
                                w-[186px]
                                h-[186px]
                                z-30
                            "
                        />

                    </div>
                </div>


                {/* =================================================
                    BOTTOM SECTION
                ================================================== */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center mt-[80px]">


                    {/* -------------------------
                        BOTTOM LEFT VISUAL
                    -------------------------- */}

                    <div className="relative min-h-[430px] order-2 lg:order-1">

                        {/* Total Revenue */}
                        <div
                            className="
                                absolute
                                left-0
                                top-[35px]
                                w-[242px]
                                bg-[#1648FF]
                                rounded-[8px]
                                px-3
                                py-4
                                text-white
                            "
                        >

                            <p className="text-[16px] font-semibold">
                                Total Revenue
                            </p>

                            <p className="text-[5px] text-white/70">
                                July 2024
                            </p>

                            <h4 className="text-[24px] font-semibold mt-1">
                                $120.29
                            </h4>

                            <div className="w-full h-[4px] bg-white/30 rounded-full mt-2">
                                <div className="w-[65%] h-full bg-[#C6FF00] rounded-full" />
                            </div>

                        </div>


                        {/* Year To Date */}
                        <div
                            className="
                                absolute
                                left-0
                                top-[170px]
                                w-[134px]
                                bg-[#1648FF]
                                rounded-[8px]
                                px-3
                                py-2.5
                                text-white
                                
                            "
                        >

                            <p className="text-[16px] font-semibold">
                                Year to Date
                            </p>

                            <p className="text-[10px] text-white/70">
                                2024
                            </p>

                            <h4 className="text-[24px] font-semibold mt-1">
                                $1,200.38
                            </h4>

                            <span className="inline-block bg-[#C6FF00] text-[#040819] text-[10px] rounded-full px-1.5 py-0.5 mt-1">
                                +12%
                            </span>

                        </div>


                        {/* Girl Image */}
                        <img
                            src="/Image (1).png"
                            alt="Creator"
                            className="
                                absolute
                                left-[50px]
                                bottom-[-160px]
                                 w-[435px]
                                 h-[596px]
                                z-10
                            "
                        />


                        {/* Green Spring */}
                        <img
                            src="/Mask Group.png"
                            alt=""
                            className="
                                absolute
                                left-[270px]
                                top-[60px]
                                w-[200px]
                                h-[200px]
                                rotate-[230deg]
                                z-30
                            "
                        />


                        {/* Happy Students */}
                        <div
                            className="
                                absolute
                                right-[80px]
                                bottom-[45px]
                                w-[180px]
                                bg-white
                                rounded-[12px]
                                px-3
                                py-2
                                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                                z-30
                            "
                        >

                            <p className="text-[16px] font-medium text-[#242528]">
                                Happy Students
                            </p>

                            <div className="flex items-center gap-1 mt-1">

                                <span className="text-[10px] text-[#777]">
                                    4.5 (240)
                                </span>

                                <span className="text-[#C6FF00] text-[8px]">
                                    ★
                                </span>

                            </div>

                            {/* Student Images */}
                            <div className="mt-2">
                                <img
                                    src="/Auto Layout Horizontal-1.png"
                                    alt="Students"
                                    className="w-[130px]"
                                />
                            </div>

                        </div>

                    </div>


                    {/* -------------------------
                        BOTTOM RIGHT CONTENT
                    -------------------------- */}

                    <div className="order-1 lg:order-2">

                        <h2
                            className="
                                text-[#040819]
                                text-[44px]
                                leading-[1.15]
                                font-semibold
                                font-poppins
                                mb-10
                            "
                        >
                            Create & Manage
                            <br />
                            Courses Easily.
                        </h2>

                        <p
                            className="
                                text-[#82868E]
                                text-[18px]
                                leading-[1.6]
                                font-satoshi
                                
                                mb-7
                            "
                        >
                            <span className="font-semibold text-[#242528]">ByteSpace</span> supports individuals or entities in the creation, publication, and administration of educational courses.
                        </p>


                        {/* Features */}
                        <div className="flex flex-col gap-3">

                            <div className="flex items-center gap-2">
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className="
                                        bg-[#1648FF]
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    "
                                />

                                <span className="text-[18px] text-[#242528] font-satoshi">
                                    Share Your Expertise
                                </span>
                            </div>


                            <div className="flex items-center gap-2">
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className="
                                        bg-[#1648FF]
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    "
                                />

                                <span className="text-[18px] text-[#242528] font-satoshi">
                                    Monetize Your Passion
                                </span>
                            </div>


                            <div className="flex items-center gap-2">
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className="
                                        bg-[#1648FF]
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    "
                                />

                                <span className="text-[18px] text-[#242528] font-satoshi">
                                    Flexibility and Autonomy
                                </span>
                            </div>


                            <div className="flex items-center gap-2">
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className="
                                        bg-[#1648FF]
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    "
                                />

                                <span className="text-[18px] text-[#242528] font-satoshi">
                                    Build a Community
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Professional;