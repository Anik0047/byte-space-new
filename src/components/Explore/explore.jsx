import React from "react";

const exploreCategories = [
    {
        id: 1,
        title: "Design",
        icon: "/Frame (8).png",
    },
    {
        id: 2,
        title: "Development",
        icon: "/Style=Filled.png",
    },
    {
        id: 3,
        title: "IT & Software",
        icon: "/Style=Filled (1).png",
    },
    {
        id: 4,
        title: "Business",
        icon: "/Style=Round.png",
    },
    {
        id: 5,
        title: "Marketing",
        icon: "/Style=Outlined.png",
    },
    {
        id: 6,
        title: "Photography",
        icon: "/Style=Outlined (1).png",
    },
];

const Explore = () => {
    return (
        <section className="mt-[72px] w-full">
            {/* =========================
                Heading
            ========================== */}
            <h1 className="text-[36px] leading-[1.2] text-dark-900 font-semibold font-poppins text-center mb-4">
                Explore Diverse Learning Paths at Bytespace
            </h1>

            {/* =========================
                Description
            ========================== */}
            <p className="text-[17px] leading-[1.5] text-gray-300 text-center max-w-[917px] mx-auto mb-[68px] font-satoshi">
                At Bytespace, we believe in empowering individuals through
                knowledge. Our diverse range of courses spans various fields,
                ensuring there's something for everyone. Unleash your potential
                and explore our carefully curated categories.
            </p>

            {/* =========================
                Categories
            ========================== */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
                {exploreCategories.map((category) => (
                    <div
                        key={category.id}
                        className="
                            group
                            h-[144px]
                            w-full
                            rounded-[20px]
                            border
                            border-border-base
                            bg-white
                            flex
                            flex-col
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                            cursor-pointer
                        "
                    >
                        {/* Icon */}
                        <div
                            className="
                               p-3
                                rounded-full
                                bg-accent-lime-300
                                flex
                                items-center
                                justify-center
                                mb-4
                                transition-transform
                                duration-300
                                group-hover:scale-105
                            "
                        >
                            <img
                                src={category.icon}
                                alt={category.title}
                                className="w-[36px] h-[36px] object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-[17px] leading-[1.2] text-dark-700 font-satoshi font-medium text-center">
                            {category.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Explore;