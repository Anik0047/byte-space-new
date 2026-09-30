import { ListSortAscending } from "lucide-react";
import React, { useState } from "react";

const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
];

const courses = [
    {
        id: 1,
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
        category: "UI/UX Design",
    },
    {
        id: 2,
        image: "/card-2.jpg",
        title: "Build Digital Asset",
        instructor: "purepearl studio",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        rating: "4.5",
        level: "Beginner",
        price: "$25",
        priceType: "lifetime",
        category: "Graphic Design",
    },
    {
        id: 3,
        image: "/card-3.jpg",
        title: "the Power of Big Data",
        instructor: "purepearl studio",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        rating: "4.5",
        level: "Beginner",
        price: "$25",
        priceType: "lifetime",
        category: "Data Science",
    },
    {
        id: 4,
        image: "/card-4.jpg",
        title: "Balancing Productivity and Work",
        instructor: "purepearl studio",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        rating: "4.5",
        level: "Beginner",
        price: "$25",
        priceType: "lifetime",
        category: "Productivity",
    },
    {
        id: 5,
        image: "/card-5.jpg",
        title: "Mastering Money Management",
        instructor: "purepearl studio",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        rating: "4.5",
        level: "Beginner",
        price: "$25",
        priceType: "lifetime",
        category: "Marketing",
    },
    {
        id: 6,
        image: "/card-6.jpg",
        title: "From Idea to Startup Success",
        instructor: "purepearl studio",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        rating: "4.5",
        level: "Beginner",
        price: "$25",
        priceType: "lifetime",
        category: "Freelance & Entrepreneurship",
    },
];

const students = [
    "/user-1.jpg",
    "/user-2.jpg",
    "/user-3.jpg",
    "/user-4.jpg",
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("Featured");

    const categoryRows = [
        categories.slice(0, 8),
        categories.slice(8, 14),
        categories.slice(14),
    ];

    /*
     * Featured হলে সব course দেখাবে।
     * অন্য category select করলে সেই category-এর course দেখাবে।
     */
    const filteredCourses =
        activeCategory === "Featured"
            ? courses
            : courses.filter(
                (course) => course.category === activeCategory
            );

    return (
        <section className="w-full">
            {/* =========================
                Heading
            ========================== */}
            <h1 className="text-[#040819] text-[44px] leading-[1.2] font-semibold text-center font-poppins mb-4">
                Discover Your Passion,
                <br />
                Build Your Skills
            </h1>

            {/* =========================
                Description
            ========================== */}
            <p className="text-[#82868E] text-lg leading-[1.5] font-satoshi max-w-[917px] mx-auto text-center mb-[42px]">
                At Bytespace Courses, we bring you closer to life-changing
                knowledge. Explore a variety of courses across different
                fields, from technology to the arts, and make a difference in
                your career and life.
            </p>

            {/* =========================
                Categories
            ========================== */}
            <div className="flex flex-col items-center gap-[16px] mb-[77px]">
                {categoryRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex flex-wrap justify-center items-center gap-x-3 gap-y-3"
                    >
                        {row.map((category) => {
                            const isActive =
                                activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`
                                        px-3.5
                                        py-2
                                        rounded-full
                                        leading-[1.2]
                                        font-medium
                                        font-satoshi
                                        whitespace-nowrap
                                        transition-all
                                        duration-200
                                        ${isActive
                                            ? "bg-[#C6FF00] text-[#242528]"
                                            : "bg-[#F5F5F6] text-[#444750] hover:bg-[#EAEAEA]"
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            );
                        })}

                        {/* + More */}
                        {rowIndex === categoryRows.length - 1 && (
                            <button
                                type="button"
                                className="
                                    px-1
                                    py-2
                                    text-[13px]
                                    leading-[1.2]
                                    font-satoshi
                                    text-[#1648FF]
                                    whitespace-nowrap
                                    hover:underline
                                "
                            >
                                + More
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* =========================
                Course Cards
            ========================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
                {filteredCourses.map((course) => (
                    <div
                        key={course.id}
                        className="
                            w-full
                            rounded-[20px]
                            border
                            border-[#D9D9D9]
                            bg-white
                            p-3
                            overflow-hidden
                        "
                    >
                        {/* =========================
                            Course Image
                        ========================== */}
                        <div className="relative w-full h-[162px] overflow-hidden rounded-[12px]">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                "
                            />

                            {/* Image bottom information */}
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

                        {/* =========================
                            Title + Rating
                        ========================== */}
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

                        {/* =========================
                            Instructor
                        ========================== */}
                        <div className="flex items-center gap-1 mt-1">
                            <span className="text-[11px] text-[#777B83]">
                                by
                            </span>

                            <span className="text-[11px] text-[#1648FF]">
                                {course.instructor}
                            </span>
                        </div>

                        {/* =========================
                            Level + Students
                        ========================== */}
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

                        {/* =========================
                            Price
                        ========================== */}
                        <div className="flex items-end gap-1 mt-4">
                            <span className="text-[20px] font-semibold text-[#1648FF]">
                                {course.price}
                            </span>

                            <span className="text-[10px] text-[#4F4F4F] mb-[2px]">
                                /{course.priceType}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* =========================
                No Courses
            ========================== */}
            {filteredCourses.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-[#82868E] font-satoshi">
                        No courses available for this category.
                    </p>
                </div>
            )}
        </section>
    );
};

export default Skills;