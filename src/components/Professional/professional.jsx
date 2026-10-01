import React from 'react';
import { Check, ListSortAscending } from 'lucide-react';
import CourseCard from '../common/CourseCard';

const course = {
    image: '/card-1.jpg',
    title: 'Learn Figma from Basic',
    instructor: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    price: '$25',
    priceType: 'lifetime',
};

const Professional = () => {
    return (
        <section className='relative w-full mt-[120px] overflow-hidden pb-[120px]'>
            {/* =====================================================
                BACKGROUND GLOW / ELLIPSES
            ====================================================== */}

            <div
                className='
     absolute
                    left-[-100px]
                    top-[-500px]
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-[radial-gradient(circle_at_center,#CBFC01_0%,rgba(203,252,1,0.23)_23%,rgba(203,252,1,0.06)_55%,transparent_75%)]
        blur-[60px]
        pointer-events-none
    '
            />

            <div
                className='
        absolute
        h-[1137px]
        rounded-full
        right-[-800px]
        top-[-600px]
        bg-[radial-gradient(circle,#003BE2_0%,rgba(0,59,226,0.23)_23%,rgba(0,59,226,0.06)_55%,rgba(0,59,226,0)_75%)]
        blur-[80px]
        pointer-events-none
    '
            />

            <div
                className='
     absolute
                     left-[-300px]
                    bottom-[-250px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-[radial-gradient(circle_at_center,#CBFC01_0%,rgba(203,252,1,0.23)_23%,rgba(203,252,1,0.06)_55%,transparent_75%)]
        blur-[30px]
        pointer-events-none
    '
            />

            <div
                className='
        absolute
           w-[520px]
           h-[520px]
        rounded-full
        right-[-100px]
                    bottom-[-120px]
        bg-[radial-gradient(circle,#003BE2_0%,rgba(0,59,226,0.23)_23%,rgba(0,59,226,0.06)_55%,rgba(0,59,226,0)_75%)]
        blur-[100px]
        pointer-events-none
    '
            />

            <div
                className='
        absolute
           w-[520px]
           h-[520px]
        rounded-full
        left-[-300px]
                    top-80
        bg-[radial-gradient(circle,#003BE2_0%,rgba(0,59,226,0.23)_23%,rgba(0,59,226,0.06)_55%,rgba(0,59,226,0)_75%)]
        blur-[100px]
        pointer-events-none
    '
            />

            <div className='relative z-10  w-[1440px] mx-auto px-[120px]'>
                {/* =================================================
                    TOP SECTION
                ================================================== */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center'>
                    {/* -------------------------
                        TOP LEFT CONTENT
                    -------------------------- */}

                    <div className='pt-[194px]'>
                        <h2
                            className='
                                text-dark-700
                                text-[44px]
                                leading-[1.15]
                                font-semibold
                                font-poppins
                                mb-10
                            '
                        >
                            Your Path to Professional <br />
                            Growth Starts Here!
                        </h2>

                        <p
                            className='
                                text-gray-700
                                text-[18px]
                                leading-[1.65]
                                font-satoshi
                                max-w-[430px]
                                mb-10
                            '
                        >
                            Explore our curated selection of courses tailored to enhance your
                            capabilities and accelerate your career journey. Whether you are
                            looking to sharpen specific skills, gain industry expertise, or
                            embark on a new career path entirely, we have the resources you
                            need.
                        </p>

                        {/* Stats */}
                        <div className='flex items-start gap-14'>
                            <div>
                                <h3 className='text-accent-blue text-[36px] font-medium font-poppins'>
                                    12K
                                </h3>

                                <p className='text-gray-800 text-[18px] font-satoshi'>
                                    Students
                                </p>
                            </div>

                            <div>
                                <h3 className='text-accent-blue text-[36px] font-medium font-poppins'>
                                    70+
                                </h3>

                                <p className='text-gray-800 text-[18px] font-satoshi'>
                                    Courses
                                </p>
                            </div>

                            <div>
                                <h3 className='text-accent-blue text-[36px] font-medium font-poppins'>
                                    16
                                </h3>

                                <p className='text-gray-800 text-[18px] font-satoshi'>
                                    Creators
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------
                        TOP RIGHT VISUAL
                    -------------------------- */}

                    <div className='relative'>
                        {/* Course Card */}
                        <CourseCard 
                            course={course}
                            className="absolute top-[-190px] left-[20px] rounded-[14px] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                            imageClassName="w-[341px] h-[195px] object-cover"
                        />

                        {/* Boy Image */}
                        <img
                            src='/Image.png'
                            alt='Student'
                            className='
                                absolute
                                right-[-50px]
                                bottom-[-280px]
                                w-[577 px]
                                h-[540 px]
                                z-[5]
                            '
                        />

                        {/* Learning Progress */}
                        <div
                            className='
                                absolute
                                right-[50px]
                                top-[30px]
                                w-[200px]
                                bg-white
                                rounded-[14px]
                                p-4
                                shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                                z-20
                            '
                        >
                            <p className='text-[14px] text-gray-700 font-satoshi'>
                                Learning Progress
                            </p>

                            <h3 className='text-[34px] leading-none text-dark-900 font-semibold font-poppins mt-1'>
                                55%
                            </h3>

                            <div className='w-full h-[8px] bg-light-300 rounded-full mt-3 overflow-hidden'>
                                <div className='w-[55%] h-full bg-accent-lime-200 rounded-full' />
                            </div>
                        </div>

                        {/* Green Spring */}
                        <img
                            src='/Mask Group.png'
                            alt=''
                            className='
                                absolute
                                right-[-15px]
                                top-[-100px]
                                w-[186px]
                                h-[186px]
                                z-30
                            '
                        />
                    </div>
                </div>

                {/* =================================================
                    BOTTOM SECTION
                ================================================== */}

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center mt-[80px]'>
                    {/* -------------------------
                        BOTTOM LEFT VISUAL
                    -------------------------- */}

                    <div className='relative min-h-[430px] order-2 lg:order-1'>
                        {/* Total Revenue */}
                        <div
                            className='
                                absolute
                                left-0
                                top-[35px]
                                w-[242px]
                                bg-accent-blue
                                rounded-[8px]
                                px-3
                                py-4
                                text-white
                            '
                        >
                            <p className='text-[16px] font-semibold'>Total Revenue</p>

                            <p className='text-[5px] text-white/70'>July 2024</p>

                            <h4 className='text-[24px] font-semibold mt-1'>$120.29</h4>

                            <div className='w-full h-[4px] bg-white/30 rounded-full mt-2'>
                                <div className='w-[65%] h-full bg-accent-lime-200 rounded-full' />
                            </div>
                        </div>

                        {/* Year To Date */}
                        <div
                            className='
                                absolute
                                left-0
                                top-[170px]
                                w-[134px]
                                bg-accent-blue
                                rounded-[8px]
                                px-3
                                py-2.5
                                text-white
                                
                            '
                        >
                            <p className='text-[16px] font-semibold'>Year to Date</p>

                            <p className='text-[10px] text-white/70'>2024</p>

                            <h4 className='text-[24px] font-semibold mt-1'>$1,200.38</h4>

                            <span className='inline-block bg-accent-lime-200 text-dark-900 text-[10px] rounded-full px-1.5 py-0.5 mt-1'>
                                +12%
                            </span>
                        </div>

                        {/* Girl Image */}
                        <img
                            src='/Image (1).png'
                            alt='Creator'
                            className='
                                absolute
                                left-[50px]
                                bottom-[-160px]
                                 w-[435px]
                                 h-[596px]
                                z-10
                            '
                        />

                        {/* Green Spring */}
                        <img
                            src='/Mask Group.png'
                            alt=''
                            className='
                                absolute
                                left-[270px]
                                top-[60px]
                                w-[200px]
                                h-[200px]
                                rotate-[230deg]
                                z-30
                            '
                        />

                        {/* Happy Students */}
                        <div
                            className='
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
                            '
                        >
                            <p className='text-[16px] font-medium text-dark-700'>
                                Happy Students
                            </p>

                            <div className='flex items-center gap-1 mt-1'>
                                <span className='text-[10px] text-gray-400'>4.5 (240)</span>

                                <span className='text-accent-lime-200 text-[8px]'>★</span>
                            </div>

                            {/* Student Images */}
                            <div className='mt-2'>
                                <img
                                    src='/Auto Layout Horizontal-1.png'
                                    alt='Students'
                                    className='w-[130px]'
                                />
                            </div>
                        </div>
                    </div>

                    {/* -------------------------
                        BOTTOM RIGHT CONTENT
                    -------------------------- */}

                    <div className='order-1 lg:order-2'>
                        <h2
                            className='
                                text-dark-900
                                text-[44px]
                                leading-[1.15]
                                font-semibold
                                font-poppins
                                mb-10
                            '
                        >
                            Create & Manage
                            <br />
                            Courses Easily.
                        </h2>

                        <p
                            className='
                                text-gray-300
                                text-[18px]
                                leading-[1.6]
                                font-satoshi
                                
                                mb-7
                            '
                        >
                            <span className='font-semibold text-dark-700'>ByteSpace</span>{' '}
                            supports individuals or entities in the creation, publication, and
                            administration of educational courses.
                        </p>

                        {/* Features */}
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className='
                                        bg-accent-blue
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    '
                                />

                                <span className='text-[18px] text-dark-700 font-satoshi'>
                                    Share Your Expertise
                                </span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className='
                                        bg-accent-blue
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    '
                                />

                                <span className='text-[18px] text-dark-700 font-satoshi'>
                                    Monetize Your Passion
                                </span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className='
                                        bg-accent-blue
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    '
                                />

                                <span className='text-[18px] text-dark-700 font-satoshi'>
                                    Flexibility and Autonomy
                                </span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Check
                                    size={14}
                                    strokeWidth={3}
                                    className='
                                        bg-accent-blue
                                        text-white
                                        rounded-full
                                        p-[2px]
                                    '
                                />

                                <span className='text-[18px] text-dark-700 font-satoshi'>
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
