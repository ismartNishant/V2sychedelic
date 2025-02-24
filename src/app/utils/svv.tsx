import { Link } from 'lucide-react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

const svv = () => {
    return (
        <div>
            <div className="w-full ">
                <h1 className=" text-4xl sm:text-8xl lg:text-9xl font-Psychedelic ">
                    Sychedelic.
                </h1>
                <div className="flex flex-wrap gap-1 sm:gap-2  items-center  text-xs xl:text-sm">
                    <Link
                        href="/"
                        className="px-2 py-0.5 sm:px-4 py-1 border rounded-full border-neutral-600  hover:scale-105 duration-300 ease-in-out transition-all hover:text-[#FE0055] "
                    >
                        Youtube
                    </Link>
                    <Link
                        href="/"
                        className="px-4 py-1 border rounded-full border-neutral-600 hover:scale-105 duration-300 ease-in-out transition-all hover:text-[#FE0055]"
                    >
                        Instagram
                    </Link>
                    <Link
                        href="/"
                        className="px-4 py-1 border rounded-full border-neutral-600 hover:scale-105 duration-300 ease-in-out transition-all hover:text-[#FE0055]"
                    >
                        X
                    </Link>
                    <Link
                        href="/"
                        className="px-4 py-1 border rounded-full border-neutral-600 hover:scale-105 duration-300 ease-in-out transition-all hover:text-[#FE0055]"
                    >
                        LinkedIn
                    </Link>
                    <p className=" flex items-center gap-2">
                        <MdOutlineEmail className="text-2xl" /> info@logoipsum.com
                    </p>
                </div>
            </div>
            <div className="flex gap-20 text-sm sm:text-lg xl:text-2xl font-semibold justify-center ">
                <div className=" flex lg:hidden flex-col  gap-2 pr-20">
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Blogs
                    </Link>
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Career
                    </Link>
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        About us
                    </Link>
                </div>
                <div className="hidden lg:flex flex-col   gap-5 px-20">
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Blogs
                    </Link>
                </div>
                <div className="hidden lg:flex flex-col gap-5 px-20 w-full">
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Career
                    </Link>
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        About us
                    </Link>
                    <Link
                        href="/"
                        className="relative cursor-pointer hover:text-[#FE0055] duration-300 ease-in-out transition-all group"
                    >
                        <span className="absolute -rotate-45 left-[-40px] top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-white">
                            <FaArrowRight />
                        </span>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default svv