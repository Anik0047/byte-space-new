import React from "react";

const testimonials = [
    {
        id: 1,
        image: "/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png",
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        review:
            '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
        id: 2,
        image: "/0577f0e9b7fca2f32639871454da0de95f951709.png",
        name: "James L.",
        role: "Lifelong Learner",
        review:
            '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
        id: 3,
        image: "/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png",
        name: "Alex B.",
        role: "Inspired Creator",
        review:
            '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
];

const Testimonial = () => {
    return (
        <section className="relative w-full overflow-hidden">

            {/* =====================================================
                BACKGROUND GLOWS
            ====================================================== */}

            {/* Center Green Glow */}
            <img
                src="/Ellipse 12 (1).png"
                alt=""
                className="
                    absolute
                    left-1/2
                    top-[-50px]
                    -translate-x-1/2
                    w-[950px]
                    pointer-events-none
                    select-none
                "
            />

            {/* Right Green Glow */}
            <img
                src="/Ellipse 11 (1).png"
                alt=""
                className="
                    absolute
                    right-[0px]
                    top-[40px]
                    pointer-events-none
                    select-none
                "
            />

            {/* Bottom Left Blue Glow */}
            <img
                src="/Ellipse 8 (1).png"
                alt=""
                className="
                    absolute
                    left-[0px]
                    bottom-[0px]
                    pointer-events-none
                    select-none
                "
            />

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="relative z-10 w-[1440px] mx-auto px-[120px]  py-[74px]">

                {/* =================================================
                    HEADER
                ================================================== */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-[58px]">

                    {/* Left Heading */}
                    <div>
                        <h2
                            className="
                                text-[#040819]
                                text-[44px]
                                leading-[1.15]
                                font-semibold
                                font-poppins
                                mt-[39px]
                            "
                        >
                            Discover What Our
                            <br />
                            Community Is Saying
                        </h2>
                    </div>

                    {/* Right Description */}
                    <div>
                        <p
                            className="
                                text-[#666A72]
                                text-[18px]
                                leading-[1.65]
                                font-satoshi
                            "
                        >
                            At ByteSpace, our vibrant community of learners
                            and creators is at the heart of what we do. Hear
                            directly from those who have experienced the
                            transformative journey of learning and creating on
                            our platform. Explore testimonials that reflect the
                            diverse perspectives of enthusiastic learners and
                            accomplished creators.
                        </p>
                    </div>

                </div>


                {/* =================================================
                    TESTIMONIAL CARDS
                ================================================== */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >

                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="
                                bg-white
                                rounded-[20px]
                                px-5
                                py-5
                                min-h-[340px]
                                shadow-[0_8px_30px_rgba(0,0,0,0.03)]
                            "
                        >

                            {/* =========================
                                User Image
                            ========================== */}

                            <div className="mb-5">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="
                                        w-[58px]
                                        h-[58px]
                                        rounded-full
                                        object-cover
                                    "
                                />
                            </div>


                            {/* =========================
                                User Name
                            ========================== */}

                            <h3
                                className="
                                    text-[#080A13]
                                    text-[16px]
                                    font-semibold
                                    font-poppins
                                "
                            >
                                {testimonial.name}
                            </h3>


                            {/* =========================
                                Role
                            ========================== */}

                            <p
                                className="
                                    text-[#1648FF]
                                    text-[13px]
                                    font-satoshi
                                    mt-1
                                "
                            >
                                {testimonial.role}
                            </p>


                            {/* =========================
                                Review
                            ========================== */}

                            <p
                                className="
                                    text-[#666A72]
                                    text-[14px]
                                    leading-[1.7]
                                    font-satoshi
                                    mt-5
                                "
                            >
                                {testimonial.review}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Testimonial;