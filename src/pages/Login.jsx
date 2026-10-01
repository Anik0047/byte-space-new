import { ListSortAscending, Star } from "lucide-react";
import CourseCard from "../components/common/CourseCard";
import Button from "../components/common/Button";
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
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    className="w-[373px]" 
                    imageClassName="w-[341px] h-[195px]" 
                  />
                ))}
              </div>


              {/* Course card two */}
              <div className="absolute top-25">
                {courses.slice(1, 2).map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    className="w-[373px]" 
                    imageClassName="w-[341px] h-[195px]" 
                  />
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
              <Button>
                Sign In
              </Button>
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
