import React from 'react';
import ban1 from '../../assets/images/banner/1.jpg'
import ban2 from '../../assets/images/banner/2.jpg'
import ban3 from '../../assets/images/banner/3.jpg'
import ban4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={ban1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex flex-col lg:flex-row items-center    top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=' lg:w-1/2 lg:pl-12 text-white space-y-4 text-center lg:text-start mt-20 lg:mt-0 '>
                    <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                    <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alternation in some form</p>

                    <button className="btn  btn-primary mr-4">Discover More</button>
                    <button className="btn btn-outline btn-primary text-white">Latest Project</button>

                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 lg:justify-end justify-center gap-3">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={ban2} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center    top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=' w-1/2 pl-12 text-white space-y-4'>
                    <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                    <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alternation in some form</p>

                    <button className="btn  btn-primary mr-4">Discover More</button>
                    <button className="btn btn-outline btn-primary text-white">Latest Project</button>

                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-3">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={ban3} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center    top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=' w-1/2 pl-12 text-white space-y-4'>
                    <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                    <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alternation in some form</p>

                    <button className="btn  btn-primary mr-4">Discover More</button>
                    <button className="btn btn-outline btn-primary text-white">Latest Project</button>

                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-3">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={ban4} className="w-full rounded-xl" />
                <div className="absolute h-full flex items-center    top-0  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=' w-1/2 pl-12 text-white space-y-4'>
                    <h2 className='text-6xl'>Affordable Price For Car Servicing</h2>
                    <p className='text-xl'>There are many variations of passages of available, but the majority have suffered alternation in some form</p>

                    <button className="btn  btn-primary mr-4">Discover More</button>
                    <button className="btn btn-outline btn-primary text-white">Latest Project</button>

                    </div>
                </div>
                <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-3">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;