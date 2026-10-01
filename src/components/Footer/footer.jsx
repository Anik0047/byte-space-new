import React from "react";

const footerColumns = [
    {
        links: [
            "Featured Courses",
            "Featured Categories",
            "Business",
            "IT",
            "Design",
        ],
    },
    {
        links: [
            "Development",
            "Marketing",
            "Photography",
            "Finance",
            "Sport",
        ],
    },
    {
        links: [
            "Become a Creator",
            "Affiliate Program",
            "Contact",
            "Help",
            "About",
        ],
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-[#D9D9D9]">
            <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[120px]">

                {/* ==========================================
                    TOP FOOTER
                =========================================== */}

                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 lg:gap-10 py-[48px] items-start">

                    {/* ======================================
                        BRAND + NEWSLETTER
                    ======================================= */}

                    <div>
                        {/* Logo */}
                        <div className="mb-3">
                            <img
                                src="/Group.png"
                                alt="ByteSpace"
                                className="w-[117px] h-[37px] object-contain object-left"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-[#666A72] text-[14px] font-satoshi w-[528px] mb-7">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        {/* Newsletter */}
                        <form
                            className="flex items-center gap-3 w-full max-w-[504px]"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                                    flex-1
                                    min-w-0
                                    py-3
                                    px-6
                                    rounded-full
                                    border
                                    border-[#D9D9D9]
                                    px-4
                                    text-[10px]
                                    font-satoshi
                                    text-[#242528]
                                    outline-none
                                    focus:border-[#C6FF00]
                                "
                            />

                            <button
                                type="submit"
                                className="
                                    shrink-0
                                    py-3
                                    px-6
                                    rounded-full
                                    bg-[#D4FB20]
                                    text-[#242528]
                                    text-[10px]
                                    font-medium
                                    font-satoshi
                                    transition-all
                                    duration-200
                                    hover:bg-[#c4eb16]
                                "
                            >
                                Search
                            </button>
                        </form>

                        {/* Privacy Text */}
                        <p className="text-[#666A72] text-[12px]  font-satoshi w-[504px] mt-4">
                            By subscribing, you agree to our Privacy Policy and
                            consent to receive updates from our company.
                        </p>
                    </div>


                    {/* ======================================
                        FOOTER LINK COLUMNS
                    ======================================= */}

                    {footerColumns.map((column, columnIndex) => (
                        <div key={columnIndex} className="lg:pt-[49px]">
                            <ul className="flex flex-col gap-[15px]">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="
                                                text-[#242528]
                                                text-[14px]
                                                font-satoshi
                                                transition-colors
                                                duration-200
                                                hover:text-[#1648FF]
                                            "
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


                {/* ==========================================
                    DIVIDER
                =========================================== */}

                <div className="border-t border-[#D9D9D9]" />


                {/* ==========================================
                    BOTTOM FOOTER
                =========================================== */}

                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-4
                        py-[16px]
                    "
                >
                    {/* Copyright */}
                    <p className="text-[#242528] text-[12px] font-satoshi">
                        © 2023 ByteSpace. All rights reserved.
                    </p>


                    {/* Bottom Links */}
                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="text-[#242528] text-[12px] font-satoshi hover:text-[#1648FF]"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="text-[#242528] text-[12px] font-satoshi hover:text-[#1648FF]"
                        >
                            Terms of Service
                        </a>

                        <a
                            href="#"
                            className="text-[#242528] text-[12px] font-satoshi hover:text-[#1648FF]"
                        >
                            Cookies Settings
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;