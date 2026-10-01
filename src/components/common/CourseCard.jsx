import React from 'react';
import { ListSortAscending } from "lucide-react";

const CourseCard = ({ course, className = '', imageClassName = '' }) => {
    return (
        <div
            className={`rounded-[20px] border border-border-base bg-white p-3 overflow-hidden ${className}`}
        >
            {/* =========================
                Course Image
            ========================== */}
            <div className={`relative overflow-hidden rounded-[12px] ${imageClassName}`}>
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />

                {/* Image bottom information */}
                <div
                    className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2"
                >
                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-gray-900 whitespace-nowrap">
                        {course.lessons}
                    </span>

                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-gray-900 whitespace-nowrap">
                        {course.duration}
                    </span>

                    <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] text-gray-900 whitespace-nowrap">
                        {course.comments}
                    </span>
                </div>
            </div>

            {/* =========================
                Title + Rating
            ========================== */}
            <div className="flex items-center justify-between gap-3 mt-4">
                <h3
                    className="min-w-0 truncate text-[17px] leading-[1.2] font-semibold text-dark-800 font-poppins"
                    title={course.title}
                >
                    {course.title}
                </h3>

                <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[14px] text-gray-600">
                        {course.rating}
                    </span>
                    <span className="text-gray-100 text-[18px]">
                        ★
                    </span>
                </div>
            </div>

            {/* =========================
                Instructor
            ========================== */}
            <div className="flex items-center gap-1 mt-1">
                <span className="text-[11px] text-gray-500">
                    by
                </span>
                <span className="text-[11px] text-accent-blue">
                    {course.instructor}
                </span>
            </div>

            {/* =========================
                Level + Students
            ========================== */}
            <div className="flex items-center gap-2 mt-4">
                {/* Level */}
                <div
                    className="flex items-center gap-2 bg-light-100 rounded-full px-3 py-1.5"
                >
                    <span className="text-gray-900 rotate-270">
                        <ListSortAscending size={16} strokeWidth={2} />
                    </span>
                    <span className="text-[12px] font-medium text-gray-800">
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
                <span className="text-[20px] font-semibold text-accent-blue">
                    {course.price}
                </span>
                <span className="text-[10px] text-gray-700 mb-[2px]">
                    /{course.priceType}
                </span>
            </div>
        </div>
    );
};

export default CourseCard;
