import { ListSortAscending, Star } from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
]


function Login() {
  return (
    <div className="min-h-screen bg-brand-blue bg-grid-pattern overflow-hidden relative">
      <div className='w-[1440px] mx-auto px-[120px]'>
        {/* Logo */}
        <div className="mt-[35px]">
          <a href="/"> <img src="/Vector.png" alt="" /></a>
        </div>

        <div className="grid grid-cols-2 gap-[125px] my-[120px] h-[784px]">
          {/* Left site */}
          <div className="">
            <h1 className="text-light-100 text-[20px] font-semibold font-poppins mb-4">Sign in with ease</h1>
            <p className="text-light-100 text-lg font-satoshi mb-[58px]">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>

            <div className="relative">
              {/* Course card one */}
              <div className="absolute top-0 right-5 z-5">
                {courses.slice(0, 1).map((course) => (
                  <div
                    key={course.id}
                    className="
                  w-[373px]
                            rounded-[20px]
                            border
                            border-border-base
                            bg-white
                            p-3
                            overflow-hidden
                        "
                  >
                    {/* =========================
                            Course Image
                        ========================== */}
                    <div className="relative w-[341px] h-[195px] overflow-hidden rounded-[12px]">
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
                        className="
                                    min-w-0
                                    truncate
                                    text-[17px]
                                    leading-[1.2]
                                    font-semibold
                                    text-dark-800
                                    font-poppins
                                "
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
                        className="
        flex
        items-center
        gap-2
        bg-light-100
        rounded-full
        px-3
        py-1.5
    "
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
                ))}
              </div>


              {/* Course card two */}
              <div className="absolute top-25">
                {courses.slice(1, 2).map((course) => (
                  <div
                    key={course.id}
                    className="
                  w-[373px]
                            rounded-[20px]
                            border
                            border-border-base
                            bg-white
                            p-3
                            overflow-hidden
                        "
                  >
                    {/* =========================
                            Course Image
                        ========================== */}
                    <div className="relative w-[341px] h-[195px] overflow-hidden rounded-[12px]">
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
                        className="
                                    min-w-0
                                    truncate
                                    text-[17px]
                                    leading-[1.2]
                                    font-semibold
                                    text-dark-800
                                    font-poppins
                                "
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
                        className="
        flex
        items-center
        gap-2
        bg-light-100
        rounded-full
        px-3
        py-1.5
    "
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
                ))}
              </div>


              <img src="/Mask Group (4).png" alt="" className="absolute top-6 left-15 z-10" />
              <img src="/Mask Group (1).png" alt="" className="absolute top-100 left-[-25px] z-10" />
              <img src="/Frame-1.png" alt="" className="absolute top-80 right-0 z-10" />


              <div className="p-4 bg-accent-lime-300 z-5 rounded-2xl absolute right-0 top-110">
                <h4 className="text-dark-700 font-medium">Happy Students</h4>
                <div className="text-gray-300 flex items-center gap-1 mb-2">
                  <p className="text-gray-300 text-lg font-medium font-satoshi">4.5 (240)</p>
                  <Star className="text-accent-lime-300 fill-accent-lime-300 w-4 h-4" />
                </div>
                <img src="/Auto Layout Horizontal.png" alt="" />
              </div>

            </div>
          </div>

          {/* Right site */}
          <div className="bg-white py-[61px] px-[63px] rounded-3xl">
            <p className="text-accent-blue-dark text-lg font-satoshi">Sign In</p>
            <h1 className="text-dark-700 text-[44px] font-poppins font-semibold mb-10">Welcome Back</h1>

            <div className="flex flex-col gap-2 mb-6">
              <span className="text-dark-700 text-[14px] font-medium font-satoshi">Email</span>
              <input type="text" className="py-[14px] ps-[24px] border border-border-light rounded-xl" placeholder="designer@example.com" />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-dark-700 text-[14px] font-medium font-satoshi">Password</span>
              <input type="text" className="py-[14px] ps-[24px] border border-border-light rounded-xl" placeholder="******" />
            </div>

            <div className="flex justify-end mb-[73px]">
              <button className="bg-accent-lime-300 py-3 px-6 rounded-3xl text-dark-700 text-lg font-medium font-satoshi">
                Sign In
              </button>
            </div>



            {/* =====================================
                    OR
                ====================================== */}

            <div className="flex items-center gap-2 mb-8">
              <div className="flex-1 h-px bg-border-base" />

              <span className="text-gray-300 text-[13px] font-satoshi px-1">
                or
              </span>

              <div className="flex-1 h-px bg-border-base" />
            </div>


            {/* =====================================
                    Social Login
                ====================================== */}

            <div className="flex justify-center items-center gap-3 mb-[50px]">

              {/* Facebook */}
              <button
                type="button"
                aria-label="Continue with Facebook"
                className="
                            w-[51px]
                            h-[51px]
                            rounded-[15px]
                            border
                            border-border-base
                            bg-white
                            flex
                            items-center
                            justify-center
                            hover:bg-light-500
                            transition-colors
                        "
              >
                <FaFacebookF
                  size={22}
                  className="text-black"
                />
              </button>


              {/* Google */}
              <button
                type="button"
                aria-label="Continue with Google"
                className="
                            w-[51px]
                            h-[51px]
                            rounded-[15px]
                            border
                            border-border-base
                            bg-white
                            flex
                            items-center
                            justify-center
                            hover:bg-light-500
                            transition-colors
                        "
              >
                <FaGoogle size={25} />
              </button>

            </div>


            {/* =====================================
                    Create Account
                ====================================== */}

            <div className="text-center">
              <p className="text-gray-300 text-[13px] font-satoshi">
                New user?{" "}

                <a
                  href="/register"
                  className="
                                text-accent-blue-dark
                                hover:underline
                                transition-all
                            "
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
