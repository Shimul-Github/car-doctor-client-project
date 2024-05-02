import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {
    // ei section e amader data dynamic hobe ebong card e dekhabo. ei component ta jodi home about er moto jodi kono route hoito tahole amra router okhane loader die then ekhane useloader die data load kore dekhane partam jeheto eta home component er under ekta component abong onno kono page eta nai sodo home page e ache so amra ekhane useefect die data load kore dekhabo
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-2xl text-orange-600 font-bold'>Services</h1>
                <h1 className='text-4xl font-bold'>Our Service Area</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
                {
                    services.map(service =>
                        <div key={service._id} className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                            <img src={service.img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="mt-6 mb-2 flex items-center justify-between">
                                <div>
                                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{service.title}</span>
                                    <h2 className="text-xl font-semibold tracking-wide">Price:${service.price}</h2>
                                </div>
                                <div>
                                    <Link to={`/service-details/${service._id}`}>
                                        <FaLongArrowAltRight className='text-orange-600'></FaLongArrowAltRight>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default Services;