import React from 'react';
import about from '../../assets/images/about_us/person.jpg'
import about1 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 flex flex-col lg:flex-row justify-between items-center my-10">
            <div className='relative' >
                <img className='w-[70%] lg:w-3/4 rounded-lg shadow-xl ml-8 lg:ml-0' src={about} alt="" />
                <img className='absolute w-1/2 right-5 top-1/2 rounded-lg shadow-xl border-8 border-white' src={about1} alt="" />
            </div>
            <div className='py-5 mt-28 lg:mt-0'>
                <div>
                    
                <h1 className='text-xl  font-bold text-center lg:text-start'>About Us</h1>

                    <h1 className="text-4xl font-bold leading-none sm:text-5xl text-center lg:text-start">
                        We are qualified &  of
                        <span className="dark:text-violet-600">
                            experience </span>in this field
                    </h1>

                    <p className="px-8 mt-8  text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!
                    </p>

                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!
                    </p>

                </div> 

                <div className="flex flex-wrap justify-center">
                        <button className=" btn btn-outline btn-secondary px-8  m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50" fdprocessedid="gep72qh">Get More Info</button>

                </div>

            </div>

           
        </section>
    );
};

export default About;