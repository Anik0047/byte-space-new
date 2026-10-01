import { ListSortAscending } from "lucide-react";
import React, { useState } from "react";
import CourseCard from "../common/CourseCard";

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
            <h1 className="text-dark-900 text-[44px] leading-[1.2] font-semibold text-center font-poppins mb-4">
                Discover Your Passion,
                <br />
                Build Your Skills
            </h1>

            {/* =========================
                Description
            ========================== */}
            <p className="text-gray-300 text-lg leading-[1.5] font-satoshi max-w-[917px] mx-auto text-center mb-[42px]">
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
                                            ? "bg-accent-lime-200 text-dark-700"
                                            : "bg-light-100 text-gray-900 hover:bg-light-400"
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
                                    text-accent-blue
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
                    <CourseCard 
                        key={course.id} 
                        course={course} 
                        className="w-full"
                        imageClassName="w-full h-[162px]"
                    />
                ))}
            </div>

            {/* =========================
                No Courses
            ========================== */}
            {filteredCourses.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-300 font-satoshi">
                        No courses available for this category.
                    </p>
                </div>
            )}
        </section>
    );
};

export default Skills;