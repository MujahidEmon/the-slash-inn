import React from 'react';
import heroBg from '../../assets/images/hero/file.svg'
import { BsArrowDownRight, BsPeople } from 'react-icons/bs';
import { IoIosArrowRoundForward } from 'react-icons/io';
const Hero = () => {
    return (
        <div className='relative h-[calc(100vh-57px)] bg-cover bg-center' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                <div
                    className="flex  rounded-xl  items-center justify-center  bg-cover bg-no-repeat"

                >
                    <div className="rounded-xl bg-black/50  px-16 py-10 shadow-lg backdrop-blur-xl max-sm:px-8">
                        <div className="text-white">

                            <form action="#" className='flex md:flex-row gap-6  items-center'>
                                <div className="">
                                    <input
                                        className=" border-b-2  bg-opacity-100 px-6 py-2  placeholder-slate-200 shadow-lg outline-none "
                                        type="date"
                                        name="cinDate"

                                    />
                                </div>
                                <div className=" ">
                                    <input
                                        className="border-b-2  bg-opacity-100 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                                        type="date"
                                        name="coutDate"
                                        placeholder="id@email.com"
                                    />
                                </div>
                                <div className=" relative flex items-center">
                                    <BsPeople className='absolute'></BsPeople>
                                    <input
                                        className="border-b-2  bg-opacity-100 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none "
                                        type="text"
                                        name="guest"
                                        placeholder="guest"
                                    />

                                </div>
                                <div className=" min-w-fit text-black">
                                    <button
                                        type="submit"
                                        className="bg-white rounded-lg font-semibold flex items-center  bg-opacity-100 px-10  py-2 text-black shadow-xl  "
                                    >
                                        Book Now
                                        <IoIosArrowRoundForward  size={25}/>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;